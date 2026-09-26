# 📱 App de Portfólio

Desafio de projeto **"Criando seu App de Portfólio"** da trilha
[Formação React Native Developer](https://web.dio.me/track/formacao-react-native-developer)
(DIO).

## ⚠️ Antes de usar: personalize os seus dados

Todo o conteúdo pessoal (nome, foto, links, habilidades) fica em um único
arquivo: **`src/data/profile.ts`**. Abra esse arquivo e troque:

- `avatarUri`: hoje aponta para um avatar gerado a partir das iniciais
  (via [DiceBear](https://www.dicebear.com/)), porque este README não tem
  acesso à sua foto real. Troque pela URL da sua foto, ou use
  `require("../../assets/sua-foto.png")`.
- `links`: troque pelos seus links reais (LinkedIn, GitHub, e-mail).
- `skills`: sua árvore de habilidades e o nível de cada uma (0 a 1).

## O que o projeto faz

Duas telas, conforme o briefing do desafio:

- **Main Screen**: foto, nome e botões de link (LinkedIn, GitHub, e-mail),
  que abrem no navegador/app correspondente via `Linking.openURL`.
- **Skill Screen**: foto, nome e uma "árvore de habilidades" com barra de
  progresso para cada uma.

Navegação entre as telas com **Stack Navigation** (`@react-navigation/native-stack`),
incluindo botão de voltar automático no header.

## Tecnologias

- React Native + Expo (SDK 57), TypeScript
- `@react-navigation/native` + `@react-navigation/native-stack`

## Como executar

```bash
npm install
npm run web      # mais rápido para testar (sem emulador)
npm run android   # ou ios, com Expo Go / emulador
```

## Como testei

Rodei `npm run web`: conferi a Main Screen com os três links, naveguei para
a Skill Screen pelo botão "Ver minhas habilidades" e voltei pelo botão de
voltar do header (gerado automaticamente pelo Stack Navigator). Não testei
em dispositivo físico Android/iOS, nem cliquei de fato nos links (abririam
janelas externas).

## Estrutura

```
src/
├── data/profile.ts       # ⚠️ seus dados pessoais ficam aqui
├── navigation/types.ts   # tipagem das rotas do Stack
└── screens/
    ├── MainScreen.tsx
    └── SkillScreen.tsx
App.tsx                   # NavigationContainer + Stack.Navigator
```

## O que aprendi

- Separar **dados** (`profile.ts`) de **apresentação** (screens): facilita
  reaproveitar o mesmo layout com dados diferentes e deixa claro o que
  precisa ser personalizado.
- `createNativeStackNavigator<RootStackParamList>()` com um tipo próprio
  (`RootStackParamList`) para ter autocomplete e checagem de tipos nas rotas
  (`navigation.navigate("Skills")` é validado em tempo de compilação).
- `Linking.openURL` para abrir links externos (redes sociais, e-mail) a
  partir de um app React Native.
- `headerShadowVisible: false` e `screenOptions` no `Stack.Navigator` para
  customizar a aparência do header globalmente, sem repetir em cada tela.
