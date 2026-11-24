const INTERVALO_CARROSSEL_MS = 3500;
const API_BASE = '';
const STORAGE_PROPOSTAS_CHAVE = 'musicon_propostas_compartilhadas_v1';
const STORAGE_AVALIACOES_CHAVE = 'musicon_avaliacoes_reais_v1';

const dadosInstrumentos = {
  pandeiro: {
    titulo: "O Pandeiro: A Alma Rítmica do Samba",
    historia: "De origem milenar e ancestral, o pandeiro encontrou no Brasil e nas rodas de choro e samba o seu habitat definitivo. Com suas platinelas brilhantes e pele ajustável, ele não é apenas um marcador de tempo, mas um verdadeiro conversador rítmico capaz de solar, sustentar o balanço e ditar o ritmo da festa inteira.",
    instrumentoFiltro: "Pandeiro"
  },
  cavaquinho: {
    titulo: "O Cavaquinho: O Brilho da Harmonia",
    historia: "Trazido pelos portugueses e abraçado pelo povo brasileiro, o cavaquinho é o instrumento que faz a ponte entre a levada rítmica e a melodia. Nas rodas de partido-alto e samba raiz, sua levada cortante dá o molho inconfundível que anima qualquer calçada.",
    instrumentoFiltro: "Cavaquinho"
  },
  violao7: {
    titulo: "O Violão de 7 Cordas: As Baixarias e o Choro",
    historia: "A sétima corda grave (afinada em Dó) revolucionou a música popular brasileira ao permitir que o violão executasse as famosas 'baixarias' — linhas melódicas que preenchem os espaços entre os acordes e conduzem com elegância a harmonia do samba e do choro.",
    instrumentoFiltro: "Violão"
  },
  surdo: {
    titulo: "O Surdo: O Coração da Bateria",
    historia: "O surdo é o tambor de maior diâmetro e o responsável pelos graves profundos (o 'tum-tum') que marcam o compasso e fazem o chão tremer nas escolas de samba e nos blocos de rua. É a pulsação visceral que dita o passo de todos os batuqueiros.",
    instrumentoFiltro: "Percussão"
  }
};

const slidesHistoriaMusicon = [
  {
    imagem: 'foto1.png',
    kicker: '1 / 7 • MÚSICA DESDE CRIANÇA',
    titulo: 'Música desde a infância',
    subtitulo: 'O primeiro contato com o som e as rodas veio cedo',
    texto: 'Desde criança sempre tive contato com a música, o ritmo e as rodas. Esse vínculo de infância despertou o amor por tocar e o desejo de criar algo para a comunidade musical.'
  },
  {
    imagem: 'foto2.png',
    kicker: '2 / 7 • RAÍZES E CONVIVÊNCIA',
    titulo: 'Crescer ouvindo e sentindo o som de perto',
    subtitulo: 'Acompanhar ensaios e encontros moldou meu olhar',
    texto: 'Acompanhar de perto ensaios, encontros e o dia a dia de quem faz música mostrou a importância de dar espaço e visibilidade a quem mantém a cultura viva.'
  },
  {
    imagem: 'foto3.png',
    kicker: '3 / 7 • FALTA DE MÚSICOS NO MERCADO',
    titulo: 'Quando falta músico disponível na hora',
    subtitulo: 'Um problema comum em rodas, eventos e apresentações',
    texto: 'Muitas vezes é difícil achar músicos livres quando surge um evento, ensaio ou roda. A falta de contato rápido acaba atrapalhando quem precisa de som ou quer tocar.'
  },
  {
    imagem: 'foto4.png',
    kicker: '4 / 7 • NASCIMENTO DO MUSICON',
    titulo: 'Criei o site para facilitar a procura por músicos',
    subtitulo: 'A união da minha história com uma necessidade real',
    texto: 'A criação do Musicon veio exatamente da minha ligação com a música desde pequeno e da vontade de facilitar encontrar músicos quando alguém precisar.'
  },
  {
    imagem: 'foto5.png',
    kicker: '5 / 7 • CONTATO RÁPIDO E DIRETO',
    titulo: 'Perfis, propostas e conversa no mesmo lugar',
    subtitulo: 'Menos correria para achar quem combina com a roda',
    texto: 'Quem procura músico pode ver os perfis, enviar proposta e conversar diretamente pelo chat sem perder tempo procurando em vários lugares.'
  },
  {
    imagem: 'foto6.png',
    kicker: '6 / 7 • ESTUDO E REPERTÓRIO',
    titulo: 'Apoio para estudo, ensaio e roda',
    subtitulo: 'Harmonia, percussão e cadernos de cifras reunidos',
    texto: 'Além de facilitar a busca por músicos, o portal reúne partituras gerais de estudo em harmonia e percussão e cadernos de cifras de samba e pagode tradicionais.'
  },
  {
    imagem: 'foto7.jpeg',
    kicker: '7 / 7 • COMUNIDADE MUSICAL',
    titulo: 'Aproximando quem precisa de música de quem toca',
    subtitulo: 'Um ponto de encontro para manter a roda girando',
    texto: 'O Musicon nasceu para encurtar caminhos, fortalecer parcerias e ajudar a nunca faltar músico quando a roda chamar.'
  }
];

const VIDEOS_SAMBA_15 = [
  { titulo: 'Samba de Roda #01', tag: 'Samba de Roda', descricao: 'Samba de Roda ao Vivo para sentir o balanço da roda.', url: 'https://www.youtube.com/watch?v=BTot2YODHSg' },
  { titulo: 'Samba de Raiz & Batucada #02', tag: 'Samba de Raiz', descricao: 'Seleção tradicional de samba de raiz e batucada.', url: 'https://www.youtube.com/watch?v=_yiVulTqnFg' },
  { titulo: 'Roda de Samba Raiz #03', tag: 'Roda de Samba', descricao: 'Clima de roda de samba tradicional ao vivo.', url: 'https://www.youtube.com/watch?v=rMIrSAxSknM' },
  { titulo: 'Partido Alto #04', tag: 'Partido Alto', descricao: 'Levada marcante e improviso de partido alto.', url: 'https://www.youtube.com/watch?v=LycPFwEpiW0' },
  { titulo: 'Partido Alto em Roda #05', tag: 'Partido Alto', descricao: 'Condução rítmica e energia de partido alto.', url: 'https://www.youtube.com/watch?v=IAs227TKclo' },
  { titulo: 'Clássicos de Partido Alto #06', tag: 'Partido Alto', descricao: 'Seleção clássica de partido alto para repertório.', url: 'https://www.youtube.com/watch?v=-42vA2HtxFU' },
  { titulo: 'Samba das Antigas #07', tag: 'Samba de Raiz', descricao: 'Samba de raiz clássico para roda e estudo.', url: 'https://www.youtube.com/watch?v=NddvK2j-fPg' },
  { titulo: 'Pagode de Mesa #08', tag: 'Pagode de Mesa', descricao: 'Batucada na mesa e clima de roda.', url: 'https://www.youtube.com/watch?v=jOe3TnpAvVE' },
  { titulo: 'Percussão 105 BPM #09', tag: 'Percussão', descricao: 'Surdo, pandeiro, tamborim e shaker para pulso rítmico.', url: 'https://www.youtube.com/watch?v=ZZ1HXEVOuZU' },
  { titulo: 'Percussão da Roda #10', tag: 'Percussão', descricao: 'Referência de percussão para roda de samba.', url: 'https://www.youtube.com/watch?v=UK3NhfAcrTY' },
  { titulo: 'Harmonia no Cavaquinho #11', tag: 'Cavaquinho', descricao: 'Estudo de harmonia no cavaquinho para rodas de samba.', url: 'https://www.youtube.com/watch?v=Ul3sgpQ2HgQ' },
  { titulo: 'Violão 7 Cordas #12', tag: 'Violão 7 Cordas', descricao: 'Condução e baixaria no violão de 7 cordas.', url: 'https://www.youtube.com/watch?v=Unomlp5FilQ' },
  { titulo: 'Samba de Terreiro #13', tag: 'Samba de Terreiro', descricao: 'Cadência tradicional de samba de terreiro.', url: 'https://www.youtube.com/watch?v=y2vI-i6CBX8' },
  { titulo: 'Poesia e Raiz #14', tag: 'Samba Clássico', descricao: 'Roda com sambas clássicos e letras marcantes.', url: 'https://www.youtube.com/watch?v=QZKP5P7okEc' },
  { titulo: 'Batucada Samba 100 BPM #15', tag: 'Batucada', descricao: 'Base contínua de batucada a 100 BPM para treinar.', url: 'https://www.youtube.com/watch?v=r6ZbMzIrROc' }
];

