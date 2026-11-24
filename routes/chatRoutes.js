const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/conversas', chatController.listarConversas);
router.get('/mensagens/:conversaId', chatController.listarMensagens);
router.get('/mensagens', chatController.listarMensagens);
router.post('/mensagens', chatController.enviarMensagem);

module.exports = router;