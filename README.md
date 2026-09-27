# Leandro Macedo · Portfólio

Meu portfólio em forma de app, feito em React Native + Expo: os projetos que estão no ar, filtros por tecnologia, detalhes de cada um e as ferramentas com que trabalho, no celular e na web.

**[Ver ao vivo →](https://leandromlmoreira.github.io/react-native-portfolio/)**

![Navegação no celular: lista de projetos, filtro por MySQL, detalhe do SQL Lab e skills](docs/preview.gif)

<p>
  <img src="docs/preview.png" alt="Versão web no desktop: apresentação à esquerda e o app rodando dentro de um aparelho" width="68%" />
  <img src="docs/preview-mobile.png" alt="Tela inicial no celular" width="28%" />
</p>

<p>
  <img src="docs/preview-filtro.png" alt="Lista de projetos filtrada por MySQL" width="32%" />
  <img src="docs/preview-projeto.png" alt="Detalhe do projeto Aranhaverso" width="32%" />
  <img src="docs/preview-skills.png" alt="Tela de skills" width="32%" />
</p>

## Funcionalidades

- **Início.** Nome, função, localização, números tirados dos próprios dados (projetos no ar, tecnologias usadas), carrossel de projetos em destaque e links para o GitHub e o site.
- **Projetos com filtro por stack.** Os filtros são gerados a partir das tecnologias dos projetos, com a contagem de cada uma. Tocar numa tecnologia de novo volta para "Todos".
- **Detalhe do projeto.** Capa ilustrada, descrição, destaques, stack e botões "Ver ao vivo" e "Código", que abrem a demo e o repositório com `Linking`. No fim, atalho para o próximo projeto.
- **Skills sem porcentagem inventada.** Cada tecnologia mostra em quantos projetos aparece, com a cor de cada um; tocar leva à lista já filtrada.
- **Identidade própria.** Monograma, capas dos seis projetos e ícones desenhados em SVG no próprio código, cada capa com a paleta do projeto que representa. Tipografia Syne, Manrope e JetBrains Mono.
- **Web no desktop.** Em telas largas, o app roda dentro de um aparelho ao lado de uma apresentação; os projetos listados ali abrem direto no aparelho.
- **Detalhes de produto.** Entrada suave das seções com curva de easing própria, botões que afundam ao toque, estados de hover e foco na web e respeito a "reduzir movimento".

## Projetos no app

| Projeto | O que é | Demo |
| --- | --- | --- |
| [Bat-Sinal](https://github.com/leandromlmoreira/bat-sinal) | App mobile em React Native com a cena de Gotham desenhada em SVG | [ao vivo](https://leandromlmoreira.github.io/bat-sinal/) |
| [Vela](https://github.com/leandromlmoreira/banco-digital) | Banco digital fictício: site, internet banking, painel, console e API | [ao vivo](https://leandromlmoreira.github.io/banco-digital/) |
| [SQL Lab](https://github.com/leandromlmoreira/sql-lab) | Modelagem e SQL com playground que roda os scripts no navegador | [ao vivo](https://leandromlmoreira.github.io/sql-lab/) |
| [JavaLab](https://github.com/leandromlmoreira/javalab) | Apps em Java abertos numa IDE que roda no navegador | [ao vivo](https://leandromlmoreira.github.io/javalab/) |
| [Aranhaverso](https://github.com/leandromlmoreira/spiderverse) | Revista em quadrinhos interativa com glitch dimensional | [ao vivo](https://leandromlmoreira.github.io/spiderverse/) |
| [RankTier](https://github.com/leandromlmoreira/ranktier) | Jogo pixel art sobre uma biblioteca de patentes em JavaScript | [ao vivo](https://leandromlmoreira.github.io/ranktier/) |

Os textos de cada projeto ficam em [`src/data/projects.ts`](src/data/projects.ts); perfil e links em [`src/data/profile.ts`](src/data/profile.ts); grupos de skills em [`src/data/skills.ts`](src/data/skills.ts).

## Stack

- [Expo](https://docs.expo.dev/) SDK 57 + React Native 0.86, TypeScript
- React Navigation com Native Stack (`Home`, `Projects`, `Project`, `Skills`)
- [react-native-svg](https://github.com/software-mansion/react-native-svg) para capas, monograma, ícones e brilhos de fundo
- API `Animated` com driver nativo no celular
- `expo-font` + `@expo-google-fonts` (Syne, Manrope, JetBrains Mono)
- Deploy da versão web no GitHub Pages via GitHub Actions

## Como rodar

```bash
git clone https://github.com/leandromlmoreira/react-native-portfolio.git
cd react-native-portfolio
npm install
npm start
```

Escaneie o QR code com o Expo Go ou abra direto numa plataforma:

```bash
npm run web       # navegador
npm run android   # emulador ou dispositivo Android
npm run ios       # simulador ou dispositivo iOS
```

## Qualidade e deploy

```bash
npm run typecheck   # tsc --noEmit
npm run build       # exporta a versão web estática para dist/
```

A cada push na `main`, o workflow [`deploy-pages.yml`](.github/workflows/deploy-pages.yml) checa os tipos, exporta a web com `baseUrl` `/react-native-portfolio` (definido no `app.json`) e publica no GitHub Pages.

## Estrutura

```
src/
├── data/          perfil, projetos e grupos de skills
├── lib/           contagem e filtro por stack, abertura de links
├── navigation/    Native Stack e tipos das rotas
├── screens/       Home, Projects, Project, Skills
├── components/    cartões, chips, botões, palco do desktop
│   └── covers/    capas em SVG de cada projeto
├── hooks/         reduzir movimento e ids únicos para SVG
└── theme/         cores, fontes, espaçamentos e curvas
```

---

<sub>Nasceu do desafio "Criando seu App de Portfólio" da trilha Formação React Native Developer da DIO.</sub>
