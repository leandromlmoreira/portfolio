export type ProfileLink = {
  label: string;
  handle: string;
  url: string;
  icon: "code" | "globe";
};

export const profile = {
  firstName: "Leandro",
  lastName: "Macedo",
  initials: "LM",
  role: "Full Stack & AI Engineer",
  location: "Iguaba Grande, RJ · Brasil",
  intro:
    "Construo produtos para web e mobile com TypeScript, React e React Native, e agentes de IA com MCP. Cada projeto aqui está no ar e tem o código aberto.",
  handle: "@leandromlmoreira",
};

export const links: ProfileLink[] = [
  {
    label: "GitHub",
    handle: "github.com/leandromlmoreira",
    url: "https://github.com/leandromlmoreira",
    icon: "code",
  },
  {
    label: "Site",
    handle: "leandromaiscedo.dev",
    url: "https://www.leandromaiscedo.dev",
    icon: "globe",
  },
];

export const sourceUrl = "https://github.com/leandromlmoreira/react-native-portfolio";
