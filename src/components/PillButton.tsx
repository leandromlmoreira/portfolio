import { StyleSheet, Text, View } from "react-native";
import { PressableScale } from "./PressableScale";
import { Icon, type IconName } from "./icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, radii } from "../theme/tokens";

type Variant = "primary" | "accent" | "ghost";

type Props = {
  label: string;
  onPress: () => void;
  icon?: IconName;
  variant?: Variant;
  grow?: boolean;
  role?: "button" | "link";
};

const tones = (c: Palette) => ({
  primary: { background: c.primary, text: c.primaryInk, orb: c.scheme === "dark" ? "rgba(17, 18, 22, 0.1)" : "rgba(244, 241, 234, 0.14)" },
  accent: { background: c.accent, text: c.accentInk, orb: c.scheme === "dark" ? "rgba(14, 20, 51, 0.12)" : "rgba(255, 255, 255, 0.16)" },
  ghost: { background: c.surface, text: c.ink, orb: c.hover },
});

export function PillButton({ label, onPress, icon = "arrowUpRight", variant = "primary", grow, role = "button" }: Props) {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();
  const tone = tones(palette)[variant];
  const ghost = variant === "ghost";

  return (
    <View style={grow ? styles.grow : undefined}>
      <PressableScale
        onPress={onPress}
        label={label}
        role={role}
        style={({ hovered, focused }) => [
          styles.button,
          { backgroundColor: tone.background },
          ghost && styles.ghost,
          ghost && hovered && styles.ghostHover,
          !ghost && hovered && styles.solidHover,
          focused && styles.focus,
        ]}
      >
        {({ hovered }) => (
          <>
            <Text style={[styles.label, { color: tone.text }]} numberOfLines={1}>
              {label}
            </Text>
            <View style={[styles.orb, { backgroundColor: tone.orb }, hovered && styles.orbHover]}>
              <Icon name={icon} size={16} color={tone.text} />
            </View>
          </>
        )}
      </PressableScale>
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    grow: {
      flexGrow: 1,
      flexBasis: 0,
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 14,
      minHeight: 50,
      paddingLeft: 20,
      paddingRight: 5,
      borderRadius: radii.pill,
    },
    ghost: {
      borderWidth: 1,
      borderColor: c.lineStrong,
    },
    ghostHover: {
      backgroundColor: c.raised,
      borderColor: c.ink,
    },
    solidHover: {
      opacity: 0.92,
    },
    focus: {
      outlineColor: c.accent,
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineOffset: 3,
    },
    label: {
      fontFamily: fonts.bodyMedium,
      fontSize: 15,
      letterSpacing: -0.1,
    },
    orb: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    orbHover: {
      transform: [{ translateX: 2 }, { translateY: -1 }, { scale: 1.06 }],
    },
  });
