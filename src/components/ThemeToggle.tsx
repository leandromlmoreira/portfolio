import { StyleSheet } from "react-native";
import { PressableScale } from "./PressableScale";
import { Icon } from "./icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";

export function ThemeToggle({ size = 40 }: { size?: number }) {
  const styles = useStyles(createStyles);
  const { palette, scheme, toggle } = useTheme();
  const dark = scheme === "dark";

  return (
    <PressableScale
      onPress={toggle}
      label={dark ? "Usar tema claro" : "Usar tema escuro"}
      pressedScale={0.9}
      style={({ hovered, focused }) => [
        styles.button,
        { width: size, height: size, borderRadius: size / 2 },
        hovered && styles.hover,
        focused && styles.focus,
      ]}
    >
      <Icon name={dark ? "sun" : "moon"} size={17} color={palette.ink} />
    </PressableScale>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.surface,
    },
    hover: {
      borderColor: c.lineStrong,
      backgroundColor: c.raised,
    },
    focus: {
      outlineColor: c.accent,
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineOffset: 2,
    },
  });
