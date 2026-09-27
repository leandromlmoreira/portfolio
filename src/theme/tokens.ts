import { Easing } from "react-native";

export const fonts = {
  display: "InstrumentSerif_400Regular",
  displayItalic: "InstrumentSerif_400Regular_Italic",
  body: "Geist_400Regular",
  bodyMedium: "Geist_500Medium",
  bodyStrong: "Geist_600SemiBold",
  mono: "GeistMono_400Regular",
  monoMedium: "GeistMono_500Medium",
};

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  section: 44,
  huge: 56,
  gutter: 20,
};

export const radii = {
  core: 20,
  pill: 999,
  tag: 7,
};

export const motion = {
  easeOut: Easing.bezier(0.23, 1, 0.32, 1),
  enter: 640,
  stagger: 60,
  hover: 220,
};