function gerarRepertorio400Musicas() {
  const catalogosBase = [
    {
      caderno: 'samba',
      titulo: 'Trem das Onze (Samba Tradicional)',
      tom: 'Fá Maior (F)',
      partitura: '2/4 • Surdo no 1 e 2 | Pandeiro: polegar, abafado e ponta',
      estudo: 'Pratica a condução em 2/4 mantendo o pulso estável e a passagem suave da harmonia.',
      cifra: 'Intro: F7M | Dm7 | Gm7 | C7(9)\nF7M            Dm7\nNão posso ficar, nem mais um minuto com você\nGm7            C7(9)\nSinto muito amor, mas não pode ser'
    },
    {
      caderno: 'samba',
      titulo: 'Verdade (Partido-Alto Tradicional)',
      tom: 'Ré Maior (D)',
      partitura: '2/4 • Levada sincopada de partido-alto com pulso firme',
      estudo: 'Foca na síncope do acompanhamento sem apressar o andamento na entrada do refrão.',
      cifra: 'Intro: D7M | Bm7 | Em7 | A7(13)\nD7M            F#m7\nEu fui convidado pra uma roda de samba\nBm7            E7(9)\nNa casa de um amigo que é bom de tocar'
    },
    {
      caderno: 'pagode',
      titulo: 'Deixa a Vida Me Levar (Pagode Tradicional)',
      tom: 'Sol Maior (G)',
      partitura: '2/4 • Pagode tradicional com grave marcante e resposta no contratempo',
      estudo: 'Trabalha a dinâmica: começa contido para estudo harmônico e abre o balanço para a roda.',
      cifra: 'Intro: G7M | Em7 | Am7 | D7(9)\nG7M            B7(5+)\nDeixa a vida me levar (vida leva eu)\nEm7            G7\nDeixa a vida me levar (vida leva eu)'
    },
    {
      caderno: 'pagode',
      titulo: 'Conselho (Pagode Tradicional)',
      tom: 'Lá Menor (Am)',
      partitura: '2/4 • Harmonia em ciclo de quintas com levada de pagode de mesa',
      estudo: 'Observa os acordes menores com sétima e as tensões antes de tocar junto com a roda.',
      cifra: 'Intro: Am7 | Dm7 | G7(9) | C7M(9)\nAm7            Dm7\nDeixe de lado esse baixo astral\nG7(9)          C7M(9)\nErgue a cabeça, enfrenta o mal'
    }
  ];

  const tons = ['Dó Maior (C)', 'Ré Maior (D)', 'Mi Maior (E)', 'Fá Maior (F)', 'Sol Maior (G)', 'Lá Maior (A)', 'Lá Menor (Am)'];
  const progressos = ['C7M | A7(b9) | Dm7 | G7(13)', 'G7M | Em7 | Am7 | D7(13)', 'D7M | Bm7 | Em7 | A7(13)', 'F7M | Dm7 | Gm7 | C7(9)'];
  const lista = [];

  for (let i = 0; i < 400; i++) {
    const base = catalogosBase[i % catalogosBase.length];
    const ehSamba = i % 2 === 0;
    const caderno = i < catalogosBase.length ? base.caderno : (ehSamba ? 'samba' : 'pagode');
    const tom = i < catalogosBase.length ? base.tom : tons[i % tons.length];
    const prog = progressos[i % progressos.length];

    lista.push({
      id: 1000 + i,
      caderno,
      titulo: i < catalogosBase.length ? base.titulo : `${ehSamba ? 'Samba Tradicional' : 'Pagode Tradicional'} #${i + 1} — Repertório de Roda`,
      tom,
      partitura: base.partitura,
      estudo: base.estudo,
      cifra: i < catalogosBase.length ? base.cifra : `Intro: ${prog}\nParte A: ${prog}\nRefrão: ${prog}`
    });
  }
  return lista;
}

const cadernosRepertorioPadrao = gerarRepertorio400Musicas();

const oficinasPartiturasGerais = {
  harmonia: [
    { id: 401, titulo: 'Partitura de Harmonia I — Campo Harmônico e Funções', compasso: '4/4 • Estudo Harmônico', instrucoes: 'Identifique repouso (Tônica), preparo (Subdominante) e tensão (Dominante).', partituraTexto: 'C.1: [ I (T) ] | C.2: [ IV (SD) ] | C.3: [ ii (SD) ] | C.4: [ V7 -> I ]' },
    { id: 402, titulo: 'Partitura de Harmonia II — Dominantes Secundários', compasso: '2/4 • Estudo Harmônico', instrucoes: 'Mantenha as notas comuns ligadas entre compassos.', partituraTexto: 'C.1: [ I7M ] | C.2: [ VI7(b9) ] | C.3: [ ii7 ] | C.4: [ V7(13) ]' }
  ],
  percussao: [
    { id: 501, titulo: 'Partitura de Percussão I — Subdivisão Binária', compasso: '2/4 • Estudo Percussivo', instrucoes: 'Conte em voz alta (1 e 2 e) e marque os acentos (>).', partituraTexto: 'C.1: [ >1 e 2 e ] | C.2: [ 1 >e 2 >e ] | C.3: [ >1 >e >2 >e ]' },
    { id: 502, titulo: 'Partitura de Percussão II — Síncope e Contratempos', compasso: '2/4 • Estudo Percussivo', instrucoes: 'Estude devagar até firmar o contratempo.', partituraTexto: 'C.1: [ 1 >e 2 e ] | C.2: [ 1 e >2 >e ] | C.3: [ >1 e >2 >e ]' }
  ]
};

const defaultData = {
  currentUser: null,
  perfisComunidade: [],
  propostas: [],
  mensagensPrivadas: [],
  atividades: []
};

let appState = JSON.parse(JSON.stringify(defaultData));
let artistaAlvoProposta = null;
let perfilSelecionadoParaAvaliar = null;
let notaSelecionada = 5;
let cadernoSelecionado = 'todos';
let modoUsoCaderno = 'estudo';
let cifraAbertaAtual = null;
let paginaAtualCaderno = 1;
const ITENS_POR_PAGINA_CADERNO = 25;

let indiceSlideHistoria = 0;
let timerCarrosselHistoria = null;
let animandoTrocaHistoria = false;
let arrastandoHistoria = false;
let inicioArrasteX = 0;
let deltaArrasteX = 0;
let bloqueouCliqueArraste = false;

let usuarioConversandoId = null;
let conversaAtivaId = null;
let conversasCache = [];
let mensagensCache = [];
let paginaCarrosselVideos = 0;
const VIDEOS_POR_PAGINA = 3;

function norm(v) {
  return String(v || '').trim().toLowerCase();
}

function gerarIniciais(nome) {
  const limpo = (nome || 'MS').trim();
  const partes = limpo.split(/\s+/).filter(Boolean);
  if (partes.length >= 2) return `${partes[0][0]}${partes[partes.length - 1][0]}`.toUpperCase();
  return limpo.slice(0, 2).toUpperCase();
}

function notificar(msg, tipo = 'info') {
  const container = document.getElementById('toast-container');
  if (container) {
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  }
}
window.mostrarToast = notificar;
window.notificar = notificar;

