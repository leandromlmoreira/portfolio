import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useColorScheme } from "react-native";
import { palettes, type Palette, type Scheme } from "./palettes";

type ThemeValue = {
  palette: Palette;
  scheme: Scheme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeValue>({
  palette: palettes.light,
  scheme: "light",
  toggle: () => undefined,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const system = useColorScheme() === "dark" ? "dark" : "light";
  const [override, setOverride] = useState<Scheme | null>(null);
  const scheme = override ?? system;

  const toggle = useCallback(() => setOverride(scheme === "dark" ? "light" : "dark"), [scheme]);

  const value = useMemo(() => ({ palette: palettes[scheme], scheme, toggle }), [scheme, toggle]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
