export type SkillGroup = {
  title: string;
  caption: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Interfaces",
    caption: "Web e mobile com a mesma base de TypeScript.",
    skills: ["TypeScript", "React", "React Native", "Expo", "Expo Router", "Next.js", "Vite", "Tailwind CSS", "Preact"],
  },
  {
    title: "Movimento e desenho",
    caption: "Cenas, ilustrações e animações feitas em código.",
    skills: ["SVG", "Canvas", "Three.js", "WebGL", "Framer Motion", "Motion", "WebAudio", "Sass"],
  },
  {
    title: "Back-end e dados",
    caption: "APIs, modelagem e persistência.",
    skills: ["Node.js", "Express", "Python", "FastAPI", "SQLAlchemy", "Java", "Spring Boot", "PHP", "MySQL", "SQLite", "IndexedDB"],
  },
  {
    title: "IA e qualidade",
    caption: "Agentes, testes e ferramentas do dia a dia.",
    skills: ["Agentes de IA", "MCP", "Vitest", "Playwright", "Jest", "JUnit", "pytest", "Docker", "Maven", "JavaScript"],
  },
];
