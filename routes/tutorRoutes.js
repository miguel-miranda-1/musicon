
const express = require("express");
const router = express.Router();

let clienteIA;

async function obterClienteIA() {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY não configurada.");
    }

    if (!clienteIA) {
        const { GoogleGenAI } = await import("@google/genai");

        clienteIA = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });
    }

    return clienteIA;
}

router.post("/mensagem", async (req, res) => {
    try {
        const pergunta = req.body?.pergunta;

        if (typeof pergunta !== "string" || !pergunta.trim()) {
            return res.status(400).json({
                erro: "Digite uma pergunta."
            });
        }

        if (pergunta.length > 2000) {
            return res.status(400).json({
                erro: "A pergunta deve ter no máximo 2000 caracteres."
            });
        }

        const ai = await obterClienteIA();

        const resposta = await ai.models.generateContent({
            model: "gemini-flash-latest",
            contents: pergunta.trim(),
            config: {
                systemInstruction:
                    "Você é o Tutor IA da Escola Conectada. " +
                    "Responda em português brasileiro, com explicações " +
                    "simples e adequadas a estudantes. Ajude o aluno " +
                    "a compreender os exercícios passo a passo. " +
                    "Não solicite senhas nem dados pessoais."
            }
        });

        if (!resposta.text) {
            return res.status(502).json({
                erro: "A IA não retornou uma resposta."
            });
        }

        return res.json({
            resposta: resposta.text
        });

    } catch (erro) {
        console.error("Erro no Tutor IA:", erro.message);

        return res.status(502).json({
            erro: "Não foi possível obter uma resposta. Verifique a configuração da IA."
        });
    }
});

module.exports = router;
