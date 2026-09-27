import { useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { projects } from "../data/projects";
import { countStacks, filterByStack } from "../lib/stacks";
import { Screen } from "../components/Screen";
import { TopBar } from "../components/TopBar";
import { FadeIn } from "../components/FadeIn";
import { StackChips } from "../components/StackChips";
import { ProjectCard } from "../components/ProjectCard";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { fonts, space } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Projects">;

const stacks = countStacks(projects);

function ResultLine({ count, stack }: { count: number; stack: string | null }) {
  const styles = useStyles(createStyles);
  const noun = count === 1 ? "projeto" : "projetos";
  return (
    <Text style={styles.result} accessibilityLiveRegion="polite">
      {count} {noun}
      {stack ? ` com ${stack}` : " no total"}
    </Text>
  );
}

export default function ProjectsScreen({ navigation, route }: Props) {
  const styles = useStyles(createStyles);
  const requested = route.params?.stack ?? null;
  const [stack, setStack] = useState<string | null>(requested);
  useEffect(() => setStack(requested), [requested]);
  const visible = useMemo(() => filterByStack(projects, stack), [stack]);

  return (
    <Screen header={<TopBar title="Projetos" trailing={String(projects.length).padStart(2, "0")} onBack={navigation.goBack} />}>
      <FadeIn style={styles.intro}>
        <Text style={styles.title} accessibilityRole="header">
          Projetos <Text style={styles.titleItalic}>no ar</Text>
        </Text>
        <Text style={styles.lead}>Filtre por tecnologia. Cada projeto tem código aberto e uma demo ao vivo.</Text>
      </FadeIn>

      <FadeIn order={1} style={styles.filters}>
        <StackChips stacks={stacks} total={projects.length} selected={stack} onSelect={setStack} />
        <ResultLine count={visible.length} stack={stack} />
      </FadeIn>

      <View style={styles.list}>
        {visible.map((project, position) => (
          <FadeIn key={`${stack ?? "all"}-${project.id}`} order={2 + Math.min(position, 4)}>
            <ProjectCard
              project={project}
              index={projects.indexOf(project)}
              onPress={() => navigation.navigate("Project", { id: project.id })}
            />
          </FadeIn>
        ))}
      </View>
    </Screen>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    intro: {
      gap: 12,
      paddingTop: space.md,
    },
    title: {
      fontFamily: fonts.display,
      fontSize: 52,
      lineHeight: 54,
      letterSpacing: -1,
      color: c.ink,
    },
    titleItalic: {
      fontFamily: fonts.displayItalic,
      color: c.accent,
    },
    lead: {
      fontFamily: fonts.body,
      fontSize: 15,
      lineHeight: 23,
      color: c.muted,
    },
    filters: {
      gap: 12,
      marginTop: -space.md,
    },
    result: {
      fontFamily: fonts.mono,
      fontSize: 11.5,
      letterSpacing: 0.3,
      color: c.faint,
    },
    list: {
      gap: 18,
      marginTop: -space.sm,
    },
  });
