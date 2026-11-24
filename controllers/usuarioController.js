const db = require('../config/db'); // se o seu arquivo de conexão tiver outro nome/caminho, ajuste aqui

// Garante que a query funcione tanto se "db" for um pool mysql2/promise quanto mysql2 callback
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

async function listarUsuarios(req, res) {
  try {
    const [rows] = await queryDb(
      `SELECT id, nome, email, tipo_perfil, instrumento_principal, nivel_experiencia, cidade, bio, tema_preferido
       FROM usuarios
       WHERE ativo = 1
       ORDER BY nome ASC`
    );
    return res.json(rows);
  } catch (err) {
    console.error('Erro ao listar usuários:', err);
    return res.status(500).json({ erro: 'Erro ao buscar usuários no banco.' });
  }
}

async function cadastrarUsuario(req, res) {
  try {
    const {
      nome,
      email,
      senha,
      senha_hash,
      tipo_perfil,
      instrumento_principal,
      nivel_experiencia,
      cidade,
      bio
    } = req.body;

    const senhaRecebida = senha_hash || senha;

    if (!nome || !email || !senhaRecebida) {
      return res.status(400).json({ erro: 'Nome, e-mail e senha são obrigatórios.' });
    }

    const emailNormalizado = String(email).trim().toLowerCase();

    const [existente] = await queryDb(
      'SELECT id FROM usuarios WHERE email = ?',
      [emailNormalizado]
    );

    if (existente.length > 0) {
      return res.status(409).json({ erro: 'Este e-mail já está cadastrado.' });
    }

    const [result] = await queryDb(
      `INSERT INTO usuarios
        (nome, email, senha_hash, tipo_perfil, instrumento_principal, nivel_experiencia, cidade, bio)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        String(nome).trim(),
        emailNormalizado,
        senhaRecebida,
        tipo_perfil || 'aluno',
        instrumento_principal || null,
        nivel_experiencia || 'iniciante',
        cidade || 'Lorena - SP',
        bio || null
      ]
    );

    const [novoUsuario] = await queryDb(
      `SELECT id, nome, email, tipo_perfil, instrumento_principal, nivel_experiencia, cidade, bio, tema_preferido
       FROM usuarios
       WHERE id = ?`,
      [result.insertId]
    );

    return res.status(201).json({
      mensagem: 'Usuário cadastrado com sucesso!',
      usuario: novoUsuario[0]
    });
  } catch (err) {
    console.error('Erro ao cadastrar usuário:', err);
    return res.status(500).json({ erro: 'Erro ao cadastrar usuário.' });
  }
}

async function loginUsuario(req, res) {
  try {
    const { email, senha, senha_hash } = req.body;
    const senhaRecebida = senha_hash || senha;

    if (!email || !senhaRecebida) {
      return res.status(400).json({ erro: 'Informe e-mail e senha.' });
    }

    const emailNormalizado = String(email).trim().toLowerCase();

    const [rows] = await queryDb(
      `SELECT id, nome, email, senha_hash, tipo_perfil, instrumento_principal, nivel_experiencia, cidade, bio, tema_preferido
       FROM usuarios
       WHERE email = ? AND ativo = 1`,
      [emailNormalizado]
    );

    if (rows.length === 0) {
      return res.status(401).json({ erro: 'E-mail ou senha inválidos.' });
    }

    const usuario = rows[0];

    // Compatibilidade com os hashes de exemplo do seed ou senha direta durante os testes iniciais
    const senhaValida =
      usuario.senha_hash === senhaRecebida ||
      (usuario.senha_hash && usuario.senha_hash.startsWith('$2y$10$ExemploHashSenha') && senhaRecebida === '123456');

    if (!senhaValida) {
      return res.status(401).json({ erro: 'E-mail ou senha inválidos.' });
    }

    delete usuario.senha_hash;
    return res.json({
      mensagem: 'Login realizado com sucesso!',
      usuario
    });
  } catch (err) {
    console.error('Erro ao realizar login:', err);
    return res.status(500).json({ erro: 'Erro ao realizar login.' });
  }
}

async function atualizarTema(req, res) {
  try {
    const { id } = req.params;
    const { tema_preferido } = req.body;

    if (!['light', 'dark'].includes(tema_preferido)) {
      return res.status(400).json({ erro: 'Tema inválido. Use light ou dark.' });
    }

    await queryDb(
      'UPDATE usuarios SET tema_preferido = ? WHERE id = ?',
      [tema_preferido, id]
    );

    return res.json({ mensagem: 'Tema atualizado.', tema_preferido });
  } catch (err) {
    console.error('Erro ao atualizar tema:', err);
    return res.status(500).json({ erro: 'Erro ao atualizar tema.' });
  }
}

module.exports = {
  listarUsuarios,
  cadastrarUsuario,
  loginUsuario,
  atualizarTema
};