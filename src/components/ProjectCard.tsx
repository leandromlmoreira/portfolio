import { StyleSheet, Text, View } from "react-native";
import type { Project } from "../data/projects";
import { PressableScale } from "./PressableScale";
import { ProjectCover } from "./ProjectCover";
import { TagRow } from "./Tag";
import { Icon } from "./icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, radii } from "../theme/tokens";

type Props = {
  project: Project;
  index: number;
  onPress: () => void;
  compact?: boolean;
};

export function ProjectCard({ project, index, onPress, compact }: Props) {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();
  const number = String(index + 1).padStart(2, "0");

  return (
    <PressableScale
      onPress={onPress}
      label={`Abrir ${project.name}`}
      pressedScale={0.985}
      style={({ hovered, focused }) => [
        styles.card,
        hovered && styles.hover,
        focused && styles.focus,
      ]}
    >
      {({ hovered }) => (
        <>
          <ProjectCover project={project} ratio={compact ? 16 / 11 : 16 / 10} lifted={hovered} />
          <View style={styles.body}>
            <View style={styles.metaRow}>
              <View style={[styles.swatch, { backgroundColor: project.accent }]} />
              <Text style={styles.index}>{number}</Text>
              <Text style={styles.kicker} numberOfLines={1}>
                {project.kicker}
              </Text>
            </View>
            <View style={styles.titleRow}>
              <Text style={[styles.name, compact && styles.nameCompact]} numberOfLines={1}>
                {project.name}
              </Text>
              <View style={[styles.arrow, hovered && styles.arrowHover]}>
                <Icon name="arrowUpRight" size={16} color={hovered ? palette.primaryInk : palette.ink} />
              </View>
            </View>
            <Text style={styles.tagline} numberOfLines={compact ? 2 : 3}>
              {project.tagline}
            </Text>
            {!compact && <TagRow labels={project.stack.slice(0, 4)} />}
          </View>
        </>
      )}
    </PressableScale>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    card: {
      borderRadius: radii.core,
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.surface,
      overflow: "hidden",
    },
    hover: {
      borderColor: c.lineStrong,
    },
    focus: {
      outlineColor: c.accent,
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineOffset: 3,
    },
    body: {
      paddingHorizontal: 18,
      paddingTop: 16,
      paddingBottom: 18,
      gap: 8,
    },
    metaRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    swatch: {
      width: 7,
      height: 7,
      borderRadius: 3.5,
    },
    index: {
      fontFamily: fonts.monoMedium,
      fontSize: 11,
      color: c.ink,
    },
    kicker: {
      flex: 1,
      fontFamily: fonts.mono,
      fontSize: 10.5,
      letterSpacing: 1.2,
      textTransform: "uppercase",
      color: c.faint,
    },
    titleRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    },
    name: {
      flexShrink: 1,
      fontFamily: fonts.display,
      fontSize: 32,
      lineHeight: 36,
      letterSpacing: -0.4,
      color: c.ink,
    },
    nameCompact: {
      fontSize: 28,
      lineHeight: 32,
    },
    arrow: {
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderColor: c.line,
    },
    arrowHover: {
      backgroundColor: c.primary,
      borderColor: c.primary,
    },
    tagline: {
      fontFamily: fonts.body,
      fontSize: 14,
      lineHeight: 21,
      color: c.muted,
    },
  });
