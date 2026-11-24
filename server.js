const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve os arquivos do front-end (index.html, script.js, style.css, imagens)
app.use(express.static(path.join(__dirname, 'front-end')));

const usuarioRoutes = require('./routes/usuarioRoutes');
const chatRoutes = require('./routes/chatRoutes');

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Musicon rodando em http://localhost:${PORT}`);
});

// Listar propostas (opcionalmente filtradas por usuario_id, email ou nome)
app.get('/api/propostas', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM propostas ORDER BY criada_em DESC');
    const normalizadas = rows.map((r) => ({
      id: r.id,
      evento: r.evento,
      data: r.data_horario,
      cache: r.cache_valor,
      requisitos: r.requisitos || '',
      status: r.status || 'Pendente',
      remetenteId: r.remetente_id || '',
      remetenteNome: r.remetente_nome || '',
      remetenteEmail: r.remetente_email || '',
      musicoId: r.musico_id || '',
      musicoNome: r.musico_nome || '',
      musicoEmail: r.musico_email || '',
      criadaEm: r.criada_em
    }));
    res.json(normalizadas);
  } catch (err) {
    console.error('Erro ao buscar propostas:', err);
    res.status(500).json({ erro: 'Erro ao buscar propostas no banco.' });
  }
});

// Criar nova proposta
app.post('/api/propostas', async (req, res) => {
  try {
    const p = req.body || {};
    const id = p.id || `prop_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;

    await db.query(
      `INSERT INTO propostas (
        id, evento, data_horario, cache_valor, requisitos, status,
        remetente_id, remetente_nome, remetente_email,
        musico_id, musico_nome, musico_email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        id,
        p.evento || 'Convite de Evento',
        p.data || 'A combinar',
        p.cache || 'A combinar',
        p.requisitos || '',
        p.status || 'Pendente',
        String(p.remetenteId ?? ''),
        p.remetenteNome || 'Contratante',
        p.remetenteEmail || '',
        String(p.musicoId ?? ''),
        p.musicoNome || '',
        p.musicoEmail || ''
      ]
    );

    res.status(201).json({ ...p, id });
  } catch (err) {
    console.error('Erro ao salvar proposta:', err);
    res.status(500).json({ erro: 'Erro ao salvar proposta no banco.' });
  }
});

// Atualizar status da proposta (Aceita, Concluída, Recusada)
app.patch('/api/propostas/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body || {};
    if (!status) return res.status(400).json({ erro: 'Status obrigatório.' });

    await db.query('UPDATE propostas SET status = ? WHERE id = ?', [status, id]);
    res.json({ id, status });
  } catch (err) {
    console.error('Erro ao atualizar status da proposta:', err);
    res.status(500).json({ erro: 'Erro ao atualizar proposta.' });
  }
});