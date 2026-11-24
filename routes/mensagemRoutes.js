
const express = require("express");
const router = express.Router();
const conexao = require("../config/database");

function idValido(valor) {
    return Number.isInteger(Number(valor)) && Number(valor) > 0;
}

function consultar(sql, parametros) {
    return new Promise((resolve, reject) => {
        conexao.query(sql, parametros, (erro, resultados) => {
            if (erro) return reject(erro);
            resolve(resultados);
        });
    });
}

function responderErro(res, erro, mensagem) {
    console.error(mensagem, erro);
    return res.status(500).json({
        erro: mensagem
    });
}

async function alunoExiste(usuarioId) {
    const resultado = await consultar(
        `SELECT a.id_aluno
         FROM alunos a
         INNER JOIN usuarios u ON u.id_usuario = a.id_usuario
         WHERE a.id_usuario = ? AND u.ativo = 1`,
        [usuarioId]
    );

    return resultado.length > 0;
}

async function alunoNaTurma(usuarioId, turmaId) {
    const resultado = await consultar(
        `SELECT m.id_matricula
         FROM matriculas m
         INNER JOIN alunos a ON a.id_aluno = m.id_aluno
         INNER JOIN usuarios u ON u.id_usuario = a.id_usuario
         WHERE a.id_usuario = ?
           AND m.id_turma = ?
           AND u.ativo = 1`,
        [usuarioId, turmaId]
    );

    return resultado.length > 0;
}

// Listar alunos disponíveis para conversas privadas
router.get("/chat/alunos/:usuarioId", async (req, res) => {
    const usuarioId = Number(req.params.usuarioId);

    if (!idValido(usuarioId)) {
        return res.status(400).json({ erro: "ID inválido." });
    }

    try {
        if (!(await alunoExiste(usuarioId))) {
            return res.status(403).json({
                erro: "Apenas alunos cadastrados podem usar este chat."
            });
        }

        const alunos = await consultar(
            `SELECT
                u.id_usuario,
                u.nome
             FROM usuarios u
             INNER JOIN alunos a ON a.id_usuario = u.id_usuario
             WHERE u.ativo = 1
               AND u.id_usuario <> ?
             ORDER BY u.nome`,
            [usuarioId]
        );

        res.json(alunos);
    } catch (erro) {
        responderErro(res, erro, "Não foi possível carregar os alunos.");
    }
});

// Listar turmas em que o aluno está matriculado
router.get("/chat/turmas/:usuarioId", async (req, res) => {
    const usuarioId = Number(req.params.usuarioId);

    if (!idValido(usuarioId)) {
        return res.status(400).json({ erro: "ID inválido." });
    }

    try {
        if (!(await alunoExiste(usuarioId))) {
            return res.status(403).json({ erro: "Aluno não autorizado." });
        }

        const turmas = await consultar(
            `SELECT DISTINCT
                t.id_turma,
                t.nome,
                t.ano_letivo,
                t.turno
             FROM turmas t
             INNER JOIN matriculas m ON m.id_turma = t.id_turma
             INNER JOIN alunos a ON a.id_aluno = m.id_aluno
             WHERE a.id_usuario = ?
             ORDER BY t.nome`,
            [usuarioId]
        );

        res.json(turmas);
    } catch (erro) {
        responderErro(res, erro, "Não foi possível carregar as turmas.");
    }
});

// Buscar conversa privada
router.get("/mensagens/:usuarioId/:outroUsuarioId", async (req, res) => {
    const usuarioId = Number(req.params.usuarioId);
    const outroUsuarioId = Number(req.params.outroUsuarioId);

    if (
        !idValido(usuarioId) ||
        !idValido(outroUsuarioId) ||
        usuarioId === outroUsuarioId
    ) {
        return res.status(400).json({ erro: "IDs inválidos." });
    }

    try {
        if (
            !(await alunoExiste(usuarioId)) ||
            !(await alunoExiste(outroUsuarioId))
        ) {
            return res.status(403).json({
                erro: "A conversa só está disponível para alunos cadastrados."
            });
        }

        const mensagens = await consultar(
            `SELECT
                id_mensagem,
                remetente_id,
                destinatario_id,
                mensagem,
                data_envio,
                lida
             FROM mensagens
             WHERE id_turma IS NULL
               AND (
                   (remetente_id = ? AND destinatario_id = ?)
                   OR
                   (remetente_id = ? AND destinatario_id = ?)
               )
             ORDER BY data_envio ASC`,
            [usuarioId, outroUsuarioId, outroUsuarioId, usuarioId]
        );

        res.json(mensagens);
    } catch (erro) {
        responderErro(res, erro, "Não foi possível carregar as mensagens.");
    }
});

