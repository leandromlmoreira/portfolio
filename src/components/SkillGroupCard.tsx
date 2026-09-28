import { StyleSheet, Text, View } from "react-native";
import type { SkillGroup } from "../data/skills";
import type { Project } from "../data/projects";
import { projectsUsing } from "../lib/stacks";
import { PressableScale } from "./PressableScale";
import { Icon } from "./icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, radii } from "../theme/tokens";

type Props = {
  group: SkillGroup;
  projects: Project[];
  onOpenStack: (stack: string) => void;
};

function Swatches({ items }: { items: Project[] }) {
  const styles = useStyles(createStyles);
  return (
    <View style={styles.swatches}>
      {items.map((project, index) => (
        <View
          key={project.id}
          style={[styles.swatch, index > 0 && styles.swatchStacked, { backgroundColor: project.accent }]}
        />
      ))}
    </View>
  );
}

function SkillRow({ name, used, onPress }: { name: string; used: Project[]; onPress: () => void }) {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();
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
      <Icon name="arrowRight" size={15} color={palette.faint} />
    </PressableScale>
  );
}

export function SkillGroupCard({ group, projects, onOpenStack }: Props) {
  const styles = useStyles(createStyles);
  return (
    <View style={styles.card}>
      <View style={styles.head}>
        <Text style={styles.title} accessibilityRole="header">
          {group.title}
        </Text>
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
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    card: {
      borderRadius: radii.core,
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.surface,
      paddingBottom: 6,
      overflow: "hidden",
    },
    head: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 12,
      gap: 2,
    },
    title: {
      fontFamily: fonts.display,
      fontSize: 26,
      lineHeight: 30,
      color: c.ink,
    },
    caption: {
      fontFamily: fonts.body,
      fontSize: 13,
      lineHeight: 18,
      color: c.faint,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      minHeight: 46,
      paddingHorizontal: 16,
      borderTopWidth: 1,
      borderTopColor: c.line,
    },
    hover: {
      backgroundColor: c.hover,
    },
    name: {
      flex: 1,
      fontFamily: fonts.body,
      fontSize: 15,
      color: c.ink,
    },
    swatches: {
      flexDirection: "row",
    },
    swatch: {
      width: 11,
      height: 11,
      borderRadius: 5.5,
      borderWidth: 1.5,
      borderColor: c.surface,
    },
    swatchStacked: {
      marginLeft: -4,
    },
    count: {
      fontFamily: fonts.mono,
      fontSize: 11,
      color: c.muted,
      minWidth: 70,
      textAlign: "right",
    },
    muted: {
      fontFamily: fonts.mono,
      fontSize: 11,
      color: c.faint,
    },
  });
