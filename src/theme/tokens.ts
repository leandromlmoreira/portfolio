import { Easing } from "react-native";

export const colors = {
  ink: "#0A0B0F",
  inkDeep: "#06070A",
  surface: "#111319",
  raised: "#171A22",
  line: "rgba(242, 239, 232, 0.08)",
  lineStrong: "rgba(242, 239, 232, 0.16)",
  paper: "#F2EFE8",
  muted: "#A3A3AE",
  faint: "#6B6D7A",
  signal: "#D4FF4F",
  signalInk: "#11140A",
  signalSoft: "rgba(212, 255, 79, 0.12)",
};

export const fonts = {
  display: "Syne_800ExtraBold",
  displayBold: "Syne_700Bold",
  body: "Manrope_500Medium",
  bodyRegular: "Manrope_400Regular",
  bodyStrong: "Manrope_700Bold",
  mono: "JetBrainsMono_500Medium",
};

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  huge: 48,
  gutter: 20,
};

export const radii = {
  shell: 28,
  core: 22,
  pill: 999,
  tag: 8,
};

export const motion = {
  easeOut: Easing.bezier(0.23, 1, 0.32, 1),
  drawer: Easing.bezier(0.32, 0.72, 0, 1),
  enter: 620,
  stagger: 70,
};
