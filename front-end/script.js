const STORAGE_KEY = 'musicon_portal_v13';
const INTERVALO_CARROSSEL_MS = 3500;

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

// =====================================================
// CARROSSEL FLUTUANTE E AUTOMÁTICO DE RETRATOS (7 FOTOS)
// >>> COLOQUE AQUI OS LINKS OU CAMINHOS DAS 7 FOTOS DO CARROSSEL <<<
// =====================================================
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
    imagem: 'foto8.jpeg',
    kicker: '7 / 7 • COMUNIDADE MUSICAL',
    titulo: 'Aproximando quem precisa de música de quem toca',
    subtitulo: 'Um ponto de encontro para manter a roda girando',
    texto: 'O Musicon nasceu para encurtar caminhos, fortalecer parcerias e ajudar a nunca faltar músico quando a roda chamar.'
  }
];

// =====================================================
// VÍDEOS DE PAGODE LOGO ABAIXO DO CARROSSEL
// >>> ONDE COLOCAR O LINK DO VÍDEO:
// Altere o campo "url" em cada objeto abaixo.
// Ex. YouTube: 'https://www.youtube.com/watch?v=SEU_ID'
// Ex. Local:   'videos/pagode1.mp4'
// =====================================================
const videosPagodeMusicon = [
  {
    id: 'pagode-1',
    titulo: 'Roda de Pagode Tradicional #1',
    descricao: 'Levada de mesa, tantã, pandeiro e harmonia para pegar o pulso da roda.',
    tag: 'Pagode de Mesa',
    url: 'https://www.youtube.com/watch?v=BE0n_Wzgbho'
  },
  {
    id: 'pagode-2',
    titulo: 'Ensaio & Harmonia de Pagode #2',
    descricao: 'Acompanhamento harmónico e condução rítmica para estudo e ensaio.',
    tag: 'Ensaio & Harmonia',
    url: 'https://www.youtube.com/watch?v=IRyxfwk2YQY&list=RDIRyxfwk2YQY&start_radio=1'
  },
  {
    id: 'pagode-3',
    titulo: 'Samba & Pagode em Roda #3',
    descricao: 'Referência de dinâmica, resposta no refrão e energia de roda.',
    tag: 'Roda de Samba',
    url: 'https://www.youtube.com/watch?v=VXNuCDAZmpA'
  }
];

let indiceSlideHistoria = 0;
let timerCarrosselHistoria = null;
let animandoTrocaHistoria = false;

let arrastandoHistoria = false;
let inicioArrasteX = 0;
let deltaArrasteX = 0;
let bloqueouCliqueArraste = false;

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
      const atrasoAnimacao = `${(posIdx * 0.35).toFixed(2)}s`;

      return `
        <button
          type="button"
          class="historia-retrato-card flutuando ${ehCentro ? 'destaque' : ehLateralProximo ? 'proximo' : 'distante'}"
          style="animation-delay: ${atrasoAnimacao};"
          onclick="irParaSlideHistoriaManual(${idxReal})"
          aria-label="${item.titulo}"
          title="${item.titulo}"
        >
          <img src="${item.imagem}" alt="${item.titulo}">
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
      const deslocamentoLimitado = Math.max(-90, Math.min(90, deltaArrasteX * 0.45));
      trilha.style.transform = `translateX(${deslocamentoLimitado}px)`;
    }
  });

  const finalizarArraste = () => {
    if (!arrastandoHistoria) return;
    arrastandoHistoria = false;
    trilha.classList.remove('arrastando');
    trilha.style.transition = '';
    trilha.style.transform = '';

    const limiarArraste = 45;
    if (deltaArrasteX <= -limiarArraste) {
      proximoSlideHistoriaManual();
    } else if (deltaArrasteX >= limiarArraste) {
      slideAnteriorHistoriaManual();
    } else {
      iniciarPassagemAutomaticaHistoria();
    }

    setTimeout(() => {
      bloqueouCliqueArraste = false;
    }, 50);
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

function extrairIdYouTube(url) {
  if (!url || typeof url !== 'string') return null;
  const padroes = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{6,})/,
    /[?&]v=([A-Za-z0-9_-]{6,})/
  ];
  for (const regex of padroes) {
    const match = url.match(regex);
    if (match && match[1]) return match[1];
  }
  return null;
}

function renderizarMidiaVideoPagode(url, titulo) {
  const ytId = extrairIdYouTube(url);
  if (ytId) {
    return `
      <iframe
        src="https://www.youtube.com/embed/${ytId}?rel=0"
        title="${titulo}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  }

  if (url && /\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return `
      <video controls preload="metadata" onplay="pararPassagemAutomaticaHistoria()">
        <source src="${url}">
        O teu navegador não suporta reprodução de vídeo.
      </video>
    `;
  }

  return `
    <div class="pagode-video-placeholder">
      <i class="fa-solid fa-play-circle"></i>
      <span>Adiciona o link em <code>videosPagodeMusicon</code></span>
    </div>
  `;
}

