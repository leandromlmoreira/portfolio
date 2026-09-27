import { StyleSheet, Text, View } from "react-native";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { fonts, radii } from "../theme/tokens";

export type Stat = {
  value: string;
  label: string;
};

export function StatStrip({ stats }: { stats: Stat[] }) {
  const styles = useStyles(createStyles);
  return (
    <View style={styles.strip}>
      {stats.map((stat, index) => (
        <View key={stat.label} style={[styles.cell, index > 0 && styles.divided]}>
          <Text style={styles.value}>{stat.value}</Text>
          <Text style={styles.label}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    strip: {
      flexDirection: "row",
      borderRadius: radii.core,
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.surface,
      paddingVertical: 16,
    },
    cell: {
      flex: 1,
      paddingHorizontal: 14,
      gap: 2,
    },
    divided: {
      borderLeftWidth: 1,
      borderLeftColor: c.line,
    },
    value: {
      fontFamily: fonts.display,
      fontSize: 38,
      lineHeight: 42,
      letterSpacing: -0.5,
      color: c.ink,
    },
    label: {
      fontFamily: fonts.body,
      fontSize: 12,
      lineHeight: 16,
      color: c.faint,
    },
  });
