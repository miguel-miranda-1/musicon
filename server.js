
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const usuarioRoutes = require("./routes/usuarioRoutes");
const authRoutes = require("./routes/authRoutes");
const professorRoutes = require("./routes/professorRoutes");
const alunoRoutes = require("./routes/alunoRoutes");
const turmaRoutes = require("./routes/turmaRoutes");
const matriculaRoutes = require("./routes/matriculaRoutes");
const disciplinaRoutes = require("./routes/disciplinaRoutes");
const aulaRoutes = require("./routes/aulaRoutes");
const conteudoOfflineRoutes = require("./routes/conteudoOfflineRoutes");
const equipamentoRoutes = require("./routes/equipamentoRoutes");
const infraestruturaAlertaRoutes = require("./routes/infraestruturaAlertaRoutes");
const tutorRoutes = require("./routes/tutorRoutes");
const mensagemRoutes = require("./routes/mensagemRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pastaFrontend = path.join(__dirname, "front-end");

app.use(express.static(pastaFrontend));

app.get("/", (req, res) => {
    res.sendFile(path.join(pastaFrontend, "index.html"));
});

app.use(usuarioRoutes);
app.use("/auth", authRoutes);
app.use(professorRoutes);
app.use(alunoRoutes);
app.use(turmaRoutes);
app.use(matriculaRoutes);
app.use(disciplinaRoutes);
app.use(aulaRoutes);
app.use(conteudoOfflineRoutes);
app.use(equipamentoRoutes);
app.use(infraestruturaAlertaRoutes);

app.use("/api/tutor", tutorRoutes);
app.use(mensagemRoutes);

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada.",
        caminho: req.originalUrl
    });
});

app.use((erro, req, res, next) => {
    console.error("Erro no servidor:", erro);

    if (res.headersSent) {
        return next(erro);
    }

    res.status(500).json({
        erro: "Ocorreu um erro interno no servidor."
    });
});

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {
    console.log(`Escola Conectada rodando em http://localhost:${PORTA}`);
});