function renderizarVideosPagode() {
  const grid = document.getElementById('pagode-videos-grid');
  if (!grid) return;

  if (!Array.isArray(videosPagodeMusicon) || videosPagodeMusicon.length === 0) {
    grid.innerHTML = `<p class="text-muted">Nenhum vídeo de pagode registado ainda.</p>`;
    return;
  }

  grid.innerHTML = videosPagodeMusicon.map(vid => `
    <article class="pagode-video-card">
      <div class="pagode-video-frame" onclick="pararPassagemAutomaticaHistoria()">
        ${renderizarMidiaVideoPagode(vid.url, vid.titulo)}
      </div>
      <div class="pagode-video-corpo">
        <span class="portal-badge">${vid.tag || 'Pagode'}</span>
        <h3>${vid.titulo}</h3>
        <p class="text-muted">${vid.descricao || ''}</p>
      </div>
    </article>
  `).join('');
}

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
      estudo: 'Trabalha a dinâmica: começa contido para estudo harmónico e abre o balanço para a roda.',
      cifra: 'Intro: G7M | Em7 | Am7 | D7(9)\nG7M            B7(5+)\nDeixa a vida me levar (vida leva eu)\nEm7            G7\nDeixa a vida me levar (vida leva eu)'
    },
    {
      caderno: 'pagode',
      titulo: 'Conselho (Pagode Tradicional)',
      tom: 'Lá Menor (Am)',
      partitura: '2/4 • Harmonia em ciclo de quintas com levada de pagode de mesa',
      estudo: 'Observa os acordes menores com sétima e as tensões antes de tocar junto com a roda.',
      cifra: 'Intro: Am7 | Dm7 | G7(9) | C7M(9)\nAm7            Dm7\nDeixe de lado esse baixo astral\nG7(9)          C7M(9)\nErgue a cabeça, enfrenta o mal'
    },
    {
      caderno: 'samba',
      titulo: 'O Mundo é um Moinho (Samba Tradicional)',
      tom: 'Dó Maior (C)',
      partitura: '2/4 • Samba tradicional com condução expressiva e resolução clara',
      estudo: 'Cuida da resolução dos acordes dominantes e da intenção melódica sem acelerar.',
      cifra: 'Intro: C7M | A7(b9) | Dm7 | G7(13)\nC7M            A7(b9)\nAinda é cedo, amor, mal raiou a madrugada\nDm7            G7(13)\nDeixa esse tempo passar'
    },
    {
      caderno: 'pagode',
      titulo: 'Coração Radiante (Pagode Tradicional)',
      tom: 'Mi Maior (E)',
      partitura: '2/4 • Pagode tradicional com acentuação leve e refrão expansivo',
      estudo: 'Treina a troca limpa entre acordes com nona e sétima mantendo o pulso constante.',
      cifra: 'Intro: E7M | C#m7 | F#m7 | B7(9)\nE7M            C#m7\nÉ tanta coisa boa que acontece\nF#m7           B7(9)\nQuando a gente se entrega de verdade'
    },
    {
      caderno: 'samba',
      titulo: 'Samba da Benção — Cadência de Roda',
      tom: 'Lá Maior (A)',
      partitura: '2/4 • Samba tradicional com transições diatónicas e apoio rítmico constante',
      estudo: 'Estuda a ligação entre tónica, relativa menor e dominante mantendo a pulsação limpa.',
      cifra: 'Intro: A7M | F#m7 | Bm7 | E7(9)\nA7M            C#m7\nA vida é feita de encontros e canções\nBm7            E7(9)\nQue embalam a alma em qualquer lugar'
    },
    {
      caderno: 'pagode',
      titulo: 'Tarde em Itapuã / Roda de Quintal',
      tom: 'Fá Maior (F)',
      partitura: '2/4 • Pagode de mesa com condução suave na estrofe e firme no refrão',
      estudo: 'Pratica o controlo de volume entre o estudo individual e a execução em grupo.',
      cifra: 'Intro: F7M | D7(b9) | Gm7 | C7(13)\nF7M            Am7\nQuando o sol vai descendo na esquina\nGm7            C7(13)\nO samba chama e a gente responde'
    }
  ];

  const tons = [
    'Dó Maior (C)', 'Ré Maior (D)', 'Mi Maior (E)', 'Fá Maior (F)',
    'Sol Maior (G)', 'Lá Maior (A)', 'Lá Menor (Am)', 'Ré Menor (Dm)',
    'Mi Menor (Em)', 'Sol Menor (Gm)'
  ];

  const progressos = [
    'C7M | A7(b9) | Dm7 | G7(13)',
    'G7M | Em7 | Am7 | D7(13)',
    'D7M | Bm7 | Em7 | A7(13)',
    'F7M | Dm7 | Gm7 | C7(9)',
    'Am7 | Dm7 | G7(9) | C7M(9)',
    'E7M | C#m7 | F#m7 | B7(9)'
  ];

  const lista = [];
  for (let i = 0; i < 400; i++) {
    const base = catalogosBase[i % catalogosBase.length];
    const ehSamba = i % 2 === 0;
    const caderno = i < catalogosBase.length ? base.caderno : (ehSamba ? 'samba' : 'pagode');
    const tom = i < catalogosBase.length ? base.tom : tons[i % tons.length];
    const prog = progressos[i % progressos.length];
    const faixa = i + 1;

    lista.push({
      id: 1000 + i,
      caderno,
      titulo: i < catalogosBase.length
        ? base.titulo
        : `${ehSamba ? 'Samba Tradicional' : 'Pagode Tradicional'} #${faixa} — Repertório de Roda`,
      tom,
      partitura: base.partitura,
      estudo: base.estudo,
      cifra: i < catalogosBase.length
        ? base.cifra
        : `Intro: ${prog}\nParte A: ${prog}\nParte B: ${prog}\nRefrão: ${prog}`
    });
  }

  return lista;
}

const cadernosRepertorioPadrao = gerarRepertorio400Musicas();

