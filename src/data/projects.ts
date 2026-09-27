export type CoverKind = "beacon" | "sails" | "schema" | "terminal" | "halftone" | "summit";

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
  cover: CoverKind;
};

const repo = (name: string) => `https://github.com/leandromlmoreira/${name}`;
const pages = (name: string) => `https://leandromlmoreira.github.io/${name}/`;

export const projects: Project[] = [
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
    accent: "#FFC247",
    cover: "beacon",
  },
  {
    id: "banco-digital",
    name: "Vela",
    kicker: "Fintech · Monorepo",
    tagline:
      "Um banco digital fictício de ponta a ponta: site, internet banking, painel de clientes, console de desenvolvedores e API.",
    summary:
      "Suíte completa num único monorepo TypeScript, com a mesma identidade visual nos quatro fronts e um domínio bancário compartilhado entre eles.",
    highlights: [
      "Internet Banking usa as classes reais Account e Bank do pacote @vela/core, sem duplicar regra.",
      "Transferência em duas etapas com confirmação, extrato com filtros e gráfico de entradas e saídas.",
      "Logo e cartão gerados como SVG por funções puras e reaproveitados em React e TypeScript puro.",
      "API REST em Express + TypeScript com testes de serviço e e2e, publicada na Vercel.",
    ],
    stack: ["TypeScript", "React", "Vite", "Express", "Jest", "styled-components"],
    repo: repo("banco-digital"),
    live: pages("banco-digital"),
    accent: "#FF6A3D",
    cover: "sails",
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
      "Tradução de MySQL para SQLite na hora, sem alterar os scripts originais.",
    ],
    stack: ["MySQL", "SQLite", "TypeScript", "Preact", "Vite", "CodeMirror"],
    repo: repo("sql-lab"),
    live: pages("sql-lab"),
    accent: "#3FE0C5",
    cover: "schema",
  },
  {
    id: "javalab",
    name: "JavaLab",
    kicker: "Java · IDE no navegador",
    tagline:
      "Quatro aplicações em Java puro abertas numa IDE que roda no navegador: o código real ao lado de um porte que você executa ali mesmo.",
    summary:
      "Sudoku, Jogo da Memória, Calculadora e Board de Tarefas em Java, com uma IDE retrô que mostra os arquivos do repositório e roda cada main() num painel Run.",
    highlights: [
      "Sudoku com gerador por backtracking, três dificuldades e versão em Swing.",
      "Jogo da Memória com estado salvo em JSON e YAML via Jackson.",
      "Board de Tarefas estilo kanban persistido em MySQL via JDBC.",
      "Explorador com a árvore real do repositório, abas, destaque de sintaxe e efeito CRT.",
    ],
    stack: ["Java", "Maven", "Swing", "MySQL", "TypeScript", "Vite"],
    repo: repo("javalab"),
    live: pages("javalab"),
    accent: "#7CFF9B",
    cover: "terminal",
  },
  {
    id: "spiderverse",
    name: "Aranhaverso",
    kicker: "Web interativa · Quadrinhos",
    tagline:
      "Uma revista em quadrinhos interativa: troque de universo com um glitch dimensional e abra a edição de cada herói.",
    summary:
      "Carrossel do multiverso com parallax em camadas e transições cinematográficas, exportado de forma estática com Next.js.",
    highlights: [
      "Carrossel com arrasto, teclado e índice de universos, com os vizinhos desfocados em profundidade.",
      "Glitch que desalinha as cores como uma impressão CMYK fora de registro a cada troca.",
      "Página de cada herói em painéis de quadrinho que se desenham na tela.",
      "Foco visível, anúncio para leitores de tela e layout pensado para 375 px.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Framer Motion", "Sass"],
    repo: repo("spiderverse"),
    live: pages("spiderverse"),
    accent: "#FF3D7F",
    cover: "halftone",
  },
  {
    id: "ranktier",
    name: "RankTier",
    kicker: "Jogo pixel art · Lógica",
    tagline:
      "Um joguinho pixel art em que cada vitória é um passo montanha acima, do Ferro na vila até o templo Imortal no topo.",
    summary:
      "A patente é calculada pela biblioteca JavaScript do repositório, testada com o runner nativo do Node, e toda a arte do jogo é gerada em canvas.",
    highlights: [
      "Montanha com parallax em camadas e um ciclo de luz do entardecer ao amanhecer.",
      "Personagem e emblemas desenhados pixel a pixel em canvas, sem imagens externas.",
      "A patente vem da função real classifyHeroSwitch, importada pelo front sem duplicar a regra.",
      "Trilha 8-bit com WebAudio, progresso salvo e link compartilhável com o placar.",
    ],
    stack: ["TypeScript", "JavaScript", "Vite", "Canvas", "WebAudio", "Node.js"],
    repo: repo("ranktier"),
    live: pages("ranktier"),
    accent: "#FFB23F",
    cover: "summit",
  },
];

export const findProject = (id: string) => projects.find((project) => project.id === id);
