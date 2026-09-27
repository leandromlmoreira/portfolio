import { StyleSheet, Text, View } from "react-native";
import { PressableScale } from "./PressableScale";
import { Icon, type IconName } from "./icons/Icon";
import { colors, fonts, radii } from "../theme/tokens";

type Props = {
  label: string;
  onPress: () => void;
  icon?: IconName;
  tone?: string;
  variant?: "solid" | "ghost";
  grow?: boolean;
};

export function PillButton({
  label,
  onPress,
  icon = "arrowUpRight",
  tone = colors.signal,
  variant = "solid",
  grow,
}: Props) {
  const solid = variant === "solid";
  const textColor = solid ? colors.signalInk : colors.paper;

  return (
    <View style={grow ? styles.grow : undefined}>
      <PressableScale
        onPress={onPress}
        label={label}
        style={({ hovered, focused }) => [
          styles.button,
          solid ? { backgroundColor: tone } : styles.ghost,
          !solid && hovered && styles.ghostHover,
          focused && { outlineColor: tone, outlineWidth: 2, outlineStyle: "solid", outlineOffset: 3 },
        ]}
      >
        {({ hovered }) => (
          <>
            <Text style={[styles.label, { color: textColor }]} numberOfLines={1}>{label}</Text>
            <View
              style={[
                styles.orb,
                { backgroundColor: solid ? "rgba(10, 11, 15, 0.12)" : "rgba(242, 239, 232, 0.08)" },
                hovered && styles.orbHover,
              ]}
            >
              <Icon name={icon} size={16} color={textColor} />
            </View>
          </>
        )}
      </PressableScale>
    </View>
  );
}

const styles = StyleSheet.create({
  grow: {
    flexGrow: 1,
    flexBasis: 0,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    minHeight: 52,
    paddingLeft: 20,
    paddingRight: 6,
    borderRadius: radii.pill,
  },
  ghost: {
    borderWidth: 1,
    borderColor: colors.lineStrong,
    backgroundColor: "rgba(242, 239, 232, 0.03)",
  },
  ghostHover: {
    backgroundColor: "rgba(242, 239, 232, 0.07)",
  },
  label: {
    fontFamily: fonts.bodyStrong,
    fontSize: 15,
    letterSpacing: 0.1,
  },
  orb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  orbHover: {
    transform: [{ translateX: 2 }, { translateY: -1 }, { scale: 1.05 }],
  },
});
