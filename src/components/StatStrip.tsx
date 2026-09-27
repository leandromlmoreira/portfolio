import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, radii } from "../theme/tokens";

export type Stat = {
  value: string;
  label: string;
};

export function StatStrip({ stats }: { stats: Stat[] }) {
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

const styles = StyleSheet.create({
  strip: {
    flexDirection: "row",
    borderRadius: radii.core,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: "rgba(242, 239, 232, 0.025)",
    paddingVertical: 16,
  },
  cell: {
    flex: 1,
    paddingHorizontal: 14,
    gap: 4,
  },
  divided: {
    borderLeftWidth: 1,
    borderLeftColor: colors.line,
  },
  value: {
    fontFamily: fonts.display,
    fontSize: 24,
    color: colors.paper,
  },
  label: {
    fontFamily: fonts.body,
    fontSize: 12,
    lineHeight: 16,
    color: colors.faint,
  },
});
