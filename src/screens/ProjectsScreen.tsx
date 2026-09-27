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
import { colors, fonts, space } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Projects">;

const stacks = countStacks(projects);

function ResultLine({ count, stack }: { count: number; stack: string | null }) {
  const noun = count === 1 ? "projeto" : "projetos";
  return (
    <Text style={styles.result}>
      {count} {noun}
      {stack ? ` com ${stack}` : " no total"}
    </Text>
  );
}

export default function ProjectsScreen({ navigation, route }: Props) {
  const requested = route.params?.stack ?? null;
  const [stack, setStack] = useState<string | null>(requested);
  useEffect(() => setStack(requested), [requested]);
  const visible = useMemo(() => filterByStack(projects, stack), [stack]);

  return (
    <Screen header={<TopBar title="Projetos" trailing={`${projects.length}`} onBack={navigation.goBack} />}>
      <FadeIn style={styles.intro}>
        <Text style={styles.title} accessibilityRole="header">
          Projetos{"\n"}no ar<Text style={styles.dot}>.</Text>
        </Text>
        <Text style={styles.lead}>Filtre por tecnologia. Cada projeto tem código aberto e uma demo ao vivo.</Text>
      </FadeIn>

      <FadeIn order={1} style={styles.filters}>
        <StackChips stacks={stacks} total={projects.length} selected={stack} onSelect={setStack} />
        <ResultLine count={visible.length} stack={stack} />
      </FadeIn>

      <View style={styles.list}>
        {visible.map((project) => (
          <FadeIn key={`${stack ?? "all"}-${project.id}`} order={2 + visible.indexOf(project)}>
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

const styles = StyleSheet.create({
  intro: {
    gap: 12,
    paddingTop: space.lg,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: -1.2,
    color: colors.paper,
  },
  lead: {
    fontFamily: fonts.bodyRegular,
    fontSize: 15,
    lineHeight: 23,
    color: colors.muted,
  },
  filters: {
    gap: 14,
  },
  result: {
    fontFamily: fonts.mono,
    fontSize: 11.5,
    letterSpacing: 0.4,
    color: colors.faint,
  },
  list: {
    gap: 16,
  },
  dot: {
    color: colors.signal,
  },
});
