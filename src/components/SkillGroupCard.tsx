import { StyleSheet, Text, View } from "react-native";
import type { SkillGroup } from "../data/skills";
import type { Project } from "../data/projects";
import { projectsUsing } from "../lib/stacks";
import { PressableScale } from "./PressableScale";
import { Icon } from "./icons/Icon";
import { colors, fonts, radii } from "../theme/tokens";

type Props = {
  group: SkillGroup;
  projects: Project[];
  onOpenStack: (stack: string) => void;
};

function Swatches({ items }: { items: Project[] }) {
  return (
    <View style={styles.swatches}>
      {items.map((project) => (
        <View key={project.id} style={[styles.swatch, { backgroundColor: project.accent }]} />
      ))}
    </View>
  );
}

function SkillRow({ name, used, onPress }: { name: string; used: Project[]; onPress: () => void }) {
  const caption = used.length === 1 ? "1 projeto" : `${used.length} projetos`;

  if (used.length === 0) {
    return (
      <View style={styles.row}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.muted}>no dia a dia</Text>
      </View>
    );
  }

  return (
    <PressableScale
      onPress={onPress}
      label={`Ver projetos com ${name}`}
      pressedScale={0.985}
      style={({ hovered }) => [styles.row, hovered && styles.hover]}
    >
      <Text style={styles.name}>{name}</Text>
      <Swatches items={used} />
      <Text style={styles.count}>{caption}</Text>
      <Icon name="arrowRight" size={15} color={colors.faint} />
    </PressableScale>
  );
}

export function SkillGroupCard({ group, projects, onOpenStack }: Props) {
  return (
    <View style={styles.shell}>
      <View style={styles.core}>
        <View style={styles.head}>
          <Text style={styles.title}>{group.title}</Text>
          <Text style={styles.caption}>{group.caption}</Text>
        </View>
        {group.skills.map((skill) => (
          <SkillRow
            key={skill}
            name={skill}
            used={projectsUsing(projects, skill)}
            onPress={() => onOpenStack(skill)}
          />
        ))}
      </View>
    </View>
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
    backgroundColor: colors.surface,
    paddingVertical: 8,
    overflow: "hidden",
  },
  head: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    gap: 4,
  },
  title: {
    fontFamily: fonts.displayBold,
    fontSize: 19,
    color: colors.paper,
  },
  caption: {
    fontFamily: fonts.bodyRegular,
    fontSize: 13,
    color: colors.faint,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    minHeight: 46,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: colors.line,
  },
  hover: {
    backgroundColor: "rgba(242, 239, 232, 0.04)",
  },
  name: {
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.paper,
  },
  swatches: {
    flexDirection: "row",
    gap: 3,
  },
  swatch: {
    width: 8,
    height: 8,
    borderRadius: 2,
  },
  count: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.muted,
    minWidth: 68,
    textAlign: "right",
  },
  muted: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.faint,
  },
});
