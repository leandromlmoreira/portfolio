import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, radii } from "../theme/tokens";

type Props = {
  label: string;
  tone?: string;
};

export function Eyebrow({ label, tone = colors.signal }: Props) {
  return (
    <View style={styles.pill}>
      <View style={[styles.dot, { backgroundColor: tone }]} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: "rgba(242, 239, 232, 0.03)",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  text: {
    fontFamily: fonts.mono,
    fontSize: 10.5,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: colors.muted,
  },
});
