import { Animated, Image, StyleSheet, View } from "react-native";
import type { Project } from "../data/projects";
import { useLift } from "../hooks/useLift";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";

type Props = {
  project: Project;
  ratio?: number;
  lifted?: boolean;
  withPhone?: boolean;
};

const shotRatio = 1120 / 700;
const phoneRatio = 360 / 780;

function WindowChrome() {
  const styles = useStyles(createStyles);
  return (
    <View style={styles.chrome}>
      <View style={styles.light} />
      <View style={styles.light} />
      <View style={styles.light} />
    </View>
  );
}

export function ProjectCover({ project, ratio = 16 / 10, lifted = false, withPhone = false }: Props) {
  const styles = useStyles(createStyles);
  const lift = useLift(lifted);
  const translateY = lift.interpolate({ inputRange: [0, 1], outputRange: [0, -6] });
  const phoneY = lift.interpolate({ inputRange: [0, 1], outputRange: [0, -10] });

  return (
    <View
      style={[styles.frame, { aspectRatio: ratio }]}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <View style={[StyleSheet.absoluteFill, { backgroundColor: project.accent, opacity: 0.16 }]} />
      <Animated.View
        style={[styles.window, withPhone && styles.windowNarrow, { transform: [{ translateY }] }]}
      >
        <WindowChrome />
        <View style={styles.viewport}>
          <Image source={project.shot} style={styles.fill} resizeMode="cover" />
        </View>
      </Animated.View>
      {withPhone && (
        <Animated.View style={[styles.phone, { transform: [{ translateY: phoneY }] }]}>
          <Image source={project.shotMobile} style={styles.fill} resizeMode="cover" />
        </Animated.View>
      )}
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    frame: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: c.sunken,
    },
    window: {
      position: "absolute",
      top: "11%",
      left: "7%",
      right: "7%",
      borderRadius: 10,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: c.lineStrong,
      backgroundColor: c.raised,
      shadowColor: c.shadow,
      shadowOpacity: c.scheme === "dark" ? 0.5 : 0.16,
      shadowRadius: 18,
      shadowOffset: { width: 0, height: 10 },
    },
    windowNarrow: {
      top: "13%",
      left: "6%",
      right: "22%",
    },
    chrome: {
      height: 14,
      flexDirection: "row",
      alignItems: "center",
      gap: 4,
      paddingHorizontal: 7,
      backgroundColor: c.raised,
    },
    light: {
      width: 5,
      height: 5,
      borderRadius: 2.5,
      backgroundColor: c.lineStrong,
    },
    viewport: {
      width: "100%",
      aspectRatio: shotRatio,
      overflow: "hidden",
    },
    fill: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    phone: {
      position: "absolute",
      right: "6%",
      top: "24%",
      width: "27%",
      aspectRatio: phoneRatio,
      borderRadius: 18,
      borderWidth: 4,
      borderColor: c.bezel,
      overflow: "hidden",
      backgroundColor: c.bezel,
      shadowColor: c.shadow,
      shadowOpacity: c.scheme === "dark" ? 0.55 : 0.22,
      shadowRadius: 22,
      shadowOffset: { width: 0, height: 14 },
    },
  });
