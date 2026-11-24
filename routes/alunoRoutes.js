const express = require('express');
const router = express.Router();
const db = require('../config/db');

async function queryDb(sql, params = []) {
  if (typeof db.query === 'function') {
    const res = db.query(sql, params);
    if (res && typeof res.then === 'function') {
      return await res;
    }
    return await new Promise((resolve, reject) => {
      db.query(sql, params, (err, rows, fields) => {
        if (err) reject(err);
        else resolve([rows, fields]);
      });
    });
  }
  throw new Error('Objeto de conexão em ../config/db não possui método query.');
}

// Lista alunos cadastrados
router.get('/', async (req, res) => {
  try {
    const [rows] = await queryDb(
      `SELECT
         id,
         nome,
         email,
         tipo_perfil,
         instrumento_principal,
         nivel_experiencia,
         cidade,
         bio
       FROM usuarios
       WHERE ativo = 1 AND tipo_perfil = 'aluno'
       ORDER BY nome ASC`
    );
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao buscar alunos:', err);
    return res.status(500).json({ erro: 'Erro ao buscar alunos.' });
  }
});

// Lista oficinas ativas e quantidade de inscritos
router.get('/oficinas', async (req, res) => {
  try {
    const [rows] = await queryDb(
      `SELECT
         o.*,
         u.nome AS instrutor_nome,
         COUNT(oi.id) AS total_inscritos
       FROM oficinas o
       LEFT JOIN usuarios u ON u.id = o.instrutor_id
       LEFT JOIN oficina_inscricoes oi ON oi.oficina_id = o.id AND oi.status = 'inscrito'
       WHERE o.ativa = 1
       GROUP BY o.id
       ORDER BY o.id ASC`
    );
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao buscar oficinas:', err);
    return res.status(500).json({ erro: 'Erro ao buscar oficinas.' });
  }
});

// Inscreve um aluno/usuário em uma oficina
router.post('/oficinas/:oficinaId/inscrever', async (req, res) => {
  try {
    const oficinaId = Number(req.params.oficinaId);
    const { usuario_id } = req.body;

    if (!oficinaId || !usuario_id) {
      return res.status(400).json({ erro: 'oficinaId e usuario_id são obrigatórios.' });
    }

    await queryDb(
      `INSERT INTO oficina_inscricoes (oficina_id, usuario_id, status)
       VALUES (?, ?, 'inscrito')
       ON DUPLICATE KEY UPDATE status = 'inscrito'`,
      [oficinaId, Number(usuario_id)]
    );

    return res.status(201).json({ mensagem: 'Inscrição realizada com sucesso!' });
  } catch (err) {
    console.error('Erro ao inscrever na oficina:', err);
    return res.status(500).json({ erro: 'Erro ao realizar inscrição.' });
  }
});

module.exports = router;