const oficinasPartiturasGerais = {
  harmonia: [
    {
      id: 401,
      area: 'Harmonia',
      titulo: 'Partitura de Harmonia I — Campo Harmónico e Funções (Tónica, Subdominante e Dominante)',
      compasso: '4/4 • Estudo Harmónico Geral',
      instrucoes: 'Lê os compassos lentamente sem pressa. Identifica onde há repouso (Tónica), preparo/afastamento (Subdominante) e tensão/resolução (Dominante). Toca em blocos primeiro e depois arpeja ou conduz as vozes com limpeza.',
      partituraTexto: 'C.1: [ I  (T) ]   | C.2: [ IV (SD) ] | C.3: [ ii (SD) ] | C.4: [ V7 (D) -> I (T) ]\nC.5: [ vi (T) ]  | C.6: [ ii (SD) ] | C.7: [ V7(9) (D)]| C.8: [ I7M (T) ]'
    },
    {
      id: 402,
      area: 'Harmonia',
      titulo: 'Partitura de Harmonia II — Preparações, Dominantes Secundários e Condução de Vozes',
      compasso: '2/4 • Estudo Harmónico Geral',
      instrucoes: 'Observa como cada dominante prepara o acorde seguinte. Mantém as notas comuns ligadas entre compassos e faz movimentos conjuntos nas vozes internas para evitar saltos bruscos.',
      partituraTexto: 'C.1: [ I7M ]      | C.2: [ VI7(b9) ] | C.3: [ ii7 ]     | C.4: [ V7(13) ]\nC.5: [ iii7 ]     | C.6: [ VI7 ]     | C.7: [ II7(9) ]  | C.8: [ V7 -> I ]'
    },
    {
      id: 403,
      area: 'Harmonia',
      titulo: 'Partitura de Harmonia III — Cadências II-V-I, Empréstimo Modal e Tensões',
      compasso: '4/4 • Estudo Harmónico Geral',
      instrucoes: 'Pratica a resolução tensa-repouso identificando sétimas, nonas e décimas terceiras. Mantém o mesmo ritmo harmónico em cada compasso antes de experimentar variações de levada.',
      partituraTexto: 'C.1: [ ii7(9) ]   | C.2: [ V7(13) ]  | C.3: [ I7M(9) ]  | C.4: [ IV7M ]     \nC.5: [ iv7(b5) ]  | C.6: [ bVII7(9) ]| C.7: [ iii7 ]    | C.8: [ VI7(b9) -> ii7 -> V7 -> I ]'
    },
    {
      id: 404,
      area: 'Harmonia',
      titulo: 'Partitura de Harmonia IV — Inversões, Baixo Pedal e Transições Harmónicas',
      compasso: '2/4 • Estudo Harmónico Geral',
      instrucoes: 'Presta atenção na nota mais grave de cada compasso. Estuda a transição sem pressa para que a mudança de acorde soe natural, contínua e equilibrada.',
      partituraTexto: 'C.1: [ I / 3 ]    | C.2: [ IV / 5 ]  | C.3: [ ii7 ]     | C.4: [ V7 / 4 ]\nC.5: [ I ]        | C.6: [ V7/vi ]   | C.7: [ vi7 ]     | C.8: [ V7(9) -> I7M ]'
    }
  ],
  percussao: [
    {
      id: 501,
      area: 'Percussão',
      titulo: 'Partitura de Percussão I — Subdivisão Binária, Semínimas e Colcheias',
      compasso: '2/4 • Estudo Percussivo Geral',
      instrucoes: 'Conta os tempos em voz alta (1 e 2 e). Mantém o metrónomo ou pulso constante sem adiantar nas colcheias. Diferencia claramente os acentos marcados (>) das notas neutras.',
      partituraTexto: 'C.1: [ >1   e   2   e ] | C.2: [  1  >e   2  >e ] | C.3: [ >1  >e  >2  >e ] | C.4: [  1   e  >2   e ]'
    },
    {
      id: 502,
      area: 'Percussão',
      titulo: 'Partitura de Percussão II — Síncope, Contratempos e Dinâmica',
      compasso: '2/4 • Estudo Percussivo Geral',
      instrucoes: 'Pratica primeiro em andamento lento até sentires a ligação entre o tempo fraco e o tempo forte seguinte. Controla a altura do som para que piano (p) e forte (f) tenham contraste real.',
      partituraTexto: 'C.1 (p): [  1  >e   2   e ] | C.2 (p): [  1   e  >2  >e ] | C.3 (f): [ >1   e  >2  >e ] | C.4 (f): [ >1  >e  >2   . ]'
    },
    {
      id: 503,
      area: 'Percussão',
      titulo: 'Partitura de Percussão III — Semicolcheias e Grupos Rítmicos (1-e-a 2-e-a)',
      compasso: '2/4 • Estudo Percussivo Geral',
      instrucoes: 'Subdivide cada tempo em quatro partes iguais (1 e a 2 e a). Evita encurtar a última nota do grupo e mantém a precisão mesmo quando o andamento subir.',
      partituraTexto: 'C.1: [ >1  e  a  >2  e  a ] | C.2: [  1 >e  a   2 >e  a ] | C.3: [ >1  e >a  >2  e >a ] | C.4: [ >1  .  a  >2  e  . ]'
    },
    {
      id: 504,
      area: 'Percussão',
      titulo: 'Partitura de Percussão IV — Pausas, Viradas e Estabilidade de Pulso',
      compasso: '2/4 • Estudo Percussivo Geral',
      instrucoes: 'Respeita os silêncios (.) sem perder a contagem interna. Usa os últimos tempos do ciclo como preparação para retomar o pulso principal com firmeza.',
      partituraTexto: 'C.1: [ >1   e  >2   e ] | C.2: [ >1   .   2  >e ] | C.3: [  1  >e  >2  >e ] | C.4: [ >1  >e  >2  >e ]'
    }
  ]
};

const defaultData = {
  currentUser: null,
  perfisComunidade: [
    { id: 1, email: 'miguel@musicon.com', senha: '123', nome: 'Miguel', iniciais: 'MG', area: 'Show ao Vivo & Bailes', instrumento: 'Violão 7 Cordas, Cavaquinho', estilo: 'Samba & Choro', notaMedia: 4.9, totalAvaliacoes: 14 },
    { id: 2, email: 'mariana@musicon.com', senha: '123', nome: 'Mariana Souza', iniciais: 'MS', area: 'Show ao Vivo', instrumento: 'Cavaquinho, Voz', estilo: 'Partido-Alto & MPB', notaMedia: 4.8, totalAvaliacoes: 19 },
    { id: 3, email: 'carlos@musicon.com', senha: '123', nome: 'Carlos Andrade', iniciais: 'CA', area: 'Rodas de Samba', instrumento: 'Percussão, Pandeiro', estilo: 'Samba de Roda & Baião', notaMedia: 5.0, totalAvaliacoes: 27 }
  ],
  propostas: [],
  mensagensPrivadas: [],
  atividades: [
    { id: 1, title: 'Prática: Levada de Samba-Enredo', description: 'Treina a levada de caixa, surdo e repique.', subject: 'Percussão', type: 'Prática', completed: false }
  ],
  partituras: [],
  offlineItems: [
    { id: 1, titulo: 'Caderno de Cifras: Samba & Raiz', info: '400 músicas • Repertório Tradicional', baixado: true }
  ]
};

let appState = carregarEstado();
let artistaAlvoProposta = null;
let perfilSelecionadoParaAvaliar = null;
let notaSelecionada = 5;
let usuarioConversandoId = null;
let cadernoSelecionado = 'todos';
let modoUsoCaderno = 'estudo';
let cifraAbertaAtual = null;
let filtroTextoCaderno = '';
let paginaAtualCaderno = 1;
const ITENS_POR_PAGINA_CADERNO = 25;

function carregarEstado() {
  const salvo = localStorage.getItem(STORAGE_KEY);
  const parsed = salvo ? JSON.parse(salvo) : JSON.parse(JSON.stringify(defaultData));
  parsed.partituras = [];
  return parsed;
}

function salvarEstado() {
  const copia = { ...appState, partituras: [] };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(copia));
}

