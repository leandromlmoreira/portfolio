import { StyleSheet, Text, View } from "react-native";
import { PressableScale } from "./PressableScale";
import { Icon } from "./icons/Icon";
import { colors, fonts, space } from "../theme/tokens";

type Props = {
  title: string;
  trailing?: string;
  onBack: () => void;
};

export function TopBar({ title, trailing, onBack }: Props) {
  return (
    <View style={styles.bar}>
      <PressableScale
        onPress={onBack}
        label="Voltar"
        pressedScale={0.92}
        style={({ hovered }) => [styles.back, hovered && styles.backHover]}
      >
        <Icon name="arrowLeft" size={18} color={colors.paper} />
      </PressableScale>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.trailing}>{trailing ?? ""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    gap: space.md,
    paddingHorizontal: space.gutter,
    paddingVertical: space.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    backgroundColor: colors.ink,
  },
  back: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: "rgba(242, 239, 232, 0.03)",
  },
  backHover: {
    backgroundColor: "rgba(242, 239, 232, 0.08)",
  },
  title: {
    flex: 1,
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: colors.muted,
  },
  trailing: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.faint,
  },
});
