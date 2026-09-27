import { StyleSheet, Text, View } from "react-native";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { fonts, radii } from "../theme/tokens";

export function TagRow({ labels }: { labels: string[] }) {
  const styles = useStyles(createStyles);
  return (
    <View style={styles.row}>
      {labels.map((label) => (
        <View key={label} style={styles.tag}>
          <Text style={styles.text}>{label}</Text>
        </View>
      ))}
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
    },
    tag: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: radii.tag,
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.bg,
    },
    text: {
      fontFamily: fonts.mono,
      fontSize: 11,
      color: c.muted,
    },
  });
