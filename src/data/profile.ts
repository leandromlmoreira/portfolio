/**
 * Dados do portfólio. Troque tudo aqui pelos seus dados reais:
 * - `avatarUri`: link para a sua foto (ou use um require('./sua-foto.png') local).
 * - `links`: suas redes/contatos de verdade.
 * - `skills`: suas habilidades e o nível de cada uma (0 a 1).
 */
export const profile = {
  name: "Seu Nome Aqui",
  headline: "Desenvolvedor(a) Mobile React Native",
  avatarUri: "https://api.dicebear.com/9.x/initials/png?seed=SN&backgroundType=gradientLinear",
};

export type ProfileLink = {
  label: string;
  url: string;
};

export const links: ProfileLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/seu-usuario" },
  { label: "GitHub", url: "https://github.com/seu-usuario" },
  { label: "E-mail", url: "mailto:seuemail@exemplo.com" },
];

export type Skill = {
  name: string;
  level: number; // 0 a 1
};

export const skills: Skill[] = [
  { name: "React Native", level: 0.8 },
  { name: "JavaScript / TypeScript", level: 0.85 },
  { name: "React Navigation", level: 0.75 },
  { name: "Expo", level: 0.8 },
  { name: "Git & GitHub", level: 0.7 },
];
