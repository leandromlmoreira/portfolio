import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { findProject, projects } from "../data/projects";
import { openLink } from "../lib/openLink";
import { Screen } from "../components/Screen";
import { TopBar } from "../components/TopBar";
import { FadeIn } from "../components/FadeIn";
import { Glow } from "../components/Glow";
import { ProjectCover } from "../components/ProjectCover";
import { PillButton } from "../components/PillButton";
import { SectionTitle } from "../components/SectionTitle";
import { HighlightList } from "../components/HighlightList";
import { TagRow } from "../components/Tag";
import { ProjectCard } from "../components/ProjectCard";
import { colors, fonts, radii, space } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Project">;

const fitTitle = (name: string) => {
  const fontSize = Math.min(42, Math.floor(318 / (name.length * 0.95)));
  return { fontSize, lineHeight: Math.round(fontSize * 1.1) };
};

function NotFound({ onBack }: { onBack: () => void }) {
  return (
    <Screen header={<TopBar title="Projeto" onBack={onBack} />}>
      <View style={styles.missing}>
        <Text style={styles.title}>Projeto não encontrado</Text>
        <Text style={styles.summary}>Esse link não aponta para nenhum projeto da lista.</Text>
      </View>
    </Screen>
  );
}

export default function ProjectScreen({ navigation, route }: Props) {
  const project = findProject(route.params.id);

  if (!project) {
    return <NotFound onBack={navigation.goBack} />;
  }

  const position = projects.indexOf(project);
  const next = projects[(position + 1) % projects.length];

  return (
    <Screen
      backdrop={<Glow color={project.accent} height={520} />}
      header={
        <TopBar
          title={project.kicker}
          trailing={`${String(position + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`}
          onBack={navigation.goBack}
        />
      }
    >
      <FadeIn style={styles.coverShell}>
        <View style={styles.coverCore}>
          <ProjectCover kind={project.cover} ratio={4 / 3} />
        </View>
      </FadeIn>

      <FadeIn order={1} style={styles.head}>
        <Text style={[styles.title, fitTitle(project.name)]} accessibilityRole="header">
          {project.name}
        </Text>
        <Text style={styles.tagline}>{project.tagline}</Text>
      </FadeIn>

      <FadeIn order={2} style={styles.actions}>
        <PillButton label="Ver ao vivo" tone={project.accent} grow onPress={() => openLink(project.live)} />
        <PillButton label="Código" icon="code" variant="ghost" onPress={() => openLink(project.repo)} />
      </FadeIn>

      <FadeIn order={3} style={styles.section}>
        <SectionTitle title="Sobre" />
        <Text style={styles.summary}>{project.summary}</Text>
      </FadeIn>

      <FadeIn order={4} style={styles.sectionTight}>
        <SectionTitle title="Destaques" />
        <HighlightList items={project.highlights} accent={project.accent} />
      </FadeIn>

      <FadeIn order={5} style={styles.section}>
        <SectionTitle title="Stack" />
        <TagRow labels={project.stack} />
      </FadeIn>

      <FadeIn order={6} style={styles.section}>
        <Text style={styles.nextLabel}>Próximo projeto</Text>
        <ProjectCard
          project={next}
          index={projects.indexOf(next)}
          compact
          onPress={() => navigation.push("Project", { id: next.id })}
        />
      </FadeIn>
    </Screen>
  );
}

const styles = StyleSheet.create({
  coverShell: {
    marginTop: space.sm,
    padding: 5,
    borderRadius: radii.shell,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: "rgba(242, 239, 232, 0.03)",
  },
  coverCore: {
    borderRadius: radii.core,
    overflow: "hidden",
  },
  head: {
    gap: 12,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 42,
    lineHeight: 46,
    letterSpacing: -1.2,
    color: colors.paper,
  },
  tagline: {
    fontFamily: fonts.bodyRegular,
    fontSize: 16.5,
    lineHeight: 26,
    color: colors.muted,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  section: {
    gap: space.md,
  },
  sectionTight: {
    gap: space.xs,
  },
  summary: {
    fontFamily: fonts.bodyRegular,
    fontSize: 15,
    lineHeight: 24,
    color: colors.muted,
  },
  nextLabel: {
    fontFamily: fonts.mono,
    fontSize: 11,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    color: colors.faint,
  },
  missing: {
    gap: 12,
    paddingTop: space.xxl,
  },
});
