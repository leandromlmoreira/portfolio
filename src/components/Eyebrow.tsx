import { StyleSheet, Text, View } from "react-native";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, radii } from "../theme/tokens";

type Props = {
  label: string;
  tone?: string;
};

export function Eyebrow({ label, tone }: Props) {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();
  return (
    <View style={styles.pill}>
      <View style={[styles.dot, { backgroundColor: tone ?? palette.accent }]} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    pill: {
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingHorizontal: 11,
      paddingVertical: 6,
      borderRadius: radii.pill,
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.surface,
    },
    dot: {
      width: 6,
      height: 6,
      borderRadius: 3,
    },
    text: {
      fontFamily: fonts.monoMedium,
      fontSize: 10.5,
      letterSpacing: 1.4,
      textTransform: "uppercase",
      color: c.muted,
    },
  });
