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

// Lista conversas do usuário usando a view vw_chat_resumo
async function listarConversas(req, res) {
  try {
    const usuarioId = Number(req.query.usuario_id);
    if (!usuarioId) {
      return res.status(400).json({ erro: 'Informe o usuario_id.' });
    }

    const [rows] = await queryDb(
      `SELECT
         v.conversa_id,
         v.tipo,
         v.nome_grupo,
         v.ultima_mensagem,
         v.ultima_data,
         v.nao_lidas,
         CASE
           WHEN v.tipo = 'direta' THEN (
             SELECT u.nome
             FROM conversa_participantes cp2
             JOIN usuarios u ON u.id = cp2.usuario_id
             WHERE cp2.conversa_id = v.conversa_id
               AND cp2.usuario_id <> ?
             LIMIT 1
           )
           ELSE v.nome_grupo
         END AS titulo_exibicao
       FROM vw_chat_resumo v
       WHERE v.usuario_id = ?
       ORDER BY COALESCE(v.ultima_data, '1970-01-01') DESC, v.conversa_id DESC`,
      [usuarioId, usuarioId]
    );

    return res.json(rows);
  } catch (err) {
    console.error('Erro ao listar conversas:', err);
    return res.status(500).json({ erro: 'Erro ao buscar conversas.' });
  }
}

// Lista mensagens de uma conversa e marca como lida para o usuário
async function listarMensagens(req, res) {
  try {
    const conversaId = Number(req.params.conversaId || req.query.conversa_id);
    const usuarioId = Number(req.query.usuario_id);

    if (!conversaId) {
      return res.status(400).json({ erro: 'Informe o conversa_id.' });
    }

    const [mensagens] = await queryDb(
      `SELECT
         m.id,
         m.conversa_id,
         m.remetente_id,
         u.nome AS remetente_nome,
         u.instrumento_principal AS remetente_instrumento,
         m.conteudo,
         m.enviada_em
       FROM mensagens m
       JOIN usuarios u ON u.id = m.remetente_id
       WHERE m.conversa_id = ?
       ORDER BY m.enviada_em ASC, m.id ASC`,
      [conversaId]
    );

    if (usuarioId) {
      await queryDb(
        `UPDATE conversa_participantes
         SET ultima_leitura = NOW()
         WHERE conversa_id = ? AND usuario_id = ?`,
        [conversaId, usuarioId]
      );
    }

    return res.json(mensagens);
  } catch (err) {
    console.error('Erro ao listar mensagens:', err);
    return res.status(500).json({ erro: 'Erro ao buscar mensagens.' });
  }
}

// Envia nova mensagem na conversa
async function enviarMensagem(req, res) {
  try {
    const { conversa_id, remetente_id, conteudo } = req.body;

    if (!conversa_id || !remetente_id || !conteudo || !String(conteudo).trim()) {
      return res.status(400).json({ erro: 'conversa_id, remetente_id e conteudo são obrigatórios.' });
    }

    const [result] = await queryDb(
      `INSERT INTO mensagens (conversa_id, remetente_id, conteudo)
       VALUES (?, ?, ?)`,
      [Number(conversa_id), Number(remetente_id), String(conteudo).trim()]
    );

    await queryDb(
      `UPDATE conversa_participantes
       SET ultima_leitura = NOW()
       WHERE conversa_id = ? AND usuario_id = ?`,
      [Number(conversa_id), Number(remetente_id)]
    );

    const [rows] = await queryDb(
      `SELECT
         m.id,
         m.conversa_id,
         m.remetente_id,
         u.nome AS remetente_nome,
         u.instrumento_principal AS remetente_instrumento,
         m.conteudo,
         m.enviada_em
       FROM mensagens m
       JOIN usuarios u ON u.id = m.remetente_id
       WHERE m.id = ?`,
      [result.insertId]
    );

    return res.status(201).json(rows[0]);
  } catch (err) {
    console.error('Erro ao enviar mensagem:', err);
    return res.status(500).json({ erro: 'Erro ao enviar mensagem.' });
  }
}

module.exports = {
  listarConversas,
  listarMensagens,
  enviarMensagem
};