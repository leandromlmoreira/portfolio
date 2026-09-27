import { StyleSheet, Text, View } from "react-native";
import { PressableScale } from "./PressableScale";
import { Icon } from "./icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, space } from "../theme/tokens";

type Props = {
  title: string;
  trailing?: string;
  onBack: () => void;
};

export function TopBar({ title, trailing, onBack }: Props) {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();

  return (
    <View style={styles.bar}>
      <PressableScale
        onPress={onBack}
        label="Voltar"
        pressedScale={0.92}
        style={({ hovered, focused }) => [styles.back, hovered && styles.backHover, focused && styles.focus]}
      >
        <Icon name="arrowLeft" size={18} color={palette.ink} />
      </PressableScale>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      {trailing && <Text style={styles.trailing}>{trailing}</Text>}
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    bar: {
      flexDirection: "row",
      alignItems: "center",
      gap: space.md,
      paddingHorizontal: space.gutter,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: c.line,
      backgroundColor: c.bg,
    },
    back: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.surface,
    },
    backHover: {
      borderColor: c.lineStrong,
      backgroundColor: c.raised,
    },
    focus: {
      outlineColor: c.accent,
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineOffset: 2,
    },
    title: {
      flex: 1,
      fontFamily: fonts.monoMedium,
      fontSize: 11,
      letterSpacing: 1.4,
      textTransform: "uppercase",
      color: c.muted,
    },
    trailing: {
      fontFamily: fonts.mono,
      fontSize: 11,
      color: c.faint,
    },
  });
