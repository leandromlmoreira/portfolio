import { StyleSheet, Text, View } from "react-native";
import type { Project } from "../data/projects";
import { PressableScale } from "./PressableScale";
import { ProjectCover } from "./ProjectCover";
import { TagRow } from "./Tag";
import { Icon } from "./icons/Icon";
import { colors, fonts, radii } from "../theme/tokens";

type Props = {
  project: Project;
  index: number;
  onPress: () => void;
  compact?: boolean;
};

export function ProjectCard({ project, index, onPress, compact }: Props) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <PressableScale
      onPress={onPress}
      label={`Abrir ${project.name}`}
      pressedScale={0.985}
      style={({ hovered, focused }) => [
        styles.shell,
        (hovered || focused) && { borderColor: project.accent + "66" },
      ]}
    >
      <View style={styles.core}>
        <ProjectCover kind={project.cover} ratio={compact ? 16 / 9 : 16 / 10} />
        <View style={styles.body}>
          <View style={styles.metaRow}>
            <Text style={[styles.index, { color: project.accent }]}>{number}</Text>
            <Text style={styles.kicker} numberOfLines={1}>
              {project.kicker}
            </Text>
          </View>
          <View style={styles.titleRow}>
            <Text style={styles.name}>{project.name}</Text>
            <Icon name="arrowUpRight" size={20} color={colors.muted} />
          </View>
          <Text style={styles.tagline} numberOfLines={compact ? 2 : 3}>
            {project.tagline}
          </Text>
          {!compact && <TagRow labels={project.stack.slice(0, 4)} />}
        </View>
      </View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  shell: {
    padding: 5,
    borderRadius: radii.shell,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: "rgba(242, 239, 232, 0.025)",
  },
  core: {
    borderRadius: radii.core,
    overflow: "hidden",
    backgroundColor: colors.surface,
  },
  body: {
    padding: 18,
    gap: 10,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  index: {
    fontFamily: fonts.mono,
    fontSize: 11,
  },
  kicker: {
    flex: 1,
    fontFamily: fonts.mono,
    fontSize: 10.5,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    color: colors.faint,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: fonts.display,
    fontSize: 24,
    letterSpacing: -0.4,
    color: colors.paper,
  },
  tagline: {
    fontFamily: fonts.bodyRegular,
    fontSize: 14,
    lineHeight: 21,
    color: colors.muted,
  },
});
