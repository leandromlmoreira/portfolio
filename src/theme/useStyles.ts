import { useMemo } from "react";
import type { Palette } from "./palettes";
import { useTheme } from "./ThemeProvider";

export const useStyles = <T>(factory: (palette: Palette) => T): T => {
  const { palette } = useTheme();
  return useMemo(() => factory(palette), [factory, palette]);
};