// =====================================================
// STORAGE COMPARTILHADO: PROPOSTAS E AVALIAÇÕES REAIS
// =====================================================
function lerTodasPropostas() {
  try {
    const raw = sessionStorage.getItem(STORAGE_PROPOSTAS_CHAVE);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function salvarTodasPropostas(lista) {
  try {
    sessionStorage.setItem(STORAGE_PROPOSTAS_CHAVE, JSON.stringify(lista || []));
  } catch {}
  appState.propostas = lista || [];
}

function lerMapaAvaliacoes() {
  try {
    const raw = sessionStorage.getItem(STORAGE_AVALIACOES_CHAVE);
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function salvarMapaAvaliacoes(mapa) {
  try {
    sessionStorage.setItem(STORAGE_AVALIACOES_CHAVE, JSON.stringify(mapa || {}));
  } catch {}
}

function chaveArtistaAval(artista) {
  if (!artista) return 'atual';
  return norm(artista.email || artista.id || artista.nome || 'atual');
}

function obterAvaliacoesDoArtista(artista) {
  const mapa = lerMapaAvaliacoes();
  const lista = mapa[chaveArtistaAval(artista)];
  return Array.isArray(lista) ? lista : [];
}

function calcularMediaAvaliacoes(lista) {
  if (!Array.isArray(lista) || lista.length === 0) return '0.0';
  const soma = lista.reduce((acc, item) => acc + Number(item.nota || 0), 0);
  return (soma / lista.length).toFixed(1);
}

// Verifica se o usuário logado tem proposta ACEITA ou CONCLUÍDA enviada para o artista
function usuarioPodeAvaliarArtista(artistaAlvo) {
  const user = appState.currentUser;
  if (!user || !artistaAlvo) return false;

  const uId = norm(user.id);
  const uEmail = norm(user.email);
  const uNome = norm(user.nome);

  const aId = norm(artistaAlvo.id);
  const aEmail = norm(artistaAlvo.email);
  const aNome = norm(artistaAlvo.nome);

  if (uEmail && aEmail && uEmail === aEmail) return false;

  const todas = lerTodasPropostas();
  return todas.some((p) => {
    const st = norm(p.status);
    const aceita = st === 'aceita' || st === 'aceito' || st === 'concluída' || st === 'concluida';
    if (!aceita) return false;

    const enviadoPorMim =
      (uId && norm(p.remetenteId) === uId) ||
      (uEmail && norm(p.remetenteEmail) === uEmail) ||
      (uNome && norm(p.remetenteNome) === uNome);

    const paraOArtista =
      (aId && norm(p.musicoId) === aId) ||
      (aEmail && norm(p.musicoEmail) === aEmail) ||
      (aNome && norm(p.musicoNome) === aNome);

    return enviadoPorMim && paraOArtista;
  });
}

// =====================================================
// SESSÃO E TEMA
// =====================================================
function obterUsuarioSessao() {
  try {
    const raw = sessionStorage.getItem('musicon_sessao');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function salvarUsuarioSessao(usuario) {
  try {
    if (usuario) {
      sessionStorage.setItem('musicon_sessao', JSON.stringify(usuario));
      appState.currentUser = usuario;
    } else {
      sessionStorage.removeItem('musicon_sessao');
      appState.currentUser = null;
    }
  } catch {
    appState.currentUser = usuario || null;
  }
}

function aplicarEstadoTema(tema) {
  const ehEscuro = tema !== 'light';
  document.documentElement.setAttribute('data-theme', ehEscuro ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', ehEscuro);
  if (document.body) {
    document.body.setAttribute('data-theme', ehEscuro ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme', ehEscuro);
  }
}

function aplicarTemaSalvo() {
  let tema = 'dark';
  try {
    tema = sessionStorage.getItem('musicon_tema') || appState.currentUser?.temaPreferido || 'dark';
  } catch {}
  aplicarEstadoTema(tema);
}

function toggleTheme() {
  const atual = document.documentElement.getAttribute('data-theme') || 'dark';
  const proximo = atual === 'dark' ? 'light' : 'dark';
  aplicarEstadoTema(proximo);
  try { sessionStorage.setItem('musicon_tema', proximo); } catch {}
  if (appState.currentUser) appState.currentUser.temaPreferido = proximo;
}

function switchTab(tabName) {
  if (!tabName) return;
  document.querySelectorAll('.tab-content').forEach((sec) => sec.classList.remove('active'));
  document.querySelectorAll('#main-nav .nav-item').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  const alvo = document.getElementById(`tab-${tabName}`);
  if (alvo) alvo.classList.add('active');

  if (tabName === 'perfis') renderizarPerfis();
  if (tabName === 'propostas') renderizarPropostas();
  if (tabName === 'chat') renderizarListaConversas();
  if (tabName === 'atividades') renderizarOficinas();
  if (tabName === 'boletim') renderizarCadernosCifras();
  if (tabName === 'perfil') renderizarMeuPerfil();
}

function mostrarPortal() {
  const loginScreen = document.getElementById('login-screen');
  const appLayout = document.getElementById('app-layout');
  if (loginScreen) {
    loginScreen.classList.remove('active');
    loginScreen.classList.add('hidden');
    loginScreen.style.display = 'none';
  }
  if (appLayout) {
    appLayout.classList.remove('hidden');
    appLayout.style.display = 'flex';
  }
}

function mostrarLogin() {
  const loginScreen = document.getElementById('login-screen');
  const appLayout = document.getElementById('app-layout');
  if (appLayout) {
    appLayout.classList.add('hidden');
    appLayout.style.display = 'none';
  }
  if (loginScreen) {
    loginScreen.classList.remove('hidden');
    loginScreen.classList.add('active');
    loginScreen.style.display = '';
  }
}

function logout() {
  salvarUsuarioSessao(null);
  usuarioConversandoId = null;
  conversasCache = [];
  mensagensCache = [];
  mostrarLogin();
  notificar('Sessão encerrada.', 'info');
}

// =====================================================
// CARROSSEL DE HISTÓRIA
// =====================================================
function obterIndiceCircular(idx, total) {
  return ((idx % total) + total) % total;
}

function pararPassagemAutomaticaHistoria() {
  if (timerCarrosselHistoria) {
    clearInterval(timerCarrosselHistoria);
    timerCarrosselHistoria = null;
  }
}

function renderizarSlideHistoria(comTransicao = true) {
  const trilha = document.getElementById('historia-vitrine-trilha');
  const kickerEl = document.getElementById('historia-kicker');
  const tituloEl = document.getElementById('historia-titulo');
  const subtituloEl = document.getElementById('historia-subtitulo');
  const textoEl = document.getElementById('historia-texto');
  const legendaEl = document.getElementById('historia-vitrine-legenda');
  const indBox = document.getElementById('historia-indicadores');
  const total = slidesHistoriaMusicon.length;
  if (!trilha || total === 0) return;

  const aplicarConteudo = () => {
    const slideAtual = slidesHistoriaMusicon[indiceSlideHistoria];
    if (kickerEl) kickerEl.textContent = slideAtual.kicker;
    if (tituloEl) tituloEl.textContent = slideAtual.titulo;
    if (subtituloEl) subtituloEl.textContent = slideAtual.subtitulo;
    if (textoEl) textoEl.textContent = slideAtual.texto;

    const offsets = [-2, -1, 0, 1, 2];
    trilha.innerHTML = offsets.map((offset, posIdx) => {
      const idxReal = obterIndiceCircular(indiceSlideHistoria + offset, total);
      const item = slidesHistoriaMusicon[idxReal];
      const ehCentro = offset === 0;
      const ehLateralProximo = Math.abs(offset) === 1;
      const atraso = `${(posIdx * 0.35).toFixed(2)}s`;

      return `
        <button
          type="button"
          class="historia-retrato-card flutuando ${ehCentro ? 'destaque' : ehLateralProximo ? 'proximo' : 'distante'}"
          style="animation-delay: ${atraso};"
          onclick="irParaSlideHistoriaManual(${idxReal})"
          aria-label="${item.titulo}"
        >
          <img src="${item.imagem}" alt="${item.titulo}" onerror="this.style.display='none'">
        </button>
      `;
    }).join('');

    if (indBox) {
      indBox.innerHTML = slidesHistoriaMusicon.map((_, idx) => `
        <button
          type="button"
          class="historia-ponto ${idx === indiceSlideHistoria ? 'ativo' : ''}"
          onclick="irParaSlideHistoriaManual(${idx})"
          aria-label="Ir para o slide ${idx + 1}"
        ></button>
      `).join('');
    }
  };

  if (!comTransicao || animandoTrocaHistoria) {
    aplicarConteudo();
    return;
  }

  animandoTrocaHistoria = true;
  trilha.classList.add('trocando');
  if (legendaEl) legendaEl.classList.add('trocando');

  setTimeout(() => {
    aplicarConteudo();
    requestAnimationFrame(() => {
      trilha.classList.remove('trocando');
      if (legendaEl) legendaEl.classList.remove('trocando');
      animandoTrocaHistoria = false;
    });
  }, 180);
}

function iniciarPassagemAutomaticaHistoria() {
  pararPassagemAutomaticaHistoria();
  if (slidesHistoriaMusicon.length <= 1) return;
  timerCarrosselHistoria = setInterval(() => {
    if (arrastandoHistoria) return;
    indiceSlideHistoria = obterIndiceCircular(indiceSlideHistoria + 1, slidesHistoriaMusicon.length);
    renderizarSlideHistoria(true);
  }, INTERVALO_CARROSSEL_MS);
}

function proximoSlideHistoriaManual() {
  indiceSlideHistoria = obterIndiceCircular(indiceSlideHistoria + 1, slidesHistoriaMusicon.length);
  renderizarSlideHistoria(true);
  iniciarPassagemAutomaticaHistoria();
}

function slideAnteriorHistoriaManual() {
  indiceSlideHistoria = obterIndiceCircular(indiceSlideHistoria - 1, slidesHistoriaMusicon.length);
  renderizarSlideHistoria(true);
  iniciarPassagemAutomaticaHistoria();
}

function irParaSlideHistoriaManual(idx) {
  if (idx >= 0 && idx < slidesHistoriaMusicon.length) {
    indiceSlideHistoria = idx;
    renderizarSlideHistoria(true);
    iniciarPassagemAutomaticaHistoria();
  }
}

function configurarArrasteHistoria() {
  const trilha = document.getElementById('historia-vitrine-trilha');
  if (!trilha || trilha.dataset.dragBound === 'true') return;
  trilha.dataset.dragBound = 'true';

  trilha.addEventListener('pointerdown', (e) => {
    if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return;
    arrastandoHistoria = true;
    bloqueouCliqueArraste = false;
    inicioArrasteX = e.clientX;
    deltaArrasteX = 0;
    trilha.classList.add('arrastando');
    trilha.style.transition = 'none';
    pararPassagemAutomaticaHistoria();
  });

  window.addEventListener('pointermove', (e) => {
    if (!arrastandoHistoria) return;
    deltaArrasteX = e.clientX - inicioArrasteX;
    if (Math.abs(deltaArrasteX) > 6) {
      bloqueouCliqueArraste = true;
      trilha.style.transform = `translateX(${Math.max(-90, Math.min(90, deltaArrasteX * 0.45))}px)`;
    }
  });

  const finalizarArraste = () => {
    if (!arrastandoHistoria) return;
    arrastandoHistoria = false;
    trilha.classList.remove('arrastando');
    trilha.style.transition = '';
    trilha.style.transform = '';
    if (deltaArrasteX <= -45) proximoSlideHistoriaManual();
    else if (deltaArrasteX >= 45) slideAnteriorHistoriaManual();
    else iniciarPassagemAutomaticaHistoria();
    setTimeout(() => { bloqueouCliqueArraste = false; }, 50);
  };

  window.addEventListener('pointerup', finalizarArraste);
  window.addEventListener('pointercancel', finalizarArraste);
  trilha.addEventListener('click', (e) => {
    if (bloqueouCliqueArraste) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);
}

// =====================================================
// CARROSSEL DE 15 VÍDEOS DE SAMBA
// =====================================================
function extrairIdYouTube(url) {
  if (!url || typeof url !== 'string') return null;
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{6,})/
  );
  return match ? match[1] : null;
}

function gerarPlayerVideoHTML(video) {
  const ytId = extrairIdYouTube(video.url);
  if (ytId) {
    return `
      <div class="samba-card-midia">
        <iframe
          src="https://www.youtube.com/embed/${ytId}?rel=0"
          title="${video.titulo}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <a href="https://www.youtube.com/watch?v=${ytId}" target="_blank" rel="noopener noreferrer" class="samba-link-externo">
          Abrir no YouTube
        </a>
      </div>
    `;
  }
  return `
    <div class="samba-card-midia samba-card-vazio">
      <strong>${video.titulo}</strong>
      <span>Adicione o link em VIDEOS_SAMBA_15</span>
    </div>
  `;
}

function renderizarCarrosselSamba() {
  const grid = document.getElementById('pagode-videos-grid');
  if (!grid) return;

  const totalVideos = VIDEOS_SAMBA_15.length;
  const totalPaginas = Math.ceil(totalVideos / VIDEOS_POR_PAGINA);
  const inicio = paginaCarrosselVideos * VIDEOS_POR_PAGINA;
  const lote = VIDEOS_SAMBA_15.slice(inicio, inicio + VIDEOS_POR_PAGINA);

  const contadorEl = document.getElementById('samba-carrossel-contador');
  if (contadorEl) {
    contadorEl.innerHTML = `Mostrando <strong>${inicio + 1}–${Math.min(inicio + VIDEOS_POR_PAGINA, totalVideos)}</strong> de <strong>${totalVideos}</strong> vídeos de samba (Página ${paginaCarrosselVideos + 1}/${totalPaginas})`;
  }

  grid.innerHTML = lote.map((v) => `
    <article class="card samba-video-card">
      ${gerarPlayerVideoHTML(v)}
      <div class="samba-card-corpo">
        <span class="samba-card-tag">${v.tag || 'SAMBA'}</span>
        <h3>${v.titulo}</h3>
        <p class="text-muted">${v.descricao || ''}</p>
      </div>
    </article>
  `).join('');

  const indicadoresEl = document.getElementById('samba-carrossel-indicadores');
  if (indicadoresEl) {
    indicadoresEl.innerHTML = Array.from({ length: totalPaginas }).map((_, idx) => `
      <button
        type="button"
        class="samba-ponto ${idx === paginaCarrosselVideos ? 'ativo' : ''}"
        data-pagina="${idx}"
        aria-label="Ir para página ${idx + 1}"
      ></button>
    `).join('');
  }
}
window.renderizarVideosPagode = renderizarCarrosselSamba;

// =====================================================
// MYSQL: USUÁRIOS E CHAT
// =====================================================
async function carregarPerfisDoBanco() {
  try {
    const resp = await fetch(`${API_BASE}/api/usuarios`);
    if (!resp.ok) return;
    const rows = await resp.json();
    if (Array.isArray(rows)) {
      appState.perfisComunidade = rows.map((u) => {
        const nome = u.nome || 'Músico';
        return {
          id: Number(u.id),
          nome,
          iniciais: gerarIniciais(nome),
          email: u.email,
          tipoPerfil: u.tipo_perfil || 'aluno',
          instrumento: u.instrumento_principal || 'Músico',
          nivel: u.nivel_experiencia || 'iniciante',
          cidade: u.cidade || 'Lorena - SP',
          bio: u.bio || '',
          temaPreferido: u.tema_preferido || 'dark'
        };
      });
    }
  } catch (err) {
    console.error('Erro ao carregar usuários:', err);
  }
}

async function realizarLoginMySQL(email, senha) {
  const resp = await fetch(`${API_BASE}/api/usuarios/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha })
  });
  const data = await resp.json();
  if (!resp.ok) throw new Error(data.erro || 'Falha ao fazer login.');
  const u = data.usuario;
  const nome = u.nome || 'Músico';
  return {
    id: Number(u.id),
    nome,
    iniciais: gerarIniciais(nome),
    email: u.email,
    tipoPerfil: u.tipo_perfil || 'aluno',
    instrumento: u.instrumento_principal || 'Músico',
    nivel: u.nivel_experiencia || 'iniciante',
    cidade: u.cidade || 'Lorena - SP',
    bio: u.bio || '',
    temaPreferido: u.tema_preferido || 'dark'
  };
}

async function cadastrarUsuarioMySQL(payload) {
  const resp = await fetch(`${API_BASE}/api/usuarios/cadastro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await resp.json();
  if (!resp.ok) throw new Error(data.erro || 'Erro ao cadastrar usuário.');
  return data;
}

function normalizarChavePar(idA, idB) {
  const a = Number(idA);
  const b = Number(idB);
  return a < b ? `${a}_${b}` : `${b}_${a}`;
}

function lerHistoricoLocalPar(meuId, outroId) {
  try {
    const raw = sessionStorage.getItem(`musicon_chat_individual_${normalizarChavePar(meuId, outroId)}`);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function salvarHistoricoLocalPar(meuId, outroId, lista) {
  try {
    sessionStorage.setItem(`musicon_chat_individual_${normalizarChavePar(meuId, outroId)}`, JSON.stringify(lista || []));
  } catch {}
}

function encontrarConversaDiretaComUsuario(outroUsuario) {
  if (!outroUsuario || !Array.isArray(conversasCache)) return null;
  const nomeAlvo = norm(outroUsuario.nome);
  const outroIdNum = Number(outroUsuario.id);
  const meuIdNum = Number(appState.currentUser?.id || 0);

  return conversasCache.find((c) => {
    if (c.tipo && c.tipo !== 'direta') return false;
    const ids = Array.isArray(c.participantes_ids) ? c.participantes_ids.map(Number) : [];
    if (ids.length > 0 && meuIdNum && outroIdNum) {
      return ids.includes(meuIdNum) && ids.includes(outroIdNum);
    }
    if (c.outro_usuario_id !== undefined && Number(c.outro_usuario_id) === outroIdNum) return true;
    return Boolean(nomeAlvo && norm(c.titulo_exibicao).includes(nomeAlvo));
  }) || null;
}

async function buscarConversasMySQL() {
  if (!appState.currentUser) {
    conversasCache = [];
    return [];
  }
  try {
    const resp = await fetch(`${API_BASE}/api/chat/conversas?usuario_id=${Number(appState.currentUser.id)}`);
    if (!resp.ok) return conversasCache;
    const data = await resp.json();
    conversasCache = Array.isArray(data) ? data.filter((c) => !c.tipo || c.tipo === 'direta') : [];
    return conversasCache;
  } catch {
    return conversasCache;
  }
}

async function buscarMensagensMySQL(conversaId, outroId) {
  const meuId = Number(appState.currentUser?.id || 0);
  const outroIdNum = Number(outroId || usuarioConversandoId || 0);
  const locais = meuId && outroIdNum ? lerHistoricoLocalPar(meuId, outroIdNum) : [];
  if (!conversaId || !appState.currentUser) {
    mensagensCache = locais;
    return mensagensCache;
  }
  try {
    const resp = await fetch(`${API_BASE}/api/chat/mensagens/${conversaId}?usuario_id=${meuId}`);
    if (!resp.ok) {
      mensagensCache = locais;
      return mensagensCache;
    }
    const data = await resp.json();
    const remotas = Array.isArray(data) ? data : [];
    const mescladas = [...remotas];
    locais.forEach((loc) => {
      const jaExiste = mescladas.some(
        (rem) => String(rem.conteudo || '').trim() === String(loc.conteudo || '').trim() &&
          Number(rem.remetente_id) === Number(loc.remetente_id)
      );
      if (!jaExiste) mescladas.push(loc);
    });
    mensagensCache = mescladas;
    if (meuId && outroIdNum) salvarHistoricoLocalPar(meuId, outroIdNum, mensagensCache);
    return mensagensCache;
  } catch {
    mensagensCache = locais;
    return mensagensCache;
  }
}

async function abrirChatComUsuario(outroId) {
  if (!appState.currentUser) return;
  const meuId = Number(appState.currentUser.id);
  const outroIdNum = Number(outroId);
  if (!outroIdNum || outroIdNum === meuId) return;

  const outroUsuario = (appState.perfisComunidade || []).find((p) => Number(p.id) === outroIdNum);
  if (!outroUsuario) return;

  usuarioConversandoId = outroIdNum;
  mensagensCache = lerHistoricoLocalPar(meuId, outroIdNum);
  conversaAtivaId = null;

  switchTab('chat');
  await buscarConversasMySQL();
  const convDireta = encontrarConversaDiretaComUsuario(outroUsuario);
  conversaAtivaId = convDireta ? Number(convDireta.conversa_id) : null;
  if (conversaAtivaId) await buscarMensagensMySQL(conversaAtivaId, outroIdNum);

  renderizarListaConversas();
  renderizarMensagensChatPrivado(outroIdNum);
}

async function renderizarListaConversas() {
  const listaDiv = document.getElementById('lista-conversas');
  if (!listaDiv || !appState.currentUser) return;
  await buscarConversasMySQL();

  const termoBusca = norm(document.getElementById('chat-busca-musico')?.value || '');
  const meuId = Number(appState.currentUser.id);

  let outros = (appState.perfisComunidade || []).filter((p) => Number(p.id) !== meuId);
  if (termoBusca) {
    outros = outros.filter((u) => norm(u.nome).includes(termoBusca) || norm(u.instrumento).includes(termoBusca));
  }

  if (outros.length === 0) {
    listaDiv.innerHTML = `<p class="text-muted" style="padding:1rem; font-size:0.85rem;">Nenhum outro músico disponível.</p>`;
    return;
  }

  listaDiv.innerHTML = outros.map((u) => {
    const outroIdNum = Number(u.id);
    const ativoClass = usuarioConversandoId === outroIdNum ? 'active' : '';
    const locaisPar = lerHistoricoLocalPar(meuId, outroIdNum);
    const ultimaLocal = locaisPar.length > 0 ? locaisPar[locaisPar.length - 1].conteudo : '';
    const conv = encontrarConversaDiretaComUsuario(u);
    const ultimaMsg = ultimaLocal || (conv && conv.ultima_mensagem ? conv.ultima_mensagem : 'Conversa individual');

    return `
      <div class="conversa-item ${ativoClass}" onclick="abrirChatComUsuario(${outroIdNum})">
        <div class="perfil-mini-avatar sm">${u.iniciais || gerarIniciais(u.nome)}</div>
        <div style="flex:1; overflow:hidden;">
          <h4 style="font-size:0.9rem; margin-bottom:0.1rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${u.nome}</h4>
          <p class="text-muted" style="font-size:0.75rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${ultimaMsg}</p>
        </div>
      </div>
    `;
  }).join('');
}

function filtrarConversasChat() {
  renderizarListaConversas();
}

function renderizarMensagensChatPrivado(outroId) {
  const vazioBox = document.getElementById('chat-vazio-placeholder');
  const conteudoBox = document.getElementById('chat-ativo-conteudo');
  const mensagensBox = document.getElementById('chat-mensagens-box');
  if (!appState.currentUser) return;

  const meuId = Number(appState.currentUser.id);
  const outroIdNum = Number(outroId || usuarioConversandoId || 0);
  if (!outroIdNum || outroIdNum === meuId) return;

  const outroUsuario = (appState.perfisComunidade || []).find((p) => Number(p.id) === outroIdNum);
  if (!outroUsuario) return;

  if (vazioBox) vazioBox.classList.add('hidden');
  if (conteudoBox) conteudoBox.classList.remove('hidden');

  const nomeEl = document.getElementById('chat-ativo-nome');
  const avatarEl = document.getElementById('chat-ativo-avatar');
  const subEl = document.getElementById('chat-ativo-sub');

  if (nomeEl) nomeEl.textContent = outroUsuario.nome;
  if (avatarEl) avatarEl.textContent = outroUsuario.iniciais || gerarIniciais(outroUsuario.nome);
  if (subEl) subEl.textContent = `Conversa individual • ${outroUsuario.instrumento || 'Músico'}`;

  if (mensagensBox) {
    if (!mensagensCache.length) {
      mensagensBox.innerHTML = `<div style="text-align:center; color:var(--text-muted); margin-top:2rem; font-size:0.85rem;">Conversa individual com <strong>${outroUsuario.nome}</strong>.</div>`;
    } else {
      mensagensBox.innerHTML = mensagensCache.map((m) => {
        const souEu = Number(m.remetente_id) === meuId;
        const nomeAutor = souEu ? 'Você' : (m.remetente_nome || outroUsuario.nome);
        const hora = m.enviada_em ? new Date(m.enviada_em).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
        return `
          <div class="chat-msg-item ${souEu ? 'meu-msg' : ''}">
            <div class="chat-msg-header"><strong>${nomeAutor}</strong><span>${hora}</span></div>
            <div class="chat-msg-body">${m.conteudo}</div>
          </div>
        `;
      }).join('');
    }
    mensagensBox.scrollTop = mensagensBox.scrollHeight;
  }
}

async function enviarMensagemPrivada() {
  const input = document.getElementById('chat-input-texto');
  if (!input || !usuarioConversandoId || !appState.currentUser) {
    return notificar('Selecione um músico na lista para enviar mensagem.', 'info');
  }
  const texto = input.value.trim();
  if (!texto) return;

  const meuId = Number(appState.currentUser.id);
  const outroId = Number(usuarioConversandoId);
  const outroUsuario = (appState.perfisComunidade || []).find((p) => Number(p.id) === outroId);
  const convDireta = encontrarConversaDiretaComUsuario(outroUsuario);

  const novaMsgLocal = {
    id: `local-${Date.now()}`,
    conversa_id: convDireta ? Number(convDireta.conversa_id) : null,
    remetente_id: meuId,
    destinatario_id: outroId,
    remetente_nome: appState.currentUser.nome || 'Você',
    conteudo: texto,
    enviada_em: new Date().toISOString()
  };

  const historicoAtual = lerHistoricoLocalPar(meuId, outroId);
  historicoAtual.push(novaMsgLocal);
  salvarHistoricoLocalPar(meuId, outroId, historicoAtual);
  mensagensCache = historicoAtual;

  input.value = '';
  renderizarMensagensChatPrivado(outroId);
  renderizarListaConversas();

  if (convDireta && convDireta.conversa_id) {
    try {
      const resp = await fetch(`${API_BASE}/api/chat/mensagens`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversa_id: Number(convDireta.conversa_id),
          remetente_id: meuId,
          destinatario_id: outroId,
          conteudo: texto
        })
      });
      if (resp.ok) {
        conversaAtivaId = Number(convDireta.conversa_id);
        await buscarMensagensMySQL(conversaAtivaId, outroId);
        renderizarMensagensChatPrivado(outroId);
      }
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
    }
  }
}

// =====================================================
// MÚSICOS, PROPOSTAS ENTRE CONTAS E AVALIAÇÕES
// =====================================================
function renderizarPerfis(filtro = '') {
  const grid = document.getElementById('perfis-grid');
  if (!grid) return;

  const termo = norm(filtro || document.getElementById('busca-perfil-input')?.value || '');
  const lista = (appState.perfisComunidade || []).filter((p) => {
    if (!termo) return true;
    return norm(p.nome).includes(termo) || norm(p.instrumento).includes(termo) || norm(p.cidade).includes(termo);
  });

  if (!lista.length) {
    grid.innerHTML = `<p class="text-muted">Nenhum músico encontrado.</p>`;
    return;
  }

  grid.innerHTML = lista.map((p) => {
    const avals = obterAvaliacoesDoArtista(p);
    const mediaStr = calcularMediaAvaliacoes(avals);
    const podeAvaliar = usuarioPodeAvaliarArtista(p);

    return `
      <div class="card">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <div class="perfil-mini-avatar">${p.iniciais || gerarIniciais(p.nome)}</div>
          <div>
            <h3 style="margin:0;">${p.nome}</h3>
            <small class="text-muted">${p.instrumento || 'Músico'} • ${p.cidade || 'Lorena - SP'}</small>
            <div style="font-size:0.8rem; margin-top:0.2rem;">★ ${mediaStr} (${avals.length})</div>
          </div>
        </div>
        <div style="display:flex; gap:0.5rem; margin-top:1rem; flex-wrap:wrap;">
          <button type="button" class="btn-primary" onclick="abrirModalProposta(${p.id})">Proposta</button>
          <button type="button" class="btn-quick" onclick="abrirChatComUsuario(${p.id})">Chat</button>
          <button
            type="button"
            class="btn-quick"
            onclick="abrirModalAvaliacao(${p.id})"
            title="${podeAvaliar ? 'Avaliar músico' : 'Disponível após o artista aceitar uma proposta sua'}"
          >
            ${podeAvaliar ? 'Avaliar' : 'Avaliar (após aceite)'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function filtrarPerfis() {
  renderizarPerfis();
}

function abrirDetalhesInstrumento(chave) {
  const info = dadosInstrumentos[chave];
  const painel = document.getElementById('painel-detalhe-instrumento');
  if (!info || !painel) return;

  document.getElementById('detalhe-inst-titulo').textContent = info.titulo;
  document.getElementById('detalhe-inst-historia').textContent = info.historia;

  const filtro = norm(info.instrumentoFiltro);
  const encontrados = (appState.perfisComunidade || []).filter((p) => norm(p.instrumento).includes(filtro));

  const boxMusicos = document.getElementById('detalhe-inst-musicos');
  if (boxMusicos) {
    boxMusicos.innerHTML = encontrados.length
      ? encontrados.map((m) => `
          <div class="card">
            <h4>${m.nome}</h4>
            <p class="text-muted">${m.instrumento}</p>
            <button type="button" class="btn-quick mt-2" onclick="abrirChatComUsuario(${m.id})">Conversar</button>
          </div>
        `).join('')
      : `<p class="text-muted">Nenhum músico com esse instrumento no momento.</p>`;
  }
  painel.classList.remove('hidden');
}

function fecharDetalhesInstrumento() {
  document.getElementById('painel-detalhe-instrumento')?.classList.add('hidden');
}

function formatarDataBR(isoDate) {
  if (!isoDate || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return isoDate || 'A combinar';
  const [ano, mes, dia] = isoDate.split('-');
  return `${dia}/${mes}/${ano}`;
}

function abrirModalProposta(idPerfil) {
  artistaAlvoProposta = (appState.perfisComunidade || []).find((p) => Number(p.id) === Number(idPerfil)) || null;
  const titulo = document.getElementById('modal-proposta-titulo');
  if (titulo) {
    titulo.textContent = artistaAlvoProposta ? `Enviar Proposta para ${artistaAlvoProposta.nome}` : 'Enviar Proposta';
  }
  document.getElementById('modal-proposta')?.classList.remove('hidden');
}

function fecharModalProposta() {
  document.getElementById('modal-proposta')?.classList.add('hidden');
  artistaAlvoProposta = null;
}

function enviarPropostaContratacao() {
  const evento = (document.getElementById('prop-evento')?.value || '').trim();
  const dataIso = (document.getElementById('prop-data')?.value || '').trim();
  const horaIni = (document.getElementById('prop-hora-inicio')?.value || '').trim();
  const horaFim = (document.getElementById('prop-hora-fim')?.value || '').trim();
  const cacheRaw = (document.getElementById('prop-cache')?.value || '').trim();
  const requisitos = (document.getElementById('prop-requisitos')?.value || '').trim();

  if (!evento || !dataIso || !horaIni || !horaFim || !cacheRaw) {
    return notificar('Preencha evento, data, horário de início, término e cachê.', 'error');
  }

  if (horaFim <= horaIni) {
    return notificar('O horário de término deve ser maior que o de início.', 'error');
  }

  const user = appState.currentUser || {};
  const todas = lerTodasPropostas();

  const novaProposta = {
    id: `prop_${Date.now()}`,
    evento,
    data: `${formatarDataBR(dataIso)} • ${horaIni} às ${horaFim}`,
    cache: cacheRaw.startsWith('R$') ? cacheRaw : `R$ ${cacheRaw}`,
    requisitos,
    status: 'Pendente',
    remetenteId: user.id || '',
    remetenteNome: user.nome || 'Contratante',
    remetenteEmail: user.email || '',
    musicoId: artistaAlvoProposta?.id || '',
    musicoNome: artistaAlvoProposta?.nome || 'Músico',
    musicoEmail: artistaAlvoProposta?.email || ''
  };

  todas.unshift(novaProposta);
  salvarTodasPropostas(todas);

  ['prop-evento', 'prop-data', 'prop-hora-inicio', 'prop-hora-fim', 'prop-cache', 'prop-requisitos'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  fecharModalProposta();
  atualizarTudoNaTela();
  notificar('Proposta enviada! Aparecerá também na conta do artista.', 'success');
}

function obterPropostasDaContaAtual() {
  const todas = lerTodasPropostas();
  const user = appState.currentUser;
  if (!user) return todas;

  const uId = norm(user.id);
  const uEmail = norm(user.email);
  const uNome = norm(user.nome);

  return todas.filter((p) => {
    const matchDest =
      (uId && norm(p.musicoId) === uId) ||
      (uEmail && norm(p.musicoEmail) === uEmail) ||
      (uNome && norm(p.musicoNome) === uNome);

    const matchRem =
      (uId && norm(p.remetenteId) === uId) ||
      (uEmail && norm(p.remetenteEmail) === uEmail) ||
      (uNome && norm(p.remetenteNome) === uNome);

    return matchDest || matchRem;
  });
}

function atualizarStatusProposta(idProposta, novoStatus) {
  const todas = lerTodasPropostas();
  const alvo = todas.find((p) => String(p.id) === String(idProposta));
  if (!alvo) return;

  alvo.status = novoStatus;
  salvarTodasPropostas(todas);
  atualizarTudoNaTela();
  notificar(`Proposta atualizada para: ${novoStatus}`, 'info');
}
window.atualizarStatusProposta = atualizarStatusProposta;

function renderizarPropostas() {
  const grid = document.getElementById('propostas-grid');
  if (!grid) return;

  const propostas = obterPropostasDaContaAtual();
  const user = appState.currentUser || {};
  const uId = norm(user.id);
  const uEmail = norm(user.email);
  const uNome = norm(user.nome);

  const badge = document.getElementById('badge-propostas');
  if (badge) {
    badge.textContent = String(propostas.length);
    badge.classList.toggle('hidden', propostas.length === 0);
  }

  if (!propostas.length) {
    grid.innerHTML = `<div class="card"><p class="text-muted">Nenhuma proposta registrada para esta conta ainda.</p></div>`;
    return;
  }

  grid.innerHTML = propostas.map((pr) => {
    const ehDestinatario =
      (uId && norm(pr.musicoId) === uId) ||
      (uEmail && norm(pr.musicoEmail) === uEmail) ||
      (uNome && norm(pr.musicoNome) === uNome);

    const statusAtual = pr.status || 'Pendente';
    const stNorm = norm(statusAtual);
    const corStatus =
      stNorm === 'aceita' || stNorm === 'aceito' || stNorm === 'concluída' || stNorm === 'concluida'
        ? '#22c55e'
        : stNorm === 'recusada'
          ? '#ef4444'
          : '#eab308';

    return `
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
          <div>
            <span class="portal-badge">${ehDestinatario ? 'Recebida' : 'Enviada por você'}</span>
            <h3 style="margin:0.35rem 0 0 0;">${pr.evento || 'Convite de Evento'}</h3>
          </div>
          <span style="font-size:0.78rem; font-weight:700; padding:0.2rem 0.6rem; border-radius:999px; border:1px solid ${corStatus}; color:${corStatus};">
            ${statusAtual}
          </span>
        </div>

        <p class="mt-2" style="margin-bottom:0.3rem;"><strong>Enviado por:</strong> ${pr.remetenteNome || 'Contratante'}</p>
        <p style="margin-bottom:0.3rem;"><strong>Artista / Destino:</strong> ${pr.musicoNome || 'Músico'}</p>
        <p style="margin-bottom:0.3rem;"><strong>Data e Horário:</strong> ${pr.data || 'A combinar'}</p>
        <p style="margin-bottom:0.3rem;"><strong>Cachê:</strong> ${pr.cache || 'A combinar'}</p>
        ${pr.requisitos ? `<p class="text-muted mt-1" style="font-size:0.86rem;"><strong>Detalhes:</strong> ${pr.requisitos}</p>` : ''}

        ${
          ehDestinatario
            ? `
          <div style="display:flex; gap:0.45rem; flex-wrap:wrap; margin-top:0.85rem;">
            <button type="button" class="btn-primary" onclick="atualizarStatusProposta('${pr.id}', 'Aceita')">Aceitar</button>
            <button type="button" class="btn-quick" onclick="atualizarStatusProposta('${pr.id}', 'Concluída')">Concluir</button>
            <button type="button" class="btn-quick" onclick="atualizarStatusProposta('${pr.id}', 'Recusada')">Recusar</button>
          </div>
        `
            : ''
        }
      </div>
    `;
  }).join('');
}

function abrirModalAvaliacao(idPerfil) {
  perfilSelecionadoParaAvaliar = (appState.perfisComunidade || []).find((p) => Number(p.id) === Number(idPerfil)) || null;
  if (!perfilSelecionadoParaAvaliar) return;

  const titulo = document.getElementById('modal-avaliar-titulo');
  if (titulo) titulo.textContent = `Avaliar ${perfilSelecionadoParaAvaliar.nome}`;

  const avisoBloqueio = document.getElementById('avaliar-bloqueio-aviso');
  const areaForm = document.getElementById('avaliar-formulario-area');
  const liberado = usuarioPodeAvaliarArtista(perfilSelecionadoParaAvaliar);

  if (avisoBloqueio) avisoBloqueio.classList.toggle('hidden', liberado);
  if (areaForm) areaForm.classList.toggle('hidden', !liberado);

  notaSelecionada = 5;
  selecionarEstrela(5);
  document.getElementById('modal-avaliar')?.classList.remove('hidden');
}

function fecharModalAvaliacao() {
  document.getElementById('modal-avaliar')?.classList.add('hidden');
  perfilSelecionadoParaAvaliar = null;
}

function selecionarEstrela(val) {
  notaSelecionada = Number(val) || 5;
  document.querySelectorAll('#star-selector i').forEach((star) => {
    star.classList.toggle('active', Number(star.dataset.val) <= notaSelecionada);
  });
}

function confirmarAvaliacaoPerfil() {
  if (!perfilSelecionadoParaAvaliar) return;
  if (!usuarioPodeAvaliarArtista(perfilSelecionadoParaAvaliar)) {
    return notificar('Você só pode avaliar o artista após ele aceitar uma proposta sua.', 'error');
  }

  const comentario = (document.getElementById('avaliacao-comentario')?.value || '').trim();
  if (!comentario) {
    return notificar('Escreva um comentário para registrar a avaliação.', 'error');
  }

  const mapa = lerMapaAvaliacoes();
  const chave = chaveArtistaAval(perfilSelecionadoParaAvaliar);
  mapa[chave] = Array.isArray(mapa[chave]) ? mapa[chave] : [];
  mapa[chave].unshift({
    autor: appState.currentUser?.nome || 'Contratante',
    nota: notaSelecionada,
    comentario,
    data: new Date().toLocaleDateString('pt-BR')
  });
  salvarMapaAvaliacoes(mapa);

  const campoCom = document.getElementById('avaliacao-comentario');
  if (campoCom) campoCom.value = '';

  fecharModalAvaliacao();
  atualizarTudoNaTela();
  notificar('Avaliação registrada!', 'success');
}

// =====================================================
// OFICINAS, CIFRAS E MEU PERFIL
// =====================================================
function renderizarOficinas() {
  const harmBox = document.getElementById('lista-partituras-harmonia');
  const percBox = document.getElementById('lista-partituras-percussao');
  if (!harmBox || !percBox) return;

  harmBox.innerHTML = (oficinasPartiturasGerais.harmonia || []).map((item) => `
    <div style="padding:0.5rem 0; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
      <span style="font-size:0.88rem;">${item.titulo}</span>
      <button type="button" class="btn-quick" onclick="verOficina('harmonia', ${item.id})">Ver</button>
    </div>
  `).join('');

  percBox.innerHTML = (oficinasPartiturasGerais.percussao || []).map((item) => `
    <div style="padding:0.5rem 0; border-bottom:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
      <span style="font-size:0.88rem;">${item.titulo}</span>
      <button type="button" class="btn-quick" onclick="verOficina('percussao', ${item.id})">Ver</button>
    </div>
  `).join('');
}

function verOficina(area, id) {
  const lista = oficinasPartiturasGerais[area] || [];
  const item = lista.find((x) => Number(x.id) === Number(id));
  const box = document.getElementById('detalhe-oficina-box');
  if (!item || !box) return;

  box.classList.remove('hidden');
  box.innerHTML = `
    <h3>${item.titulo}</h3>
    <p class="text-muted">${item.compasso}</p>
    <p class="mt-2">${item.instrucoes}</p>
    <pre class="mt-3">${item.partituraTexto}</pre>
  `;
}

function selecionarCaderno(caderno) {
  cadernoSelecionado = caderno || 'todos';
  paginaAtualCaderno = 1;
  const label = document.getElementById('caderno-ativo-label');
  if (label) {
    const mapa = {
      todos: 'Caderno: Todos (Samba & Pagode Tradicionais)',
      samba: 'Caderno: Samba Tradicional',
      pagode: 'Caderno: Pagode Tradicional'
    };
    label.textContent = mapa[cadernoSelecionado] || mapa.todos;
  }
  renderizarCadernosCifras();
}

function alternarModoUsoCaderno(modo) {
  modoUsoCaderno = modo === 'tocar' ? 'tocar' : 'estudo';
  const desc = document.getElementById('modo-uso-descricao');
  if (desc) {
    desc.textContent = modoUsoCaderno === 'tocar'
      ? 'Modo Tocar / Roda: foco na cifra limpa e harmonia para acompanhar a roda.'
      : 'Modo Estudo: mostra dica de prática, harmonia e partitura rítmica.';
  }
  if (cifraAbertaAtual) abrirCifra(cifraAbertaAtual.id);
}

function abrirCifra(id) {
  const musica = cadernosRepertorioPadrao.find((m) => Number(m.id) === Number(id));
  const box = document.getElementById('visualizador-cifra');
  if (!musica || !box) return;

  cifraAbertaAtual = musica;
  box.classList.remove('hidden');
  box.innerHTML = `
    <h3>${musica.titulo}</h3>
    <p class="text-muted">Tom: ${musica.tom} • ${musica.partitura}</p>
    ${modoUsoCaderno === 'estudo' ? `<p class="mt-2"><strong>Dica de estudo:</strong> ${musica.estudo}</p>` : ''}
    <pre class="mt-3">${musica.cifra}</pre>
  `;
}

function renderizarCadernosCifras() {
  const tbody = document.getElementById('tabela-partituras-body');
  if (!tbody) return;

  const filtradas = cadernosRepertorioPadrao.filter((m) => cadernoSelecionado === 'todos' || m.caderno === cadernoSelecionado);
  const inicio = (paginaAtualCaderno - 1) * ITENS_POR_PAGINA_CADERNO;
  const paginaItens = filtradas.slice(inicio, inicio + ITENS_POR_PAGINA_CADERNO);

  tbody.innerHTML = paginaItens.map((m) => `
    <tr>
      <td>${m.titulo}</td>
      <td>${m.tom}</td>
      <td><button type="button" class="btn-quick" onclick="abrirCifra(${m.id})">Abrir Cifra</button></td>
    </tr>
  `).join('');
}

function renderizarMeuPerfil() {
  const user = appState.currentUser;
  if (!user) return;

  const avals = obterAvaliacoesDoArtista(user);
  const mediaStr = calcularMediaAvaliacoes(avals);
  const propostasConta = obterPropostasDaContaAtual();
  const aceitosCount = propostasConta.filter((p) => {
    const st = norm(p.status);
    return st === 'aceita' || st === 'aceito' || st === 'concluída' || st === 'concluida';
  }).length;
  const pctTrabalhos = propostasConta.length > 0 ? Math.round((aceitosCount / propostasConta.length) * 100) : 0;

  const nomeEl = document.getElementById('perfil-nome');
  const emailEl = document.getElementById('perfil-email');
  const avatarEl = document.getElementById('perfil-avatar');
  const badgeEl = document.getElementById('perfil-badge-area');
  const notaExibEl = document.getElementById('perfil-nota-exibicao');
  const totalAvalEl = document.getElementById('perfil-total-avaliacoes');
  const resumoNotaEl = document.getElementById('perfil-resumo-nota');
  const qtdContratosEl = document.getElementById('perfil-qtd-contratos-aceitos');
  const pctTrabEl = document.getElementById('perfil-pct-trabalhos');
  const comentariosEl = document.getElementById('perfil-comentarios-lista');

  if (nomeEl) nomeEl.textContent = user.nome || 'Músico';
  if (emailEl) emailEl.textContent = user.email || '';
  if (avatarEl) avatarEl.textContent = user.iniciais || gerarIniciais(user.nome);
  if (badgeEl) badgeEl.textContent = user.instrumento || 'Músico';
  if (notaExibEl) notaExibEl.textContent = mediaStr;
  if (totalAvalEl) totalAvalEl.textContent = String(avals.length);
  if (resumoNotaEl) resumoNotaEl.textContent = mediaStr;
  if (qtdContratosEl) qtdContratosEl.textContent = String(aceitosCount);
  if (pctTrabEl) pctTrabEl.textContent = `${pctTrabalhos}%`;

  if (comentariosEl) {
    comentariosEl.innerHTML = avals.length
      ? avals.map((av) => `<p style="margin-bottom:0.4rem;"><strong>${av.autor}</strong> (★ ${Number(av.nota).toFixed(1)}): "${av.comentario}"</p>`).join('')
      : `<p class="text-muted">Nenhuma avaliação registrada ainda.</p>`;
  }

  const editNome = document.getElementById('edit-perfil-nome');
  const editArea = document.getElementById('edit-perfil-area');
  const editInst = document.getElementById('edit-perfil-inst');
  const editEstilo = document.getElementById('edit-perfil-estilo');

  if (editNome) editNome.value = user.nome || '';
  if (editArea) editArea.value = user.cidade || '';
  if (editInst) editInst.value = user.instrumento || '';
  if (editEstilo) editEstilo.value = user.nivel || '';
}

function salvarEdicaoPerfil() {
  if (!appState.currentUser) return;
  const nome = document.getElementById('edit-perfil-nome')?.value.trim();
  const cidade = document.getElementById('edit-perfil-area')?.value.trim();
  const instrumento = document.getElementById('edit-perfil-inst')?.value.trim();
  const nivel = document.getElementById('edit-perfil-estilo')?.value.trim();

  if (nome) {
    appState.currentUser.nome = nome;
    appState.currentUser.iniciais = gerarIniciais(nome);
  }
  if (cidade !== undefined) appState.currentUser.cidade = cidade;
  if (instrumento !== undefined) appState.currentUser.instrumento = instrumento;
  if (nivel !== undefined) appState.currentUser.nivel = nivel;

  salvarUsuarioSessao(appState.currentUser);
  atualizarTudoNaTela();
  notificar('Informações do perfil atualizadas!', 'success');
}

function atualizarTudoNaTela() {
  const user = appState.currentUser;
  const nomeDash = document.getElementById('dashboard-user-name');
  if (nomeDash && user) nomeDash.textContent = user.nome || 'Batuqueiro';

  const propostasConta = obterPropostasDaContaAtual();
  const statPropostas = document.getElementById('stat-propostas-ativas');
  if (statPropostas) statPropostas.textContent = String(propostasConta.length);

  const avalsUser = user ? obterAvaliacoesDoArtista(user) : [];
  const statNota = document.getElementById('stat-nota-geral');
  if (statNota) statNota.textContent = calcularMediaAvaliacoes(avalsUser);

  renderizarPerfis();
  renderizarPropostas();
  renderizarOficinas();
  renderizarCadernosCifras();
  renderizarMeuPerfil();
}

async function quickLoginMusicon(email = 'miguel@musicon.com.br', senha = '123456') {
  try {
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('password');
    if (emailInput) emailInput.value = email;
    if (senhaInput) senhaInput.value = senha;

    const usuario = await realizarLoginMySQL(email, senha);
    salvarUsuarioSessao(usuario);
    aplicarEstadoTema(usuario.temaPreferido || 'dark');
    await carregarPerfisDoBanco();

    mostrarPortal();
    atualizarTudoNaTela();
    await renderizarListaConversas();
    notificar(`Bem-vindo(a), ${usuario.nome}!`, 'success');
  } catch (err) {
    notificar(err.message, 'error');
  }
}

// =====================================================
// EVENTOS GLOBAIS E INICIALIZAÇÃO
// =====================================================
document.addEventListener('input', (e) => {
  if (e.target && e.target.id === 'prop-cache') {
    e.target.value = e.target.value.replace(/[^0-9.,]/g, '');
  }
});

document.addEventListener('click', (e) => {
  const totalPaginas = Math.ceil(VIDEOS_SAMBA_15.length / VIDEOS_POR_PAGINA);
  if (e.target.closest('#btn-samba-anterior')) {
    paginaCarrosselVideos = (paginaCarrosselVideos - 1 + totalPaginas) % totalPaginas;
    renderizarCarrosselSamba();
  } else if (e.target.closest('#btn-samba-proximo')) {
    paginaCarrosselVideos = (paginaCarrosselVideos + 1) % totalPaginas;
    renderizarCarrosselSamba();
  } else {
    const ponto = e.target.closest('.samba-ponto[data-pagina]');
    if (ponto) {
      paginaCarrosselVideos = Number(ponto.getAttribute('data-pagina')) || 0;
      renderizarCarrosselSamba();
    }
  }
});

document.addEventListener('DOMContentLoaded', async () => {
  aplicarTemaSalvo();
  renderizarSlideHistoria(false);
  configurarArrasteHistoria();
  iniciarPassagemAutomaticaHistoria();
  renderizarCarrosselSamba();

  await carregarPerfisDoBanco();

  const sessao = obterUsuarioSessao();
  if (sessao) {
    appState.currentUser = sessao;
    aplicarEstadoTema(sessao.temaPreferido || 'dark');
    mostrarPortal();
    await renderizarListaConversas();
  } else {
    mostrarLogin();
  }

  atualizarTudoNaTela();

  const formLogin = document.getElementById('form-login');
  if (formLogin) {
    formLogin.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const email = (document.getElementById('email')?.value || '').trim();
      const senha = (document.getElementById('password')?.value || '').trim();
      if (!email || !senha) return notificar('Preencha e-mail e senha.', 'error');

      try {
        const usuario = await realizarLoginMySQL(email, senha);
        salvarUsuarioSessao(usuario);
        aplicarEstadoTema(usuario.temaPreferido || 'dark');
        await carregarPerfisDoBanco();
        mostrarPortal();
        atualizarTudoNaTela();
        await renderizarListaConversas();
        notificar(`Bem-vindo(a), ${usuario.nome}!`, 'success');
      } catch (err) {
        notificar(err.message, 'error');
      }
    });
  }

  const formCadastro = document.getElementById('form-cadastro');
  if (formCadastro) {
    formCadastro.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const nome = (document.getElementById('cadastro-nome')?.value || '').trim();
      const email = (document.getElementById('cadastro-email')?.value || '').trim();
      const senha = (document.getElementById('cadastro-senha')?.value || '').trim();
      const instrumento_principal = (document.getElementById('cadastro-instrumento')?.value || '').trim() || null;
      const cidade = (document.getElementById('cadastro-area')?.value || '').trim() || null;

      if (!nome || !email || !senha) return notificar('Preencha nome, e-mail e senha.', 'error');

      try {
        await cadastrarUsuarioMySQL({ nome, email, senha, instrumento_principal, cidade });
        await carregarPerfisDoBanco();
        notificar('Cadastro concluído! Agora faça login.', 'success');
        window.mostrarAbaAuth?.('login');
      } catch (err) {
        notificar(err.message, 'error');
      }
    });
  }
});

// =====================================================
// PERSISTÊNCIA DE PROPOSTAS ENTRE CONTAS (LOCALSTORAGE + API)
// =====================================================
(function () {
  const CHAVE_PROPOSTAS_PERMANENTE = 'musicon_propostas_db_local_v1';

  function limparTextoComparacao(v) {
    return String(v || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLowerCase();
  }

  function lerPropostasPersistentes() {
    try {
      const rawLocal = localStorage.getItem(CHAVE_PROPOSTAS_PERMANENTE);
      if (rawLocal) {
        const parsed = JSON.parse(rawLocal);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {}

    try {
      const rawSession = sessionStorage.getItem('musicon_propostas_compartilhadas_v1');
      if (rawSession) {
        const parsedS = JSON.parse(rawSession);
        if (Array.isArray(parsedS)) return parsedS;
      }
    } catch {}

    return Array.isArray(window.appState?.propostas) ? window.appState.propostas : [];
  }

  function salvarPropostasPersistentes(lista) {
    const segura = Array.isArray(lista) ? lista : [];
    window.appState = window.appState || {};
    window.appState.propostas = segura;

    try {
      localStorage.setItem(CHAVE_PROPOSTAS_PERMANENTE, JSON.stringify(segura));
    } catch {}

    try {
      sessionStorage.setItem('musicon_propostas_compartilhadas_v1', JSON.stringify(segura));
    } catch {}
  }

  async function tentarSincronizarPropostaAPI(proposta) {
    if (typeof API_BASE === 'undefined') return;
    try {
      await fetch(`${API_BASE}/api/propostas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proposta)
      });
    } catch {
      // Caso a rota /api/propostas ainda não exista no Express, mantém no localStorage
    }
  }

  async function tentarBuscarPropostasAPI() {
    if (typeof API_BASE === 'undefined') return null;
    try {
      const resp = await fetch(`${API_BASE}/api/propostas`);
      if (!resp.ok) return null;
      const rows = await resp.json();
      return Array.isArray(rows) ? rows : null;
    } catch {
      return null;
    }
  }

  // Sobrescreve o envio de proposta para gravar no localStorage e notificar ambas as contas
  window.enviarPropostaContratacao = async function () {
    const evento = (document.getElementById('prop-evento')?.value || '').trim();
    const dataIso = (document.getElementById('prop-data')?.value || '').trim();
    const horaIni = (document.getElementById('prop-hora-inicio')?.value || '').trim();
    const horaFim = (document.getElementById('prop-hora-fim')?.value || '').trim();
    const cacheRaw = (document.getElementById('prop-cache')?.value || '').trim();
    const requisitos = (document.getElementById('prop-requisitos')?.value || '').trim();

    const notifyFn = window.notificar || window.mostrarToast || alert;

    if (!evento || !dataIso || !horaIni || !horaFim || !cacheRaw) {
      return notifyFn('Preencha evento, data, horário de início, término e cachê.', 'error');
    }

    if (horaFim <= horaIni) {
      return notifyFn('O horário de término deve ser maior que o de início.', 'error');
    }

    const user = window.appState?.currentUser || {};
    const alvo = window.artistaAlvoProposta || {};
    const todas = lerPropostasPersistentes();

    const [ano, mes, dia] = dataIso.split('-');
    const dataFormatada = ano && mes && dia ? `${dia}/${mes}/${ano}` : dataIso;

    const novaProposta = {
      id: `prop_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      evento,
      data: `${dataFormatada} • ${horaIni} às ${horaFim}`,
      cache: cacheRaw.startsWith('R$') ? cacheRaw : `R$ ${cacheRaw}`,
      requisitos,
      status: 'Pendente',
      remetenteId: user.id ?? '',
      remetenteNome: user.nome || 'Contratante',
      remetenteEmail: user.email || '',
      musicoId: alvo.id ?? '',
      musicoNome: alvo.nome || '',
      musicoEmail: alvo.email || '',
      criadaEm: new Date().toISOString()
    };

    todas.unshift(novaProposta);
    salvarPropostasPersistentes(todas);
    await tentarSincronizarPropostaAPI(novaProposta);

    ['prop-evento', 'prop-data', 'prop-hora-inicio', 'prop-hora-fim', 'prop-cache', 'prop-requisitos'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });

    if (typeof window.fecharModalProposta === 'function') window.fecharModalProposta();
    if (typeof window.renderizarPropostas === 'function') window.renderizarPropostas();
    if (typeof window.atualizarTudoNaTela === 'function') window.atualizarTudoNaTela();

    notifyFn(`Proposta enviada para ${novaProposta.musicoNome || 'o músico'}!`, 'success');
  };

  window.atualizarStatusProposta = function (idProposta, novoStatus) {
    const todas = lerPropostasPersistentes();
    const alvo = todas.find((p) => String(p.id) === String(idProposta));
    if (!alvo) return;

    alvo.status = novoStatus;
    salvarPropostasPersistentes(todas);

    if (typeof window.renderizarPropostas === 'function') window.renderizarPropostas();
    if (typeof window.atualizarTudoNaTela === 'function') window.atualizarTudoNaTela();
    if (typeof window.renderizarMeuPerfil === 'function') window.renderizarMeuPerfil();

    const notifyFn = window.notificar || window.mostrarToast;
    if (notifyFn) notifyFn(`Proposta marcada como: ${novoStatus}`, 'info');
  };

  window.renderizarPropostas = function () {
    const grid = document.getElementById('propostas-grid');
    if (!grid) return;

    const todas = lerPropostasPersistentes();
    const user = window.appState?.currentUser || {};

    const uId = String(user.id || '').trim();
    const uEmail = limparTextoComparacao(user.email);
    const uNome = limparTextoComparacao(user.nome);

    const propostasDaConta = todas.filter((p) => {
      const pDestId = String(p.musicoId || '').trim();
      const pDestEmail = limparTextoComparacao(p.musicoEmail);
      const pDestNome = limparTextoComparacao(p.musicoNome);

      const pRemId = String(p.remetenteId || '').trim();
      const pRemEmail = limparTextoComparacao(p.remetenteEmail);
      const pRemNome = limparTextoComparacao(p.remetenteNome);

      const ehParaMim =
        (uId && pDestId && uId === pDestId) ||
        (uEmail && pDestEmail && uEmail === pDestEmail) ||
        (uNome && pDestNome && (uNome === pDestNome || pDestNome.includes(uNome) || uNome.includes(pDestNome)));

      const envieiEu =
        (uId && pRemId && uId === pRemId) ||
        (uEmail && pRemEmail && uEmail === pRemEmail) ||
        (uNome && pRemNome && uNome === pRemNome);

      return ehParaMim || envieiEu;
    });

    const badge = document.getElementById('badge-propostas');
    if (badge) {
      badge.textContent = String(propostasDaConta.length);
      badge.classList.toggle('hidden', propostasDaConta.length === 0);
    }

    if (!propostasDaConta.length) {
      grid.innerHTML = `
        <div class="card">
          <p class="text-muted">Nenhuma proposta registrada para esta conta ainda.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = propostasDaConta
      .map((pr) => {
        const pDestId = String(pr.musicoId || '').trim();
        const pDestEmail = limparTextoComparacao(pr.musicoEmail);
        const pDestNome = limparTextoComparacao(pr.musicoNome);

        const souDestinatario =
          (uId && pDestId && uId === pDestId) ||
          (uEmail && pDestEmail && uEmail === pDestEmail) ||
          (uNome && pDestNome && (uNome === pDestNome || pDestNome.includes(uNome) || uNome.includes(pDestNome)));

        const statusAtual = pr.status || 'Pendente';
        const stNorm = limparTextoComparacao(statusAtual);
        const corStatus =
          stNorm === 'aceita' || stNorm === 'aceito' || stNorm === 'concluida'
            ? '#22c55e'
            : stNorm === 'recusada'
              ? '#ef4444'
              : '#eab308';

        return `
          <div class="card">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
              <div>
                <span class="portal-badge">${souDestinatario ? 'Recebida' : 'Enviada por você'}</span>
                <h3 style="margin:0.35rem 0 0 0;">${pr.evento || 'Convite de Evento'}</h3>
              </div>
              <span style="font-size:0.78rem; font-weight:700; padding:0.2rem 0.6rem; border-radius:999px; border:1px solid ${corStatus}; color:${corStatus};">
                ${statusAtual}
              </span>
            </div>

            <p class="mt-2" style="margin-bottom:0.3rem;"><strong>Enviado por:</strong> ${pr.remetenteNome || 'Contratante'}</p>
            <p style="margin-bottom:0.3rem;"><strong>Artista / Destino:</strong> ${pr.musicoNome || 'Músico'}</p>
            <p style="margin-bottom:0.3rem;"><strong>Data e Horário:</strong> ${pr.data || 'A combinar'}</p>
            <p style="margin-bottom:0.3rem;"><strong>Cachê:</strong> ${pr.cache || 'A combinar'}</p>
            ${pr.requisitos ? `<p class="text-muted mt-1" style="font-size:0.86rem;"><strong>Detalhes:</strong> ${pr.requisitos}</p>` : ''}

            ${
              souDestinatario
                ? `
              <div style="display:flex; gap:0.45rem; flex-wrap:wrap; margin-top:0.85rem;">
                <button type="button" class="btn-primary" onclick="atualizarStatusProposta('${pr.id}', 'Aceita')">Aceitar</button>
                <button type="button" class="btn-quick" onclick="atualizarStatusProposta('${pr.id}', 'Concluída')">Concluir</button>
                <button type="button" class="btn-quick" onclick="atualizarStatusProposta('${pr.id}', 'Recusada')">Recusar</button>
              </div>
            `
                : ''
            }
          </div>
        `;
      })
      .join('');
  };

  document.addEventListener('DOMContentLoaded', async () => {
    const apiLista = await tentarBuscarPropostasAPI();
    if (apiLista && apiLista.length > 0) {
      salvarPropostasPersistentes(apiLista);
    } else {
      salvarPropostasPersistentes(lerPropostasPersistentes());
    }
    setTimeout(() => {
      if (typeof window.renderizarPropostas === 'function') window.renderizarPropostas();
    }, 200);
  });
})();

(function () {
  const CHAVE_PROPOSTAS_PERMANENTE = 'musicon_propostas_db_local_v1';

  async function sincronizarPropostasComServidor() {
    if (typeof API_BASE === 'undefined') return;
    try {
      const resp = await fetch(`${API_BASE}/api/propostas`);
      if (!resp.ok) return;
      const listaServidor = await resp.json();
      if (Array.isArray(listaServidor)) {
        window.appState = window.appState || {};
        window.appState.propostas = listaServidor;
        try {
          localStorage.setItem(CHAVE_PROPOSTAS_PERMANENTE, JSON.stringify(listaServidor));
          sessionStorage.setItem('musicon_propostas_compartilhadas_v1', JSON.stringify(listaServidor));
        } catch {}
        if (typeof window.renderizarPropostas === 'function') {
          window.renderizarPropostas();
        }
      }
    } catch {}
  }

  const origAtualizarStatus = window.atualizarStatusProposta;
  window.atualizarStatusProposta = async function (idProposta, novoStatus) {
    if (typeof origAtualizarStatus === 'function') {
      origAtualizarStatus(idProposta, novoStatus);
    }
    if (typeof API_BASE !== 'undefined') {
      try {
        await fetch(`${API_BASE}/api/propostas/${encodeURIComponent(idProposta)}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: novoStatus })
        });
        await sincronizarPropostasComServidor();
      } catch {}
    }
  };

  const origSwitchTab = window.switchTab;
  if (typeof origSwitchTab === 'function') {
    window.switchTab = function (tabName) {
      origSwitchTab(tabName);
      if (tabName === 'propostas') {
        sincronizarPropostasComServidor();
      }
    };
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(sincronizarPropostasComServidor, 300);
  });
})();