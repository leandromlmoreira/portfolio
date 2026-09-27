import { StyleSheet, Text, View } from "react-native";
import { palettes, type Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { fonts } from "../theme/tokens";

type Props = {
  size?: number;
};

export function Monogram({ size = 44 }: Props) {
  const styles = useStyles(createStyles);
  return (
    <View
      accessibilityLabel="Monograma LM"
      style={[styles.badge, { width: size, height: size, borderRadius: size / 2 }]}
    >
      <Text style={[styles.letters, { fontSize: size * 0.5, lineHeight: size * 0.62 }]}>
        L<Text style={styles.italic}>m</Text>
      </Text>
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    badge: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: c.primary,
    },
    letters: {
      fontFamily: fonts.display,
      color: c.primaryInk,
      letterSpacing: -0.5,
    },
    italic: {
      fontFamily: fonts.displayItalic,
      color: palettes[c.scheme === "dark" ? "light" : "dark"].accent,
    },
  });
