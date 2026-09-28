import type { ImageSourcePropType } from "react-native";

export type Project = {
  id: string;
  name: string;
  kicker: string;
  tagline: string;
  summary: string;
  highlights: string[];
  stack: string[];
  repo?: string;
  live: string;
  accent: string;
  shot: ImageSourcePropType;
  shotMobile: ImageSourcePropType;
  featured?: boolean;
};

const repo = (name: string) => `https://github.com/leandromlmoreira/${name}`;
const pages = (name: string) => `https://leandromlmoreira.github.io/${name}/`;
const vercel = (name: string) => `https://${name}-lm.vercel.app`;

export const projects: Project[] = [
  {
    id: "commit-city",
    name: "Commit City",
    kicker: "3D · WebGL",
    tagline:
      "Seu último ano no GitHub vira uma cidade 3D à beira-mar: cada dia é um lote, e dia de muito commit vira arranha-céu.",
    summary:
      "Three.js com shaders próprios sobre o calendário de contribuições e a API do GitHub. A cidade é erguida como num city builder, com carros, pedestres e pássaros animados na GPU.",
    highlights: [
      "Obra em fases: tapume, andaime e guindaste, fachada subindo andar por andar e acabamento com mola.",
      "Janelas, reflexo do céu no vidro e luz de rua em shader próprio, com quatro horários e o botão Agora.",
      "Tudo instanciado em cerca de 30 draw calls, com qualidade adaptativa que cai sozinha se os quadros pesarem.",
      "Postal PNG 1200x630 para compartilhar, link ?u=usuario e testes Vitest e Playwright com as APIs simuladas.",
    ],
    stack: ["TypeScript", "Three.js", "WebGL", "Vite", "Vitest", "Playwright"],
    live: vercel("commit-city"),
    accent: "#3F9D72",
    shot: require("../../assets/projects/commit-city.jpg"),
    shotMobile: require("../../assets/projects/commit-city-mobile.jpg"),
    featured: true,
  },
  {
    id: "recall",
    name: "Recall",
    kicker: "IA · Servidor MCP",
    tagline:
      "Memória persistente para agentes de IA: o agente guarda o que aprende, busca nas próximas conversas e esquece o que ninguém usa.",
    summary:
      "Servidor MCP em TypeScript sobre o SQLite nativo do Node, com busca híbrida BM25 + embeddings locais e decaimento por meia-vida. O painel mostra as memórias como um conectoma em 2D e um cérebro de partículas em 3D.",
    highlights: [
      "Seis ferramentas MCP: remember, recall, forget, link, timeline e reinforce.",
      "Ranking que pesa texto, sentido e retenção, e rebaixa o fato que foi substituído por outro.",
      "Conectoma com feixes de fibras em canvas e cérebro 3D em shader próprio, carregado sob demanda.",
      "Integração testada com um cliente MCP real por stdio, migrações versionadas e e2e no painel.",
    ],
    stack: ["TypeScript", "MCP", "SQLite", "Node.js", "Three.js", "Vitest"],
    live: vercel("recall-mcp"),
    accent: "#3FC6E8",
    shot: require("../../assets/projects/recall.jpg"),
    shotMobile: require("../../assets/projects/recall-mobile.jpg"),
    featured: true,
  },
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
    live: `${vercel("vela-banco")}/banco-digital/`,
    accent: "#EE6A43",
    shot: require("../../assets/projects/vela.jpg"),
    shotMobile: require("../../assets/projects/vela-mobile.jpg"),
    featured: true,
  },
  {
    id: "spring-anatomy",
    name: "Spring Anatomy",
    kicker: "Java · Spring Boot",
    tagline:
      "Oito padrões de projeto dissecados dentro de uma API Spring Boot real, com diagrama animado, o código ao lado e uma demo que roda no navegador.",
    summary:
      "API de clientes com H2, consulta ao ViaCEP e notificações por e-mail, SMS e push, coberta por 41 testes JUnit. O explorador importa os .java do repositório e anima cada chamada.",
    highlights: [
      "Facade, Builder, Strategy, Observer, Factory, Adapter, Template Method e Singleton no mesmo sistema.",
      "Diagrama de classes em SVG que acende as setas enquanto o código roda.",
      "A linha do método Java em execução fica destacada a cada passo.",
      "Demos com estado compartilhado: o cliente cadastrado na Facade aparece no Observer e na Factory.",
    ],
    stack: ["Java", "Spring Boot", "JUnit", "H2", "TypeScript", "Vite"],
    repo: repo("spring-anatomy"),
    live: pages("spring-anatomy"),
    accent: "#A8D63E",
    shot: require("../../assets/projects/spring-anatomy.jpg"),
    shotMobile: require("../../assets/projects/spring-anatomy-mobile.jpg"),
    featured: true,
  },
  {
    id: "caixa-alta",
    name: "Caixa Alta",
    kicker: "Finanças pessoais · PWA",
    tagline:
      "O jornal diário do seu dinheiro: manchete do dia, cotações das suas categorias, previsão de saldo e orçamentos que avisam antes do estouro.",
    summary:
      "React 19 + TypeScript rodando inteiro no navegador, sem conta e sem servidor. A regra de negócio fica em funções puras testadas e os gráficos são desenhados à mão em SVG.",
    highlights: [
      "Manchetes automáticas que comparam o mês atual com o mesmo ponto do mês anterior.",
      "Orçamentos com projeção do fechamento e dia provável do estouro, e metas com data prevista.",
      "Importação de extrato CSV e OFX com categorização que aprende com as correções.",
      "Layout próprio no celular: barra inferior, folhas que fecham arrastando e deslizar para apagar.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion", "Vitest"],
    live: vercel("caixa-alta"),
    accent: "#E4513A",
    shot: require("../../assets/projects/caixa-alta.jpg"),
    shotMobile: require("../../assets/projects/caixa-alta-mobile.jpg"),
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
    live: vercel("lastro"),
    accent: "#C7A15C",
    shot: require("../../assets/projects/lastro.jpg"),
    shotMobile: require("../../assets/projects/lastro-mobile.jpg"),
    featured: true,
  },
  {
    id: "prompt-atlas",
    name: "Prompt Atlas",
    kicker: "IA · Explorador de corpus",
    tagline:
      "Um mapa navegável dos system prompts de assistentes de IA: leia, busque, compare versões e meça quanto cada texto insiste em NEVER e ALWAYS.",
    summary:
      "React 19 + TypeScript, tudo no navegador: uma chamada à API do GitHub traz a árvore do corpus e cada texto chega sob demanda, com cache em IndexedDB pela sha do arquivo.",
    highlights: [
      "Treemap squarified colorido por tipo ou pela densidade de ênfase de cada arquivo.",
      "Esquemas de ferramentas em sete formatos viram cards com parâmetros, tipos e obrigatórios.",
      "Comparação com diff de Myers em espaço linear e destaque das palavras que mudaram.",
      "Busca full-text e link permanente para cada arquivo, linha e comparação.",
    ],
    stack: ["React", "TypeScript", "Vite", "IndexedDB", "Vitest", "Playwright"],
    live: vercel("prompt-atlas"),
    accent: "#E8784F",
    shot: require("../../assets/projects/prompt-atlas.jpg"),
    shotMobile: require("../../assets/projects/prompt-atlas-mobile.jpg"),
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
  },
  {
    id: "vaga-match",
    name: "Vaga Match",
    kicker: "Extensão Chrome · Currículo",
    tagline:
      "Seu currículo lido contra a vaga: nota de 0 a 100, o que você tem, o que falta e como reescrever seus tópicos com as palavras da vaga.",
    summary:
      "Extensão Manifest V3 com um motor em TypeScript puro que roda no navegador: o PDF é lido com pdf.js e nada vai para servidor. O site de demonstração usa a mesma interface do popup.",
    highlights: [
      "122 habilidades e mais de 500 formas de escrever, com deduções como Next.js para React.",
      "Nota com a conta aberta: habilidades, diferenciais, senioridade e inglês.",
      "Sugestões de reescrita que nunca citam uma habilidade que o currículo não tem.",
      "Lê vagas do LinkedIn, Gupy, Indeed e Vagas.com; em outros sites, basta selecionar o texto.",
    ],
    stack: ["TypeScript", "Chrome Extension", "pdf.js", "Vite", "Vitest", "Playwright"],
    repo: repo("vaga-match"),
    live: pages("vaga-match"),
    accent: "#8DB35E",
    shot: require("../../assets/projects/vaga-match.jpg"),
    shotMobile: require("../../assets/projects/vaga-match-mobile.jpg"),
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
    live: vercel("herolevel"),
    accent: "#9B6BE3",
    shot: require("../../assets/projects/forja.jpg"),
    shotMobile: require("../../assets/projects/forja-mobile.jpg"),
  },
  {
    id: "bat-sinal",
    name: "Bat-Sinal",
    kicker: "App mobile · Expo",
    tagline:
      "Central do GCPD em duas áreas: um toque acende o holofote nas nuvens de Gotham e, ao lado, o BatPass gera senhas fortes.",
    summary:
      "App React Native com a cena de Gotham desenhada em SVG e o BatPass, o gerador de senhas que virou a segunda área do app (link direto em #batpass), com aleatoriedade criptográfica e entropia real testadas no runner nativo do Node.",
    highlights: [
      "Skyline com parallax, chuva em duas profundidades e ignição com estalo antes de projetar o símbolo.",
      "Terminal do GCPD com log de eventos, status ao vivo e contador de chamados animado.",
      "BatPass: Web Crypto com amostragem por rejeição, força em bits de entropia e histórico mascarado no aparelho.",
      "Transição que mergulha no morcego projetado entre as áreas, foco no teclado e respeito a reduzir movimento.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "SVG"],
    repo: repo("bat-sinal"),
    live: pages("bat-sinal"),
    accent: "#F0B429",
    shot: require("../../assets/projects/bat-sinal.jpg"),
    shotMobile: require("../../assets/projects/bat-sinal-mobile.jpg"),
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
    repo: repo("toro"),
    live: pages("toro"),
    accent: "#D4B21C",
    shot: require("../../assets/projects/toro.jpg"),
    shotMobile: require("../../assets/projects/toro-mobile.jpg"),
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
];

export const featuredProjects = projects.filter((project) => project.featured);

export const findProject = (id: string) => projects.find((project) => project.id === id);

