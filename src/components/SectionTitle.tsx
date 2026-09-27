import { StyleSheet, Text, View } from "react-native";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { fonts } from "../theme/tokens";

type Props = {
  title: string;
  caption?: string;
  meta?: string;
};

export function SectionTitle({ title, caption, meta }: Props) {
  const styles = useStyles(createStyles);
  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <Text style={styles.title} accessibilityRole="header">
          {title}
        </Text>
        {meta && <Text style={styles.meta}>{meta}</Text>}
      </View>
      {caption && <Text style={styles.caption}>{caption}</Text>}
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    wrap: {
      gap: 4,
    },
    row: {
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 12,
    },
    title: {
      fontFamily: fonts.display,
      fontSize: 28,
      lineHeight: 32,
      letterSpacing: -0.3,
      color: c.ink,
    },
    meta: {
      fontFamily: fonts.mono,
      fontSize: 11,
      color: c.faint,
    },
    caption: {
      fontFamily: fonts.body,
      fontSize: 13.5,
      lineHeight: 20,
      color: c.faint,
    },
  });
