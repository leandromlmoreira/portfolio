import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { findProject, liveHost, projects } from "../data/projects";
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
import { PressableScale } from "../components/PressableScale";
import { Icon } from "../components/icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, radii, space } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Project">;

const fitTitle = (name: string) => {
  const fontSize = name.length > 12 ? 50 : 58;
  return { fontSize, lineHeight: Math.round(fontSize * 1.02) };
};

const pad = (value: number) => String(value).padStart(2, "0");

function NotFound({ onBack }: { onBack: () => void }) {
  const styles = useStyles(createStyles);
  return (
    <Screen header={<TopBar title="Projeto" onBack={onBack} />}>
      <View style={styles.missing}>
        <Text style={styles.title}>Projeto não encontrado</Text>
        <Text style={styles.summary}>Esse link não aponta para nenhum projeto da lista.</Text>
      </View>
    </Screen>
  );
}

function LiveAddress({ url, host }: { url: string; host: string }) {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();
  return (
    <PressableScale onPress={() => openLink(url)} label={`Abrir ${host}`} role="link" pressedScale={0.985}>
      {({ hovered }) => (
        <View style={[styles.address, hovered && styles.addressHover]}>
          <View style={styles.liveDot} />
          <Text style={styles.addressText} numberOfLines={1}>
            {host}
          </Text>
          <Icon name="arrowUpRight" size={13} color={hovered ? palette.ink : palette.faint} />
        </View>
      )}
    </PressableScale>
  );
}

export default function ProjectScreen({ navigation, route }: Props) {
  const styles = useStyles(createStyles);
  const project = findProject(route.params.id);

  if (!project) {
    return <NotFound onBack={navigation.goBack} />;
  }

  const position = projects.indexOf(project);
  const next = projects[(position + 1) % projects.length];

  return (
    <Screen
      backdrop={<Glow color={project.accent} height={560} />}
      header={
        <TopBar
          title={project.kicker}
          trailing={`${pad(position + 1)} / ${pad(projects.length)}`}
          onBack={navigation.goBack}
        />
      }
    >
      <FadeIn style={styles.coverCard}>
        <ProjectCover project={project} ratio={4 / 3} withPhone />
      </FadeIn>

      <FadeIn order={1} style={styles.head}>
        <Text style={[styles.title, fitTitle(project.name)]} accessibilityRole="header">
          {project.name}
        </Text>
        <Text style={styles.tagline}>{project.tagline}</Text>
        <LiveAddress url={project.live} host={liveHost(project)} />
      </FadeIn>

      <FadeIn order={2} style={styles.actions}>
        <PillButton label="Ver ao vivo" variant="accent" grow role="link" onPress={() => openLink(project.live)} />
        <PillButton label="Código" icon="code" variant="ghost" role="link" onPress={() => openLink(project.repo)} />
      </FadeIn>

      <FadeIn order={3} style={styles.section}>
        <SectionTitle title="Sobre" />
        <Text style={styles.summary}>{project.summary}</Text>
      </FadeIn>

      <FadeIn order={4} style={styles.sectionTight}>
        <SectionTitle title="Destaques" />
        <HighlightList items={project.highlights} />
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

const createStyles = (c: Palette) =>
  StyleSheet.create({
    coverCard: {
      borderRadius: radii.core,
      borderWidth: 1,
      borderColor: c.line,
      overflow: "hidden",
    },
    head: {
      gap: 14,
      marginTop: -space.md,
    },
    title: {
      fontFamily: fonts.display,
      fontSize: 56,
      lineHeight: 58,
      letterSpacing: -1,
      color: c.ink,
    },
    tagline: {
      fontFamily: fonts.body,
      fontSize: 16.5,
      lineHeight: 26,
      color: c.muted,
    },
    address: {
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      gap: 7,
      maxWidth: "100%",
      paddingHorizontal: 10,
      paddingVertical: 7,
      borderRadius: radii.pill,
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.surface,
    },
    addressHover: {
      borderColor: c.lineStrong,
    },
    liveDot: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: c.live,
    },
    addressText: {
      flexShrink: 1,
      fontFamily: fonts.mono,
      fontSize: 10.5,
      letterSpacing: -0.2,
      color: c.muted,
    },
    actions: {
      flexDirection: "row",
      gap: 10,
      marginTop: -space.md,
    },
    section: {
      gap: space.md,
    },
    sectionTight: {
      gap: space.xs,
    },
    summary: {
      fontFamily: fonts.body,
      fontSize: 15,
      lineHeight: 24,
      color: c.muted,
    },
    nextLabel: {
      fontFamily: fonts.monoMedium,
      fontSize: 11,
      letterSpacing: 1.4,
      textTransform: "uppercase",
      color: c.faint,
    },
    missing: {
      gap: 12,
      paddingTop: space.xxl,
    },
  });