document.addEventListener('DOMContentLoaded', () => {
  aplicarTemaSalvo();
  renderizarSlideHistoria(false);
  configurarArrasteHistoria();
  iniciarPassagemAutomaticaHistoria();
  renderizarVideosPagode();

  const sessao = localStorage.getItem('usuarioLogado');
  if (sessao) {
    appState.currentUser = JSON.parse(sessao);
    mostrarPortal();
  } else {
    mostrarLogin();
  }

  atualizarTudoNaTela();

  const formLogin = document.getElementById('form-login');
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('password').value.trim();

      if (!email || !senha) return showToast('Preenche e-mail e palavra-passe.', 'error');

      let perfilEncontrado = appState.perfisComunidade.find(p => p.email.toLowerCase() === email.toLowerCase());

      if (!perfilEncontrado) {
        return showToast('E-mail não registado! Cria uma conta primeiro.', 'error');
      }

      const senhaCorreta = perfilEncontrado.senha || '123';
      if (senha !== senhaCorreta) {
        return showToast('Palavra-passe incorreta.', 'error');
      }

      appState.currentUser = { ...perfilEncontrado };
      localStorage.setItem('usuarioLogado', JSON.stringify(appState.currentUser));
      salvarEstado();
      mostrarPortal();
      atualizarTudoNaTela();
      showToast(`Bem-vindo à roda, ${appState.currentUser.nome || appState.currentUser.name}!`, 'success');
    });
  }

  const formCadastro = document.getElementById('form-cadastro');
  if (formCadastro) {
    formCadastro.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('cadastro-nome').value.trim();
      const email = document.getElementById('cadastro-email').value.trim();
      const senha = document.getElementById('cadastro-senha').value.trim();

      if (!nome || !email || !senha) return showToast('Preenche todos os campos do registo.', 'error');

      const jaExiste = appState.perfisComunidade.some(p => p.email.toLowerCase() === email.toLowerCase());
      if (jaExiste) {
        return showToast('Este e-mail já está registado. Inicia sessão.', 'error');
      }

      const novoUsuario = {
        id: Date.now(),
        email: email,
        senha: senha,
        name: nome,
        nome: nome,
        iniciais: nome.substring(0, 2).toUpperCase(),
        area: 'Show ao Vivo & Rodas',
        instrumento: 'Pandeiro e Voz',
        estilo: 'Samba de Raiz',
        notaMedia: 5.0,
        totalAvaliacoes: 1
      };

      appState.perfisComunidade.push(novoUsuario);
      appState.currentUser = { ...novoUsuario };

      localStorage.setItem('usuarioLogado', JSON.stringify(appState.currentUser));
      salvarEstado();
      mostrarPortal();
      atualizarTudoNaTela();
      showToast('Conta criada com sucesso! Bem-vindo.', 'success');
    });
  }
});

// =====================================================
// OFICINAS & BATUCADA — PARTITURAS GERAIS (HARMONIA / PERCUSSÃO)
// =====================================================

