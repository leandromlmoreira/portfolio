import type { ImageSourcePropType } from "react-native";

export type Project = {
  id: string;
  name: string;
  kicker: string;
  tagline: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repo: string;
  live: string;
  accent: string;
  shot: ImageSourcePropType;
  shotMobile: ImageSourcePropType;
  featured?: boolean;
};

const repo = (name: string) => `https://github.com/leandromlmoreira/${name}`;
const pages = (name: string) => `https://leandromlmoreira.github.io/${name}/`;

export const projects: Project[] = [
  {
    id: "vela",
    name: "Vela",
    kicker: "Fintech · Monorepo",
    tagline:
      "Um banco digital fictício de ponta a ponta: site, internet banking, painel de clientes, console de desenvolvedores e API.",
    summary:
      "Suíte completa num único monorepo TypeScript, com a mesma identidade visual nos quatro fronts e um domínio bancário compartilhado entre eles.",
    highlights: [
      "Internet Banking com Pix, boleto, cartões, caixinhas e extrato por dia, todo sobre as classes reais de @vela/core.",
      "Site de produto com cartão em SVG flutuando, simulador de rendimento e bento grid de benefícios.",
      "Painel interno de clientes com busca, filtros e ordenação guardados na URL.",
      "API REST em Express + TypeScript com testes de serviço e e2e, publicada na Vercel.",
    ],
    stack: ["TypeScript", "React", "Vite", "Express", "Jest", "styled-components"],
    repo: repo("banco-digital"),
    live: pages("banco-digital"),
    accent: "#EE6A43",
    shot: require("../../assets/projects/vela.jpg"),
    shotMobile: require("../../assets/projects/vela-mobile.jpg"),
    featured: true,
  },
  {
    id: "lastro",
    name: "Lastro",
    kicker: "API · Private banking",
    tagline: "Um private banking preto e dourado sobre uma API FastAPI assíncrona com autenticação JWT.",
    summary:
      "API de cadastro, login, depósitos, saques e extrato em FastAPI com SQLAlchemy assíncrono, testada com pytest no GitHub Actions. O front em Vite + TypeScript consome a API publicada e tem um modo demonstração.",
    highlights: [
      "Rotas de conta protegidas por token Bearer, com respostas 400, 401 e 422 bem definidas.",
      "Gráfico de evolução do saldo em SVG próprio, com cursor e períodos de 7, 30 e 90 dias.",
      "Cartão metálico com reflexo que segue o mouse e verso com tarja e assinatura.",
      "Extrato por categoria, folha inferior no celular e skeletons dourados ao carregar.",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "pytest", "TypeScript", "Vite", "Docker"],
    repo: repo("banking-api-fastapi"),
    live: pages("banking-api-fastapi"),
    accent: "#C7A15C",
    shot: require("../../assets/projects/lastro.jpg"),
    shotMobile: require("../../assets/projects/lastro-mobile.jpg"),
    featured: true,
  },
  {
    id: "aranhaverso",
    name: "Aranhaverso",
    kicker: "Web interativa · Quadrinhos",
    tagline:
      "Uma revista em quadrinhos interativa: troque de universo com um glitch dimensional e abra a edição de cada herói.",
    summary:
      "Palco do multiverso com parallax, arrasto e transições cinematográficas, exportado de forma estática com Next.js.",
    highlights: [
      "Abertura em retícula com as chapas ciano, magenta e amarelo entrando em registro.",
      "Glitch que fatia o herói e desalinha as cores como impressão fora de registro.",
      "Edição de cada herói em painéis, com carta de poder holográfica e virada de página em 3D.",
      "Teste \"Qual Aranha é você?\", arrasto com vibração no celular e navegação por teclado.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Framer Motion", "Sass", "Canvas"],
    repo: repo("spiderverse"),
    live: pages("spiderverse"),
    accent: "#E0394D",
    shot: require("../../assets/projects/aranhaverso.jpg"),
    shotMobile: require("../../assets/projects/aranhaverso-mobile.jpg"),
    featured: true,
  },
  {
    id: "forja",
    name: "Forja de Heróis",
    kicker: "HeroLevel · Pixel art",
    tagline:
      "Digite o nome e o XP do herói e veja uma carta colecionável ser forjada na hora, com personagem em pixel art e moldura do Ferro ao Radiante.",
    summary:
      "HTML, CSS e JavaScript puro, sem build. Um motor de pixel art próprio desenha 14 arquétipos, e o nível vem da função real classificarNivelSwitch, a mesma dos testes.",
    highlights: [
      "O nome sorteia de forma determinística arquétipo, paleta, arma, acessório e cenário.",
      "Forja animada: martelo na bigorna, faíscas em Canvas e a carta nova esfriando.",
      "Raridade de Comum a Mítica e efeito holográfico que responde ao mouse e à inclinação do celular.",
      "Coleção salva no navegador e download da carta em PNG sem suavização.",
    ],
    stack: ["JavaScript", "SVG", "Canvas", "Node.js"],
    repo: repo("herolevel"),
    live: pages("herolevel"),
    accent: "#9B6BE3",
    shot: require("../../assets/projects/forja.jpg"),
    shotMobile: require("../../assets/projects/forja-mobile.jpg"),
    featured: true,
  },
  {
    id: "bat-sinal",
    name: "Bat-Sinal",
    kicker: "App mobile · Expo",
    tagline:
      "Um toque acende o holofote no telhado e projeta o sinal nas nuvens de Gotham, no celular e na web.",
    summary:
      "Central de chamados do GCPD em React Native. A cena inteira, do céu à chuva e ao feixe de luz, é desenhada em SVG e animada com a API Animated no driver nativo.",
    highlights: [
      "Skyline em três camadas com parallax, janelas que acendem e apagam e chuva em duas profundidades.",
      "Ignição com estalo: o feixe sobe gaguejando como um arco de carbono antes de projetar o símbolo.",
      "Terminal do GCPD com log de eventos, status ao vivo e contador de chamados animado.",
      "Vibração ao acionar, foco no teclado na web e respeito a reduzir movimento.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "SVG"],
    repo: repo("bat-sinal"),
    live: pages("bat-sinal"),
    accent: "#F0B429",
    shot: require("../../assets/projects/bat-sinal.jpg"),
    shotMobile: require("../../assets/projects/bat-sinal-mobile.jpg"),
    featured: true,
  },
  {
    id: "toro",
    name: "Toro",
    kicker: "App mobile · Expo Router",
    tagline:
      "Showroom de supercarros italianos: percorra o acervo, abra a ficha de cada modelo e monte a sua garagem.",
    summary:
      "React Native com Expo Router e rotas de verdade na web. Os modelos vêm de uma API HTTP via axios e a garagem fica salva no aparelho.",
    highlights: [
      "Busca por nome ou ano, filtro por era e quatro ordenações sobre a API ao vivo.",
      "Ficha com galeria de três cenas, ficha técnica e posição no ranking de preço.",
      "Garagem com quantidade, subtotal por modelo e valor total calculados na hora.",
      "Esqueleto de carregamento, acervo salvo quando a API falha e rota inexistente tratada.",
    ],
    stack: ["React Native", "Expo", "Expo Router", "TypeScript", "axios", "SVG"],
    repo: repo("lamborghini"),
    live: pages("lamborghini"),
    accent: "#D4B21C",
    shot: require("../../assets/projects/toro.jpg"),
    shotMobile: require("../../assets/projects/toro-mobile.jpg"),
  },
  {
    id: "tomada",
    name: "Tomada",
    kicker: "App mobile · Câmera",
    tagline: "Estúdio de vídeo de bolso: grave com cronômetro e limite, reveja no player e organize tudo num rolo local.",
    summary:
      "No aparelho usa expo-camera e expo-video; na web, a webcam via MediaRecorder ou um modo demonstração que grava uma cena gerada num canvas.",
    highlights: [
      "Luz de REC pulsando, timecode com quadros e anel de progresso até o limite escolhido.",
      "Rolo de tomadas numeradas com pôster em SVG, salvo entre sessões.",
      "Tela de permissões dedicada para câmera, microfone e galeria.",
      "Implementações nativa e web separadas pela resolução de arquivos do Metro.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "MediaRecorder", "IndexedDB", "SVG"],
    repo: repo("video-capture"),
    live: pages("video-capture"),
    accent: "#D9608C",
    shot: require("../../assets/projects/tomada.jpg"),
    shotMobile: require("../../assets/projects/tomada-mobile.jpg"),
  },
  {
    id: "sql-lab",
    name: "SQL Lab",
    kicker: "Banco de dados · Playground",
    tagline:
      "Modelagem e SQL de dois domínios de negócio, do diagrama conceitual ao backup, com um playground que roda os scripts no navegador.",
    summary:
      "E-commerce e oficina mecânica modelados do EER ao DDL, com índices, views, permissões, triggers, transações e backup validados contra MySQL 8.4.",
    highlights: [
      "Três bancos montados em memória a partir dos schema.sql e seed.sql do próprio repositório.",
      "Editor com destaque de sintaxe, autocomplete e Ctrl+Enter; grade com ordenação e tempo de execução.",
      "Diagrama ER interativo em SVG, com arrastar, zoom e destaque das chaves estrangeiras.",
      "SQLite compilado para WebAssembly, sem alterar os scripts originais em MySQL.",
    ],
    stack: ["MySQL", "SQLite", "TypeScript", "Preact", "Vite", "CodeMirror"],
    repo: repo("sql-lab"),
    live: pages("sql-lab"),
    accent: "#2FB5A3",
    shot: require("../../assets/projects/sql-lab.jpg"),
    shotMobile: require("../../assets/projects/sql-lab-mobile.jpg"),
  },
  {
    id: "javalab",
    name: "JavaLab",
    kicker: "Java · IDE no navegador",
    tagline:
      "Quatro aplicações em Java puro abertas numa IDE que roda no navegador: o código real ao lado de um porte que você executa ali mesmo.",
    summary:
      "Sudoku, Jogo da Memória, Calculadora e Board de Tarefas em Java, com uma IDE que mostra os arquivos do repositório e roda cada main() num painel Run.",
    highlights: [
      "Sudoku com gerador, três dificuldades e versão em Swing.",
      "Jogo da Memória com estado salvo em JSON e YAML via Jackson.",
      "Board de Tarefas estilo kanban persistido em MySQL via JDBC.",
      "Explorador com a árvore real do repositório, abas e destaque de sintaxe.",
    ],
    stack: ["Java", "Maven", "Swing", "MySQL", "TypeScript", "Vite"],
    repo: repo("javalab"),
    live: pages("javalab"),
    accent: "#5AA86B",
    shot: require("../../assets/projects/javalab.jpg"),
    shotMobile: require("../../assets/projects/javalab-mobile.jpg"),
  },
  {
    id: "ranktier",
    name: "RankTier",
    kicker: "Jogo pixel art · RPG",
    tagline:
      "Um RPG pixel art de duelos rápidos: suba a montanha do Ferro ao Imortal e ganhe um equipamento a cada patente.",
    summary:
      "A patente é calculada pela função classifyHeroSwitch da biblioteca JavaScript do repositório, testada com o runner nativo do Node. Toda a arte é desenhada em Canvas.",
    highlights: [
      "Duelos por turnos com timing: pare o ponteiro no alvo para um golpe perfeito.",
      "Dificuldade crescente e uma história em sete capítulos entre as patentes.",
      "Equipamentos que aparecem no sprite e mudam os atributos do herói.",
      "Trilha e efeitos 8-bit gerados na hora com WebAudio e progresso salvo no navegador.",
    ],
    stack: ["TypeScript", "JavaScript", "Vite", "Canvas", "WebAudio", "Node.js"],
    repo: repo("ranktier"),
    live: pages("ranktier"),
    accent: "#4E9BD8",
    shot: require("../../assets/projects/ranktier.jpg"),
    shotMobile: require("../../assets/projects/ranktier-mobile.jpg"),
  },
  {
    id: "batpass",
    name: "BatPass",
    kicker: "App mobile · Segurança",
    tagline:
      "Gerador de senhas com força medida em bits de entropia, aleatoriedade criptográfica e histórico que não sai do aparelho.",
    summary:
      "React Native com expo-crypto e amostragem por rejeição, sem Math.random. As regras de geração e entropia são puras e testadas com o runner nativo do Node.",
    highlights: [
      "Comprimento de 8 a 64, tipos de caractere e opção de evitar caracteres ambíguos.",
      "Cada tipo ativo aparece ao menos uma vez, com embaralhamento Fisher-Yates.",
      "Medidor de força com entropia real e estimativa de tempo de força bruta.",
      "Histórico das últimas senhas copiadas, mascarado e salvo localmente.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "SVG"],
    repo: repo("bat-pass"),
    live: pages("bat-pass"),
    accent: "#8C93A6",
    shot: require("../../assets/projects/batpass.jpg"),
    shotMobile: require("../../assets/projects/batpass-mobile.jpg"),
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const findProject = (id: string) => projects.find((project) => project.id === id);

export const liveHost = (project: Project) => project.live.replace(/^https:\/\//, "").replace(/\/$/, "");
