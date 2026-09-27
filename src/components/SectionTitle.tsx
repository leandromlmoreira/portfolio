import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "../theme/tokens";

type Props = {
  title: string;
  caption?: string;
};

export function SectionTitle({ title, caption }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      {caption && <Text style={styles.caption}>{caption}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: 4,
  },
  title: {
    fontFamily: fonts.displayBold,
    fontSize: 20,
    letterSpacing: -0.2,
    color: colors.paper,
  },
  caption: {
    fontFamily: fonts.bodyRegular,
    fontSize: 13.5,
    lineHeight: 20,
    color: colors.faint,
  },
});