function abrirPartituraEstudoGeral(id) {
  const todas = [...oficinasPartiturasGerais.harmonia, ...oficinasPartiturasGerais.percussao];
  const item = todas.find(p => Number(p.id) === Number(id));
  const box = document.getElementById('detalhe-oficina-box');
  if (!item || !box) return;

  box.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:1rem;">
      <div>
        <span class="portal-badge">${item.area}</span>
        <h3 class="mt-2">${item.titulo}</h3>
        <small class="text-muted">${item.compasso}</small>
      </div>
      <button type="button" class="btn-quick" onclick="fecharPartituraEstudoGeral()"><i class="fa-solid fa-xmark"></i> Fechar</button>
    </div>
    <p class="mt-3"><strong>Instruções de estudo:</strong> ${item.instrucoes}</p>
    <pre style="margin-top:0.85rem; white-space:pre-wrap; font-family:inherit; line-height:1.6;">${item.partituraTexto}</pre>
  `;
  box.classList.remove('hidden');
}

function fecharPartituraEstudoGeral() {
  document.getElementById('detalhe-oficina-box')?.classList.add('hidden');
}

function renderizarOficinasPartituras() {
  const divHarmonia = document.getElementById('lista-partituras-harmonia');
  const divPercussao = document.getElementById('lista-partituras-percussao');

  if (divHarmonia) {
    divHarmonia.innerHTML = oficinasPartiturasGerais.harmonia.map(p => `
      <div style="padding:0.75rem 0; border-top:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
        <div>
          <strong>${p.titulo}</strong>
          <div class="text-muted" style="font-size:0.8rem;">${p.compasso}</div>
        </div>
        <button type="button" class="btn-quick" onclick="abrirPartituraEstudoGeral(${p.id})">
          <i class="fa-solid fa-file-lines"></i> Abrir Partitura
        </button>
      </div>
    `).join('');
  }

  if (divPercussao) {
    divPercussao.innerHTML = oficinasPartiturasGerais.percussao.map(p => `
      <div style="padding:0.75rem 0; border-top:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
        <div>
          <strong>${p.titulo}</strong>
          <div class="text-muted" style="font-size:0.8rem;">${p.compasso}</div>
        </div>
        <button type="button" class="btn-quick" onclick="abrirPartituraEstudoGeral(${p.id})">
          <i class="fa-solid fa-file-lines"></i> Abrir Partitura
        </button>
      </div>
    `).join('');
  }
}

// =====================================================
// CADERNOS DE CIFRAS & PARTITURAS (SAMBA & PAGODE - 400+)
// =====================================================

function obterFontePartituras() {
  if (!Array.isArray(appState.partituras) || appState.partituras.length === 0) {
    appState.partituras = cadernosRepertorioPadrao;
  }
  return appState.partituras;
}

function obterListaCaderno() {
  const base = obterFontePartituras();
  const termo = (filtroTextoCaderno || '').toLowerCase().trim();

  return base.filter(item => {
    const matchCaderno = cadernoSelecionado === 'todos' || (item.caderno || 'samba') === cadernoSelecionado;
    if (!matchCaderno) return false;
    if (!termo) return true;

    const titulo = (item.titulo || '').toLowerCase();
    const tom = (item.tom || '').toLowerCase();
    return titulo.includes(termo) || tom.includes(termo);
  });
}

function selecionarCaderno(tipo) {
  cadernoSelecionado = tipo;
  paginaAtualCaderno = 1;
  const label = document.getElementById('caderno-ativo-label');
  if (label) {
    if (tipo === 'samba') label.textContent = 'Caderno: Samba Tradicional';
    else if (tipo === 'pagode') label.textContent = 'Caderno: Pagode Tradicional';
    else label.textContent = 'Caderno: Todos (Samba & Pagode Tradicionais)';
  }
  renderizarTabelaPartituras();
  if (cifraAbertaAtual) abrirCifraCaderno(cifraAbertaAtual);
}

function alternarModoUsoCaderno(modo) {
  modoUsoCaderno = modo;
  const desc = document.getElementById('modo-uso-descricao');
  if (desc) {
    desc.textContent = modo === 'estudo'
      ? 'Modo Estudo: mostra dica de prática, harmonia e partitura rítmica.'
      : 'Modo Tocar / Roda / Outros: foco direto na cifra e partitura para execução e ensaios.';
  }
  renderizarTabelaPartituras();
  if (cifraAbertaAtual) abrirCifraCaderno(cifraAbertaAtual);
}

function filtrarCadernoTabela(valor) {
  filtroTextoCaderno = valor || '';
  paginaAtualCaderno = 1;
  renderizarTabelaPartituras();
}

function mudarPaginaCaderno(delta) {
  const totalItens = obterListaCaderno().length;
  const totalPaginas = Math.max(1, Math.ceil(totalItens / ITENS_POR_PAGINA_CADERNO));
  paginaAtualCaderno = Math.min(totalPaginas, Math.max(1, paginaAtualCaderno + delta));
  renderizarTabelaPartituras();
}

function renderizarTabelaPartituras() {
  const tbody = document.getElementById('tabela-partituras-body');
  if (!tbody) return;

  const itens = obterListaCaderno();
  const totalPaginas = Math.max(1, Math.ceil(itens.length / ITENS_POR_PAGINA_CADERNO));
  if (paginaAtualCaderno > totalPaginas) paginaAtualCaderno = totalPaginas;

  const inicio = (paginaAtualCaderno - 1) * ITENS_POR_PAGINA_CADERNO;
  const paginaItens = itens.slice(inicio, inicio + ITENS_POR_PAGINA_CADERNO);

  let html = `
    <tr>
      <td colspan="3">
        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:space-between; align-items:center;">
          <input
            type="text"
            class="input-styled"
            style="max-width:320px; padding:0.45rem 0.75rem; padding-left:0.75rem;"
            placeholder="Pesquisar música ou tom (${itens.length} disponíveis)..."
            value="${filtroTextoCaderno.replace(/"/g, '"')}"
            oninput="filtrarCadernoTabela(this.value)"
          >
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <button type="button" class="btn-quick" onclick="mudarPaginaCaderno(-1)" ${paginaAtualCaderno <= 1 ? 'disabled' : ''}>Anterior</button>
            <span class="text-muted" style="font-size:0.85rem;">Pág. ${paginaAtualCaderno} de ${totalPaginas}</span>
            <button type="button" class="btn-quick" onclick="mudarPaginaCaderno(1)" ${paginaAtualCaderno >= totalPaginas ? 'disabled' : ''}>Próxima</button>
          </div>
        </div>
      </td>
    </tr>
  `;

  if (paginaItens.length === 0) {
    html += `<tr><td colspan="3" class="text-muted">Nenhuma música encontrada para esse filtro.</td></tr>`;
  } else {
    html += paginaItens.map(m => `
      <tr>
        <td><strong>${m.titulo}</strong></td>
        <td>${m.tom}</td>
        <td>
          <button type="button" class="btn-quick" onclick="abrirCifraCaderno(${m.id})">
            <i class="fa-solid fa-music"></i> ${modoUsoCaderno === 'estudo' ? 'Estudar' : 'Tocar'}
          </button>
        </td>
      </tr>
    `).join('');
  }

  tbody.innerHTML = html;
}

function abrirCifraCaderno(id) {
  const base = obterFontePartituras();
  const musica = base.find(m => Number(m.id) === Number(id));
  const box = document.getElementById('visualizador-cifra');
  if (!musica || !box) return;

  cifraAbertaAtual = musica.id;

  const detalhesEstudo = modoUsoCaderno === 'estudo'
    ? `
      <p class="mt-2"><strong>Partitura / Levada:</strong> ${musica.partitura || 'Compasso 2/4 tradicional'}</p>
      <p class="mt-2"><strong>Dica de Estudo:</strong> ${musica.estudo || 'Pratica o ritmo antes de acelerar.'}</p>
    `
    : `
      <p class="mt-2"><strong>Partitura / Levada:</strong> ${musica.partitura || 'Compasso 2/4 tradicional'}</p>
    `;

  box.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; gap:1rem;">
      <div>
        <h3>${musica.titulo}</h3>
        <small class="text-muted">Tom: ${musica.tom} • Uso: ${modoUsoCaderno === 'estudo' ? 'Estudo' : 'Tocar / Roda / Outros'}</small>
      </div>
      <button type="button" class="btn-quick" onclick="fecharCifraCaderno()"><i class="fa-solid fa-xmark"></i> Fechar</button>
    </div>
    ${detalhesEstudo}
    <pre style="margin-top:0.85rem; white-space:pre-wrap; font-family:inherit; line-height:1.6;">${musica.cifra}</pre>
  `;
  box.classList.remove('hidden');
}

function fecharCifraCaderno() {
  cifraAbertaAtual = null;
  document.getElementById('visualizador-cifra')?.classList.add('hidden');
}

// =====================================================
// SISTEMA DE CHAT PRIVADO & PESQUISA DE MÚSICOS
// =====================================================

function abrirChatComUsuario(outroId) {
  const outroUsuario = (appState.perfisComunidade || []).find(p => Number(p.id) === Number(outroId));
  if (!outroUsuario) return;

  usuarioConversandoId = Number(outroId);
  switchTab('chat');
  renderizarListaConversas();
  renderizarMensagensChatPrivado(usuarioConversandoId);
}

function filtrarConversasChat() {
  const termo = (document.getElementById('chat-busca-musico')?.value || '').toLowerCase().trim();
  renderizarListaConversas(termo);
}

