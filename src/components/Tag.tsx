import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, radii } from "../theme/tokens";

type Props = {
  label: string;
};

export function Tag({ label }: Props) {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

export function TagRow({ labels }: { labels: string[] }) {
  return (
    <View style={styles.row}>
      {labels.map((label) => (
        <Tag key={label} label={label} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.tag,
    backgroundColor: "rgba(242, 239, 232, 0.05)",
  },
  text: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.muted,
  },
});
