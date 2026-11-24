// =====================================================
// SISTEMA DE MENSAGENS PRIVADAS ENTRE CONTAS
// =====================================================

let usuarioConversandoId = null;

// Inicializa a lista assim que entra na aba ou atualiza
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (typeof renderizarListaConversas === 'function') {
      renderizarListaConversas();
    }
  }, 300);
});

function abrirChatComUsuario(outroId) {
  const outroUsuario = (appState.perfisComunidade || []).find(p => Number(p.id) === Number(outroId));
  if (!outroUsuario) return;

  usuarioConversandoId = Number(outroId);
  switchTab('chat');
  renderizarListaConversas();
  renderizarMensagensChatPrivado(usuarioConversandoId);
}

function renderizarListaConversas() {
  const listaDiv = document.getElementById('lista-conversas');
  if (!listaDiv || !appState.currentUser) return;

  const meuId = Number(appState.currentUser.id);
  const outrosUsuarios = (appState.perfisComunidade || []).filter(p => Number(p.id) !== meuId);

  if (outrosUsuarios.length === 0) {
    listaDiv.innerHTML = `<p class="text-muted" style="padding: 1rem; font-size: 0.85rem;">Nenhum outro músico na roda.</p>`;
    return;
  }

  listaDiv.innerHTML = outrosUsuarios.map(u => {
    const nome = u.nome || u.name || 'Músico';
    const ativoClass = usuarioConversandoId === Number(u.id) ? 'active' : '';
    
    // Busca todas as mensagens trocadas entre mim e este usuário (em qualquer direção)
    const msgs = (appState.mensagensPrivadas || []).filter(m => {
      const rem = Number(m.remetenteId);
      const dest = Number(m.destinatarioId);
      const outroId = Number(u.id);
      return (rem === meuId && dest === outroId) || (rem === outroId && dest === meuId);
    });

    const ultimaMsg = msgs.length > 0 ? msgs[msgs.length - 1].texto : 'Clique para conversar...';

    return `
      <div class="conversa-item ${ativoClass}" onclick="abrirChatComUsuario(${u.id})">
        <div class="perfil-mini-avatar sm">${u.iniciais || 'MG'}</div>
        <div style="flex:1; overflow:hidden;">
          <h4 style="font-size:0.9rem; margin-bottom:0.1rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${nome}</h4>
          <p class="text-muted" style="font-size:0.75rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${ultimaMsg}</p>
        </div>
      </div>
    `;
  }).join('');
}

function renderizarMensagensChatPrivado(outroId) {
  const vazioBox = document.getElementById('chat-vazio-placeholder');
  const conteudoBox = document.getElementById('chat-ativo-conteudo');
  const mensagensBox = document.getElementById('chat-mensagens-box');
  
  if (!appState.currentUser) return;
  const meuId = Number(appState.currentUser.id);
  const outroIdNum = Number(outroId);
  
  const outroUsuario = (appState.perfisComunidade || []).find(p => Number(p.id) === outroIdNum);
  if (!outroUsuario) return;

  if (vazioBox) vazioBox.classList.add('hidden');
  if (conteudoBox) conteudoBox.classList.remove('hidden');

  if (document.getElementById('chat-ativo-nome')) document.getElementById('chat-ativo-nome').textContent = outroUsuario.nome || outroUsuario.name;
  if (document.getElementById('chat-ativo-avatar')) document.getElementById('chat-ativo-avatar').textContent = outroUsuario.iniciais || 'MG';
  if (document.getElementById('chat-ativo-sub')) document.getElementById('chat-ativo-sub').textContent = outroUsuario.instrumento || 'Músico';

  // Filtra as mensagens estritamente do chat entre o usuário logado e o contato aberto
  const msgs = (appState.mensagensPrivadas || []).filter(m => {
    const rem = Number(m.remetenteId);
    const dest = Number(m.destinatarioId);
    return (rem === meuId && dest === outroIdNum) || (rem === outroIdNum && dest === meuId);
  });

  if (mensagensBox) {
    if (msgs.length === 0) {
      mensagensBox.innerHTML = `<div style="text-align:center; color:var(--text-muted); margin-top:2rem; font-size:0.85rem;">Nenhuma mensagem nesta conversa ainda. Mande um salve!</div>`;
    } else {
      mensagensBox.innerHTML = msgs.map(m => {
        const souEu = Number(m.remetenteId) === meuId;
        const nomeAutor = souEu ? 'Você' : (outroUsuario.nome || outroUsuario.name);

        return `
          <div class="chat-msg-item ${souEu ? 'meu-msg' : ''}">
            <div class="chat-msg-header">
              <strong>${nomeAutor}</strong>
              <span>${m.hora || ''}</span>
            </div>
            <div class="chat-msg-body">${m.texto}</div>
          </div>
        `;
      }).join('');
    }

    mensagensBox.scrollTop = mensagensBox.scrollHeight;
  }
}

function enviarMensagemPrivada() {
  const input = document.getElementById('chat-input-texto');
  if (!input || !usuarioConversandoId || !appState.currentUser) return;
  const texto = input.value.trim();
  if (!texto) return;

  const agora = new Date();
  const horaFormatada = agora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const novaMsg = {
    id: Date.now(),
    remetenteId: Number(appState.currentUser.id),
    destinatarioId: Number(usuarioConversandoId),
    texto: texto,
    hora: horaFormatada
  };

  if (!appState.mensagensPrivadas) {
    appState.mensagensPrivadas = [];
  }

  appState.mensagensPrivadas.push(novaMsg);
  salvarEstado(); // Salva no localStorage compartilhado da aplicação
  input.value = '';
  
  // Atualiza a tela de chat e a lista lateral imediatamente
  renderizarMensagensChatPrivado(usuarioConversandoId);
  renderizarListaConversas();
}