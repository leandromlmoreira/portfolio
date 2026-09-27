export type Scheme = "light" | "dark";

export type Palette = {
  scheme: Scheme;
  bg: string;
  stage: string;
  surface: string;
  raised: string;
  sunken: string;
  ink: string;
  muted: string;
  faint: string;
  line: string;
  lineStrong: string;
  hover: string;
  accent: string;
  accentInk: string;
  accentSoft: string;
  live: string;
  primary: string;
  primaryInk: string;
  bezel: string;
  bezelEdge: string;
  shadow: string;
  glow: number;
};

export const light: Palette = {
  scheme: "light",
  bg: "#F4F1EA",
  stage: "#E9E5DB",
  surface: "#FBFAF7",
  raised: "#FFFFFF",
  sunken: "#ECE8DF",
  ink: "#16181D",
  muted: "#4F5561",
  faint: "#5F646E",
  line: "rgba(22, 24, 29, 0.09)",
  lineStrong: "rgba(22, 24, 29, 0.18)",
  hover: "rgba(22, 24, 29, 0.045)",
  accent: "#2E47C9",
  accentInk: "#FFFFFF",
  accentSoft: "rgba(46, 71, 201, 0.09)",
  live: "#23875A",
  primary: "#16181D",
  primaryInk: "#F4F1EA",
  bezel: "#1B1C20",
  bezelEdge: "#3A3B41",
  shadow: "#2A2418",
  glow: 0.1,
};

export const dark: Palette = {
  scheme: "dark",
  bg: "#111216",
  stage: "#0B0C0F",
  surface: "#18191E",
  raised: "#1F2127",
  sunken: "#0D0E11",
  ink: "#EDEAE3",
  muted: "#A9A69E",
  faint: "#8E8B83",
  line: "rgba(237, 234, 227, 0.08)",
  lineStrong: "rgba(237, 234, 227, 0.16)",
  hover: "rgba(237, 234, 227, 0.05)",
  accent: "#9DAEFF",
  accentInk: "#0E1433",
  accentSoft: "rgba(157, 174, 255, 0.12)",
  live: "#4CC38A",
  primary: "#EDEAE3",
  primaryInk: "#111216",
  bezel: "#1D1E23",
  bezelEdge: "#44464D",
  shadow: "#000000",
  glow: 0.16,
};

export const palettes: Record<Scheme, Palette> = { light, dark };
