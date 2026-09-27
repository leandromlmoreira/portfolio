import { ScrollView, StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { links, profile, sourceUrl } from "../data/profile";
import { featuredProjects, projects } from "../data/projects";
import { countStacks } from "../lib/stacks";
import { openLink } from "../lib/openLink";
import { Screen } from "../components/Screen";
import { Glow } from "../components/Glow";
import { FadeIn } from "../components/FadeIn";
import { Monogram } from "../components/Monogram";
import { Eyebrow } from "../components/Eyebrow";
import { PillButton } from "../components/PillButton";
import { StatStrip, type Stat } from "../components/StatStrip";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { LinkList } from "../components/LinkList";
import { PressableScale } from "../components/PressableScale";
import { ThemeToggle } from "../components/ThemeToggle";
import { Icon } from "../components/icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, space } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const stacks = countStacks(projects);
const railCard = 272;
const railGap = 12;

const stats: Stat[] = [
  { value: String(projects.length), label: "projetos no ar" },
  { value: String(stacks.length), label: "tecnologias" },
  { value: `${stacks[0].count}/${projects.length}`, label: `em ${stacks[0].name}` },
];

function Hero() {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();
  return (
    <View style={styles.hero}>
      <Eyebrow label={profile.role} />
      <Text style={styles.name} accessibilityRole="header">
        {profile.firstName}
        {"\n"}
        <Text style={styles.nameItalic}>{profile.lastName}</Text>
      </Text>
      <View style={styles.location}>
        <Icon name="pin" size={14} color={palette.faint} />
        <Text style={styles.locationText}>{profile.location}</Text>
      </View>
      <Text style={styles.intro}>{profile.intro}</Text>
    </View>
  );
}

export default function HomeScreen({ navigation }: Props) {
  const styles = useStyles(createStyles);

  return (
    <Screen backdrop={<Glow />}>
      <FadeIn style={styles.header}>
        <Monogram size={40} />
        <Text style={styles.handle}>{profile.handle}</Text>
        <ThemeToggle />
      </FadeIn>

      <FadeIn order={1}>
        <Hero />
      </FadeIn>

      <FadeIn order={2} style={styles.actions}>
        <PillButton label="Ver projetos" icon="arrowRight" grow onPress={() => navigation.navigate("Projects")} />
        <PillButton label="Skills" icon="arrowRight" variant="ghost" onPress={() => navigation.navigate("Skills")} />
      </FadeIn>

      <FadeIn order={3}>
        <StatStrip stats={stats} />
      </FadeIn>

      <FadeIn order={4} style={styles.section}>
        <SectionTitle
          title="Selecionados"
          meta={`${String(featuredProjects.length).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`}
          caption="Deslize para ver, toque para abrir."
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={railCard + railGap}
          decelerationRate="fast"
          style={styles.rail}
          contentContainerStyle={styles.railContent}
        >
          {featuredProjects.map((project) => (
            <View key={project.id} style={styles.railItem}>
              <ProjectCard
                project={project}
                index={projects.indexOf(project)}
                compact
                onPress={() => navigation.navigate("Project", { id: project.id })}
              />
            </View>
          ))}
        </ScrollView>
        <PillButton
          label={`Todos os ${projects.length} projetos`}
          icon="arrowRight"
          variant="ghost"
          onPress={() => navigation.navigate("Projects")}
        />
      </FadeIn>

      <FadeIn order={5} style={styles.section}>
        <SectionTitle title="Onde me encontrar" />
        <LinkList items={links} />
      </FadeIn>

      <PressableScale onPress={() => openLink(sourceUrl)} label="Ver o código deste app" role="link">
        {({ hovered }) => (
          <Text style={styles.footer}>
            Feito em React Native + Expo ·{" "}
            <Text style={[styles.footerLink, hovered && styles.footerLinkHover]}>ver o código</Text>
          </Text>
        )}
      </PressableScale>
    </Screen>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    handle: {
      flex: 1,
      fontFamily: fonts.mono,
      fontSize: 12,
      color: c.muted,
    },
    hero: {
      gap: 18,
    },
    name: {
      fontFamily: fonts.display,
      fontSize: 68,
      lineHeight: 64,
      letterSpacing: -1.6,
      color: c.ink,
      paddingTop: 8,
    },
    nameItalic: {
      fontFamily: fonts.displayItalic,
      color: c.accent,
    },
    location: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    locationText: {
      fontFamily: fonts.body,
      fontSize: 13.5,
      color: c.faint,
    },
    intro: {
      fontFamily: fonts.body,
      fontSize: 16.5,
      lineHeight: 26,
      color: c.muted,
    },
    actions: {
      flexDirection: "row",
      gap: 10,
    },
    section: {
      gap: space.lg,
    },
    rail: {
      marginHorizontal: -space.gutter,
    },
    railContent: {
      paddingHorizontal: space.gutter,
      gap: railGap,
    },
    railItem: {
      width: railCard,
    },
    footer: {
      fontFamily: fonts.body,
      fontSize: 12.5,
      color: c.faint,
      textAlign: "center",
    },
    footerLink: {
      color: c.ink,
      textDecorationLine: "underline",
    },
    footerLinkHover: {
      color: c.accent,
    },
  });