// Enviar mensagem privada
router.post("/mensagens", async (req, res) => {
    const remetenteId = Number(req.body.remetente_id);
    const destinatarioId = Number(req.body.destinatario_id);
    const mensagem = typeof req.body.mensagem === "string"
        ? req.body.mensagem.trim()
        : "";

    if (
        !idValido(remetenteId) ||
        !idValido(destinatarioId) ||
        remetenteId === destinatarioId ||
        !mensagem ||
        mensagem.length > 5000
    ) {
        return res.status(400).json({
            erro: "Confira os participantes e a mensagem (máximo de 5000 caracteres)."
        });
    }

    try {
        if (
            !(await alunoExiste(remetenteId)) ||
            !(await alunoExiste(destinatarioId))
        ) {
            return res.status(403).json({
                erro: "Participante não autorizado."
            });
        }

        const resultado = await consultar(
            `INSERT INTO mensagens
                (remetente_id, destinatario_id, mensagem)
             VALUES (?, ?, ?)`,
            [remetenteId, destinatarioId, mensagem]
        );

        res.status(201).json({
            mensagem: "Mensagem enviada.",
            id_mensagem: resultado.insertId
        });
    } catch (erro) {
        responderErro(res, erro, "Não foi possível enviar a mensagem.");
    }
});

// Buscar mensagens do grupo da turma
router.get("/chat/turmas/:turmaId/mensagens/:usuarioId", async (req, res) => {
    const turmaId = Number(req.params.turmaId);
    const usuarioId = Number(req.params.usuarioId);

    if (!idValido(turmaId) || !idValido(usuarioId)) {
        return res.status(400).json({ erro: "IDs inválidos." });
    }

    try {
        if (!(await alunoNaTurma(usuarioId, turmaId))) {
            return res.status(403).json({
                erro: "Você não está matriculado nesta turma."
            });
        }

        const mensagens = await consultar(
            `SELECT
                m.id_mensagem,
                m.remetente_id,
                u.nome AS remetente_nome,
                m.mensagem,
                m.data_envio
             FROM mensagens m
             INNER JOIN usuarios u ON u.id_usuario = m.remetente_id
             WHERE m.id_turma = ?
             ORDER BY m.data_envio ASC`,
            [turmaId]
        );

        res.json(mensagens);
    } catch (erro) {
        responderErro(res, erro, "Não foi possível carregar o grupo.");
    }
});

// Enviar mensagem ao grupo da turma
router.post("/chat/turmas/:turmaId/mensagens", async (req, res) => {
    const turmaId = Number(req.params.turmaId);
    const remetenteId = Number(req.body.remetente_id);
    const mensagem = typeof req.body.mensagem === "string"
        ? req.body.mensagem.trim()
        : "";

    if (
        !idValido(turmaId) ||
        !idValido(remetenteId) ||
        !mensagem ||
        mensagem.length > 5000
    ) {
        return res.status(400).json({
            erro: "Confira a turma e a mensagem (máximo de 5000 caracteres)."
        });
    }

    try {
        if (!(await alunoNaTurma(remetenteId, turmaId))) {
            return res.status(403).json({
                erro: "Você não está matriculado nesta turma."
            });
        }

        const resultado = await consultar(
            `INSERT INTO mensagens
                (remetente_id, destinatario_id, id_turma, mensagem)
             VALUES (?, NULL, ?, ?)`,
            [remetenteId, turmaId, mensagem]
        );

        res.status(201).json({
            mensagem: "Mensagem enviada ao grupo.",
            id_mensagem: resultado.insertId
        });
    } catch (erro) {
        responderErro(res, erro, "Não foi possível enviar a mensagem ao grupo.");
    }
});

module.exports = router;
