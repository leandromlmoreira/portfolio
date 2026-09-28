import { StyleSheet, Text, View } from "react-native";
import { Icon } from "./icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, radii } from "../theme/tokens";

export function PrivateCodeBadge() {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();

  return (
    <View
      style={styles.badge}
      accessible
      accessibilityRole="text"
      accessibilityLabel="Código privado: o repositório deste projeto é fechado"
    >
      <Icon name="lock" size={15} color={palette.faint} />
      <Text style={styles.label} numberOfLines={1}>
        Código privado
      </Text>
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    badge: {
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
      minHeight: 50,
      paddingLeft: 15,
      paddingRight: 17,
      borderRadius: radii.pill,
      borderWidth: 1,
      borderStyle: "dashed",
      borderColor: c.lineStrong,
    },
    label: {
      fontFamily: fonts.bodyMedium,
      fontSize: 13.5,
      letterSpacing: -0.1,
      color: c.faint,
    },
  });
