import { StyleSheet, Text, View } from "react-native";
import type { ProfileLink } from "../data/profile";
import { openLink } from "../lib/openLink";
import { PressableScale } from "./PressableScale";
import { Icon } from "./icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, radii } from "../theme/tokens";

export function LinkList({ items }: { items: ProfileLink[] }) {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();

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
          {({ hovered }) => (
            <>
              <View style={styles.badge}>
                <Icon name={item.icon} size={18} color={palette.accent} />
              </View>
              <View style={styles.text}>
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.handle} numberOfLines={1}>
                  {item.handle}
                </Text>
              </View>
              <View style={hovered && styles.arrowHover}>
                <Icon name="arrowUpRight" size={18} color={hovered ? palette.ink : palette.faint} />
              </View>
            </>
          )}
        </PressableScale>
      ))}
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    list: {
      borderRadius: radii.core,
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.surface,
      overflow: "hidden",
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 14,
      paddingHorizontal: 16,
      paddingVertical: 14,
    },
    divided: {
      borderTopWidth: 1,
      borderTopColor: c.line,
    },
    hover: {
      backgroundColor: c.hover,
    },
    badge: {
      width: 38,
      height: 38,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: c.accentSoft,
    },
    text: {
      flex: 1,
      gap: 2,
    },
    label: {
      fontFamily: fonts.bodyMedium,
      fontSize: 15,
      color: c.ink,
    },
    handle: {
      fontFamily: fonts.mono,
      fontSize: 11.5,
      color: c.faint,
    },
    arrowHover: {
      transform: [{ translateX: 2 }, { translateY: -2 }],
    },
  });
