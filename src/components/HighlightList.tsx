import { StyleSheet, Text, View } from "react-native";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { fonts } from "../theme/tokens";

export function HighlightList({ items }: { items: string[] }) {
  const styles = useStyles(createStyles);
  return (
    <View>
      {items.map((item, index) => (
        <View key={item} style={[styles.row, index > 0 && styles.divided]}>
          <Text style={styles.number}>{String(index + 1).padStart(2, "0")}</Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    row: {
      flexDirection: "row",
      gap: 14,
      paddingVertical: 14,
    },
    divided: {
      borderTopWidth: 1,
      borderTopColor: c.line,
    },
    number: {
      fontFamily: fonts.monoMedium,
      fontSize: 11.5,
      lineHeight: 22,
      width: 20,
      color: c.accent,
    },
    text: {
      flex: 1,
      fontFamily: fonts.body,
      fontSize: 15,
      lineHeight: 22,
      color: c.ink,
    },
  });