function renderizarListaConversas(filtroTexto = '') {
  const listaDiv = document.getElementById('lista-conversas');
  if (!listaDiv || !appState.currentUser) return;

  if (filtroTexto === '' && document.getElementById('chat-busca-musico')) {
    filtroTexto = document.getElementById('chat-busca-musico').value.toLowerCase().trim();
  }

  const meuId = Number(appState.currentUser.id);
  let outrosUsuarios = (appState.perfisComunidade || []).filter(p => Number(p.id) !== meuId);

  if (filtroTexto) {
    outrosUsuarios = outrosUsuarios.filter(u => {
      const nome = (u.nome || u.name || '').toLowerCase();
      const instrumento = (u.instrumento || '').toLowerCase();
      return nome.includes(filtroTexto) || instrumento.includes(filtroTexto);
    });
  }

  if (outrosUsuarios.length === 0) {
    listaDiv.innerHTML = `<p class="text-muted" style="padding: 1rem; font-size: 0.85rem; text-align: center;">Nenhum músico encontrado.</p>`;
    return;
  }

  listaDiv.innerHTML = outrosUsuarios.map(u => {
    const nome = u.nome || u.name || 'Músico';
    const ativoClass = usuarioConversandoId === Number(u.id) ? 'active' : '';

    const msgs = (appState.mensagensPrivadas || []).filter(m => {
      const rem = Number(m.remetenteId);
      const dest = Number(m.destinatarioId);
      const outroId = Number(u.id);
      return (rem === meuId && dest === outroId) || (rem === outroId && dest === meuId);
    });

    const ultimaMsg = msgs.length > 0 ? msgs[msgs.length - 1].texto : (u.instrumento || 'Clica para conversar...');

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

  const msgs = (appState.mensagensPrivadas || []).filter(m => {
    const rem = Number(m.remetenteId);
    const dest = Number(m.destinatarioId);
    return (rem === meuId && dest === outroIdNum) || (rem === outroIdNum && dest === meuId);
  });

  if (mensagensBox) {
    if (msgs.length === 0) {
      mensagensBox.innerHTML = `<div style="text-align:center; color:var(--text-muted); margin-top:2rem; font-size:0.85rem;">Nenhuma mensagem nesta conversa ainda. Envia uma mensagem!</div>`;
    } else {
      mensagensBox.innerHTML = msgs.map(m => {
        const souEu = Number(m.remetenteId) === meuId;
        const nomeAutor = souEu ? 'Tu' : (outroUsuario.nome || outroUsuario.name);

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
  salvarEstado();
  input.value = '';

  renderizarMensagensChatPrivado(usuarioConversandoId);
  renderizarListaConversas();
}

// =====================================================
// CARROSSEL DE INSTRUMENTOS
// =====================================================
function abrirDetalhesInstrumento(chave) {
  const info = dadosInstrumentos[chave];
  if (!info) return;

  document.getElementById('detalhe-inst-titulo').textContent = info.titulo;
  document.getElementById('detalhe-inst-historia').textContent = info.historia;

  const musicosFiltrados = appState.perfisComunidade.filter(p =>
    (p.instrumento || '').toLowerCase().includes(info.instrumentoFiltro.toLowerCase())
  );

  const containerMusicos = document.getElementById('detalhe-inst-musicos');
  if (musicosFiltrados.length === 0) {
    containerMusicos.innerHTML = `<p class="text-muted">Nenhum músico registado com este instrumento de momento.</p>`;
  } else {
    containerMusicos.innerHTML = musicosFiltrados.map(m => `
      <div style="background:var(--cream); padding:1rem; border-radius:12px; border:1px solid var(--border-color); display:flex; align-items:center; gap:1rem;">
        <div class="perfil-mini-avatar">${m.iniciais || 'MG'}</div>
        <div style="flex:1;">
          <h4 style="margin-bottom:0.2rem;">${m.nome || m.name}</h4>
          <p class="text-muted" style="font-size:0.82rem;"><strong>Toca:</strong> ${m.instrumento}</p>
          <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
            <button type="button" class="btn-quick" style="padding:0.3rem 0.6rem; font-size:0.75rem;" onclick="abrirModalProposta(${m.id})">Contratar</button>
            <button type="button" class="btn-primary" style="padding:0.3rem 0.6rem; font-size:0.75rem;" onclick="abrirChatComUsuario(${m.id})"><i class="fa-solid fa-comment"></i> Mensagem</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  const painel = document.getElementById('painel-detalhe-instrumento');
  painel.classList.remove('hidden');
  painel.scrollIntoView({ behavior: 'smooth' });
}

function fecharDetalhesInstrumento() {
  document.getElementById('painel-detalhe-instrumento').classList.add('hidden');
}

// =====================================================
// CONTRATAÇÃO E PROPOSTAS
// =====================================================
function abrirModalProposta(artistaId) {
  const artista = appState.perfisComunidade.find(p => Number(p.id) === Number(artistaId));
  if (!artista) return;

  artistaAlvoProposta = artista;
  document.getElementById('modal-proposta-titulo').textContent = `Contratar ${artista.nome || artista.name}`;
  document.getElementById('prop-evento').value = '';
  document.getElementById('prop-data').value = '';
  document.getElementById('prop-requisitos').value = '';
  document.getElementById('prop-cache').value = '';
  document.getElementById('modal-proposta').classList.remove('hidden');
}

function fecharModalProposta() {
  document.getElementById('modal-proposta').classList.add('hidden');
  artistaAlvoProposta = null;
}

function enviarPropostaContratacao() {
  const evento = document.getElementById('prop-evento').value.trim();
  const data = document.getElementById('prop-data').value.trim();
  const requisitos = document.getElementById('prop-requisitos').value.trim();
  const cache = document.getElementById('prop-cache').value.trim();

  if (!evento || !data || !cache) {
    return showToast('Preenche os campos obrigatórios da proposta.', 'error');
  }

  const nomeArtista = artistaAlvoProposta.nome || artistaAlvoProposta.name;
  const nomeContratante = appState.currentUser ? (appState.currentUser.name || appState.currentUser.nome) : 'Contratante';

  const novaProposta = {
    id: Date.now(),
    contratante: nomeContratante,
    artistaId: Number(artistaAlvoProposta.id),
    artistaNome: nomeArtista,
    evento,
    data,
    requisitos,
    cache,
    status: 'Pendente'
  };

  appState.propostas.push(novaProposta);
  salvarEstado();
  fecharModalProposta();
  atualizarTudoNaTela();
  showToast(`Proposta enviada para ${nomeArtista}!`, 'success');
}

function responderProposta(propostaId, novoStatus) {
  const prop = appState.propostas.find(p => Number(p.id) === Number(propostaId));
  if (prop) {
    prop.status = novoStatus;
    salvarEstado();
    atualizarTudoNaTela();
    showToast(novoStatus === 'Aceita' ? 'Proposta aceita! Espetáculo confirmado.' : 'Proposta recusada.', novoStatus === 'Aceita' ? 'success' : 'info');
  }
}

// =====================================================
// AVALIAÇÕES
// =====================================================
function abrirModalAvaliacaoArtista(artistaId) {
  perfilSelecionadoParaAvaliar = Number(artistaId);
  const artista = appState.perfisComunidade.find(p => Number(p.id) === Number(artistaId));
  const nomeArt = artista ? (artista.nome || artista.name) : 'Músico';
  document.getElementById('modal-avaliar-titulo').textContent = `Avaliar ${nomeArt}`;
  document.getElementById('avaliacao-comentario').value = '';
  selecionarEstrela(5);
  document.getElementById('modal-avaliar').classList.remove('hidden');
}

function fecharModalAvaliacao() {
  document.getElementById('modal-avaliar').classList.add('hidden');
  perfilSelecionadoParaAvaliar = null;
}

function selecionarEstrela(nota) {
  notaSelecionada = nota;
  document.querySelectorAll('#star-selector i').forEach(star => {
    const val = Number(star.getAttribute('data-val'));
    star.classList.toggle('active', val <= nota);
  });
}

function confirmarAvaliacaoPerfil() {
  const perfil = appState.perfisComunidade.find(p => Number(p.id) === Number(perfilSelecionadoParaAvaliar));
  if (!perfil) return;

  const soma = (perfil.notaMedia || 5.0) * (perfil.totalAvaliacoes || 1);
  perfil.totalAvaliacoes = (perfil.totalAvaliacoes || 1) + 1;
  perfil.notaMedia = (soma + notaSelecionada) / perfil.totalAvaliacoes;

  if (appState.currentUser && Number(appState.currentUser.id) === Number(perfil.id)) {
    appState.currentUser.notaMedia = perfil.notaMedia;
    appState.currentUser.totalAvaliacoes = perfil.totalAvaliacoes;
    localStorage.setItem('usuarioLogado', JSON.stringify(appState.currentUser));
  }

  salvarEstado();
  fecharModalAvaliacao();
  atualizarTudoNaTela();
  showToast(`Avaliação enviada para ${perfil.nome || perfil.name}!`, 'success');
}

// =====================================================
// NAVEGAÇÃO E MENU LATERAL RETRÁTIL
// =====================================================
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  if (window.innerWidth <= 900) {
    sidebar.classList.toggle('mobile-open');
  } else {
    sidebar.classList.toggle('collapsed');
  }
}

function mostrarPortal() {
  document.getElementById('login-screen')?.classList.add('hidden');
  document.getElementById('login-screen')?.classList.remove('active');
  document.getElementById('cadastro-screen')?.classList.add('hidden');
  document.getElementById('app-layout')?.classList.remove('hidden');
}

function mostrarLogin() {
  document.getElementById('login-screen')?.classList.remove('hidden');
  document.getElementById('login-screen')?.classList.add('active');
  document.getElementById('cadastro-screen')?.classList.add('hidden');
  document.getElementById('app-layout')?.classList.add('hidden');
}

function quickLoginMusicon() {
  document.getElementById('email').value = 'miguel@musicon.com';
  document.getElementById('password').value = '123';
}

function toggleCadastroView() {
  const login = document.getElementById('login-screen');
  const cadastro = document.getElementById('cadastro-screen');
  login?.classList.toggle('hidden');
  login?.classList.toggle('active');
  cadastro?.classList.toggle('hidden');
  cadastro?.classList.toggle('active');
}

function logout() {
  localStorage.removeItem('usuarioLogado');
  appState.currentUser = null;
  mostrarLogin();
  showToast('Saíste da roda.', 'info');
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
  document.getElementById(`tab-${tabId}`)?.classList.add('active');

  document.querySelectorAll('#main-nav .nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  if (window.innerWidth <= 900) {
    document.getElementById('sidebar')?.classList.remove('mobile-open');
  }

  if (tabId === 'dashboard') {
    renderizarSlideHistoria(false);
    configurarArrasteHistoria();
    iniciarPassagemAutomaticaHistoria();
    renderizarVideosPagode();
  }

  if (tabId === 'atividades') {
    renderizarOficinasPartituras();
  }

  if (tabId === 'boletim') {
    renderizarTabelaPartituras();
  }

  if (tabId === 'chat') {
    renderizarListaConversas();
    if (typeof usuarioConversandoId !== 'undefined' && usuarioConversandoId) {
      renderizarMensagensChatPrivado(usuarioConversandoId);
    } else {
      document.getElementById('chat-vazio-placeholder')?.classList.remove('hidden');
      document.getElementById('chat-ativo-conteudo')?.classList.add('hidden');
    }
  }
}

function filtrarPerfis() {
  const termo = (document.getElementById('busca-perfil-input')?.value || '').toLowerCase();
  const filtrados = appState.perfisComunidade.filter(p => {
    const nome = (p.nome || p.name || '').toLowerCase();
    const inst = (p.instrumento || '').toLowerCase();
    return nome.includes(termo) || inst.includes(termo);
  });
  renderizarCardsPerfis(filtrados);
}

function renderizarCardsPerfis(lista) {
  const grid = document.getElementById('perfis-grid');
  if (!grid || !appState.currentUser) return;

  grid.innerHTML = lista.map(p => {
    const nome = p.nome || p.name || 'Batuqueiro';
    const souEu = appState.currentUser && Number(appState.currentUser.id) === Number(p.id);
    return `
      <div class="card">
        <div class="perfil-card-top">
          <div class="perfil-mini-avatar">${p.iniciais || 'MG'}</div>
          <div>
            <h3>${nome}</h3>
            <span style="font-size:0.82rem; color:var(--warning); font-weight:600;">${p.area || 'Músico'}</span>
          </div>
        </div>
        <p class="text-muted mb-2"><strong>Toca:</strong> ${p.instrumento || 'Não informado'}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
          <span class="portal-badge">${p.estilo || 'Samba'}</span>
          <span class="rating-badge"><i class="fa-solid fa-star"></i> ${(p.notaMedia || 5.0).toFixed(1)} (${p.totalAvaliacoes || 1})</span>
        </div>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
          ${!souEu ? `
            <button type="button" class="btn-quick" style="flex:1; justify-content:center;" onclick="abrirModalProposta(${p.id})">Contratar</button>
            <button type="button" class="btn-primary" style="padding:0.4rem 0.8rem; font-size:0.8rem;" onclick="abrirChatComUsuario(${p.id})"><i class="fa-solid fa-comment"></i> Mensagem</button>
          ` : `
            <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">Este é o teu perfil</span>
          `}
        </div>
      </div>
    `;
  }).join('');
}

function atualizarTudoNaTela() {
  const user = appState.currentUser;
  if (!user) return;

  const nomeUser = user.name || user.nome || 'Batuqueiro';

  if (document.getElementById('dashboard-user-name')) document.getElementById('dashboard-user-name').textContent = nomeUser;
  if (document.getElementById('perfil-nome')) document.getElementById('perfil-nome').textContent = nomeUser;
  if (document.getElementById('perfil-email')) document.getElementById('perfil-email').textContent = user.email;
  if (document.getElementById('perfil-avatar')) document.getElementById('perfil-avatar').textContent = user.initials || 'MG';
  if (document.getElementById('perfil-badge-area')) document.getElementById('perfil-badge-area').textContent = user.area || 'Músico';
  if (document.getElementById('perfil-nota-exibicao')) document.getElementById('perfil-nota-exibicao').textContent = (user.notaMedia || 5.0).toFixed(1);
  if (document.getElementById('perfil-total-avaliacoes')) document.getElementById('perfil-total-avaliacoes').textContent = user.totalAvaliacoes || 1;
  if (document.getElementById('stat-nota-geral')) document.getElementById('stat-nota-geral').textContent = (user.notaMedia || 5.0).toFixed(1);

  if (document.getElementById('edit-perfil-nome')) document.getElementById('edit-perfil-nome').value = nomeUser;
  if (document.getElementById('edit-perfil-area')) document.getElementById('edit-perfil-area').value = user.area || '';
  if (document.getElementById('edit-perfil-inst')) document.getElementById('edit-perfil-inst').value = user.instrumento || '';
  if (document.getElementById('edit-perfil-estilo')) document.getElementById('edit-perfil-estilo').value = user.estilo || '';

  const minhasPropostas = appState.propostas.filter(p => Number(p.artistaId) === Number(user.id));
  const pendentesCount = minhasPropostas.filter(p => p.status === 'Pendente').length;

  const badge = document.getElementById('badge-propostas');
  if (badge) {
    badge.textContent = pendentesCount;
    badge.classList.toggle('hidden', pendentesCount === 0);
  }
  if (document.getElementById('stat-propostas-ativas')) {
    document.getElementById('stat-propostas-ativas').textContent = minhasPropostas.length;
  }

  const gridProp = document.getElementById('propostas-grid');
  if (gridProp) {
    if (minhasPropostas.length === 0) {
      gridProp.innerHTML = `<div class="card"><p class="text-muted">Nenhuma proposta de contratação recebida de momento.</p></div>`;
    } else {
      gridProp.innerHTML = minhasPropostas.map(p => `
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
            <span class="portal-badge">Evento: ${p.evento}</span>
            <span style="font-weight:700; color:${p.status === 'Aceita' ? 'var(--success)' : p.status === 'Recusada' ? 'var(--danger)' : 'var(--warning)'};">${p.status}</span>
          </div>
          <p class="text-muted mb-2"><strong>Contratante:</strong> ${p.contratante}</p>
          <p class="text-muted mb-2"><strong>Data e Horário:</strong> ${p.data}</p>
          <p class="text-muted mb-2"><strong>Requisitos:</strong> ${p.requisitos}</p>
          <p class="text-muted mb-4"><strong>Cachê Oferecido:</strong> ${p.cache}</p>

          ${p.status === 'Pendente' ? `
            <div style="display:flex; gap:0.75rem;">
              <button type="button" class="btn-primary" style="flex:1;" onclick="responderProposta(${p.id}, 'Aceita')"><i class="fa-solid fa-check"></i> Aceitar e Tocar</button>
              <button type="button" class="btn-quick" style="flex:1; color:var(--danger); border-color:var(--danger);" onclick="responderProposta(${p.id}, 'Recusada')"><i class="fa-solid fa-xmark"></i> Recusar</button>
            </div>
          ` : `
            <p style="font-size:0.85rem; font-weight:600; color:var(--text-muted);">Proposta ${p.status.toLowerCase()} com sucesso.</p>
          `}
        </div>
      `).join('');
    }
  }

  renderizarSlideHistoria(false);
  configurarArrasteHistoria();
  renderizarVideosPagode();
  renderizarCardsPerfis(appState.perfisComunidade);
  renderizarListaConversas();
  renderizarTabelaPartituras();
  renderizarOficinasPartituras();
}

function salvarEdicaoPerfil() {
  if (!appState.currentUser) return;
  const novoNome = document.getElementById('edit-perfil-nome').value.trim();
  appState.currentUser.name = novoNome;
  appState.currentUser.nome = novoNome;
  appState.currentUser.initials = novoNome.substring(0, 2).toUpperCase();
  appState.currentUser.area = document.getElementById('edit-perfil-area').value.trim();
  appState.currentUser.instrumento = document.getElementById('edit-perfil-inst').value.trim();
  appState.currentUser.estilo = document.getElementById('edit-perfil-estilo').value.trim();

  let perfilComunidade = appState.perfisComunidade.find(p => Number(p.id) === Number(appState.currentUser.id));
  if (perfilComunidade) {
    perfilComunidade.name = novoNome;
    perfilComunidade.nome = novoNome;
    perfilComunidade.area = appState.currentUser.area;
    perfilComunidade.instrumento = appState.currentUser.instrumento;
    perfilComunidade.estilo = appState.currentUser.estilo;
  }

  localStorage.setItem('usuarioLogado', JSON.stringify(appState.currentUser));
  salvarEstado();
  atualizarTudoNaTela();
  showToast('Perfil atualizado com sucesso!', 'success');
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('musicon-theme', isDark ? 'dark' : 'light');
}

function aplicarTemaSalvo() {
  if (localStorage.getItem('musicon-theme') === 'dark') document.documentElement.classList.add('dark');
}

function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span>${msg}</span>`;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}