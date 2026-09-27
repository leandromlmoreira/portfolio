import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme/tokens";

type Props = {
  items: string[];
  accent: string;
};

export function HighlightList({ items, accent }: Props) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <View key={item} style={[styles.row, index > 0 && styles.divided]}>
          <Text style={[styles.number, { color: accent }]}>{String(index + 1).padStart(2, "0")}</Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 0,
  },
  row: {
    flexDirection: "row",
    gap: 14,
    paddingVertical: 14,
  },
  divided: {
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  number: {
    fontFamily: fonts.mono,
    fontSize: 12,
    lineHeight: 22,
    width: 20,
  },
  text: {
    flex: 1,
    fontFamily: fonts.bodyRegular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.paper,
  },
});
