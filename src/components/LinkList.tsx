import { StyleSheet, Text, View } from "react-native";
import type { ProfileLink } from "../data/profile";
import { openLink } from "../lib/openLink";
import { PressableScale } from "./PressableScale";
import { Icon } from "./icons/Icon";
import { colors, fonts, radii } from "../theme/tokens";

export function LinkList({ items }: { items: ProfileLink[] }) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <PressableScale
          key={item.url}
          onPress={() => openLink(item.url)}
          label={`Abrir ${item.label}`}
          role="link"
          pressedScale={0.985}
          style={({ hovered }) => [styles.row, index > 0 && styles.divided, hovered && styles.hover]}
        >
          <View style={styles.badge}>
            <Icon name={item.icon} size={18} color={colors.signal} />
          </View>
          <View style={styles.text}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.handle} numberOfLines={1}>
              {item.handle}
            </Text>
          </View>
          <Icon name="arrowUpRight" size={18} color={colors.faint} />
        </PressableScale>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    borderRadius: radii.core,
    borderWidth: 1,
    borderColor: colors.line,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "rgba(242, 239, 232, 0.025)",
  },
  divided: {
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  hover: {
    backgroundColor: "rgba(242, 239, 232, 0.06)",
  },
  badge: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.signalSoft,
  },
  text: {
    flex: 1,
    gap: 2,
  },
  label: {
    fontFamily: fonts.bodyStrong,
    fontSize: 15,
    color: colors.paper,
  },
  handle: {
    fontFamily: fonts.mono,
    fontSize: 11.5,
    color: colors.faint,
  },
});
