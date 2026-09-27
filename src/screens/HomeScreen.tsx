import { ScrollView, StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { links, profile, sourceUrl } from "../data/profile";
import { projects } from "../data/projects";
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
import { Icon } from "../components/icons/Icon";
import { colors, fonts, space } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const stacks = countStacks(projects);

const stats: Stat[] = [
  { value: String(projects.length), label: "projetos no ar" },
  { value: String(stacks.length), label: "tecnologias usadas" },
  { value: `${stacks[0].count}/${projects.length}`, label: `em ${stacks[0].name}` },
];

function Hero() {
  return (
    <View style={styles.hero}>
      <Eyebrow label={profile.role} />
      <Text style={styles.name} accessibilityRole="header">
        {profile.firstName}
        {"\n"}
        {profile.lastName}
        <Text style={styles.dot}>.</Text>
      </Text>
      <View style={styles.location}>
        <Icon name="pin" size={15} color={colors.faint} />
        <Text style={styles.locationText}>{profile.location}</Text>
      </View>
      <Text style={styles.intro}>{profile.intro}</Text>
    </View>
  );
}

export default function HomeScreen({ navigation }: Props) {
  return (
    <Screen backdrop={<Glow color={colors.signal} />}>
      <FadeIn style={styles.header}>
        <Monogram size={42} />
        <Text style={styles.handle}>{profile.handle}</Text>
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
        <SectionTitle title="Em destaque" caption="Deslize para ver, toque para abrir." />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={284}
          decelerationRate="fast"
          style={styles.rail}
          contentContainerStyle={styles.railContent}
        >
          {projects.map((project, index) => (
            <View key={project.id} style={styles.railItem}>
              <ProjectCard
                project={project}
                index={index}
                compact
                onPress={() => navigation.navigate("Project", { id: project.id })}
              />
            </View>
          ))}
        </ScrollView>
      </FadeIn>

      <FadeIn order={5} style={styles.section}>
        <SectionTitle title="Onde me encontrar" />
        <LinkList items={links} />
      </FadeIn>

      <PressableScale onPress={() => openLink(sourceUrl)} label="Ver o código deste app" role="link">
        <Text style={styles.footer}>
          Feito em React Native + Expo · <Text style={styles.footerLink}>ver o código</Text>
        </Text>
      </PressableScale>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  handle: {
    fontFamily: fonts.mono,
    fontSize: 12,
    color: colors.muted,
  },
  hero: {
    gap: 18,
  },
  name: {
    fontFamily: fonts.display,
    fontSize: 44,
    lineHeight: 48,
    letterSpacing: -1.4,
    color: colors.paper,
    paddingTop: 4,
  },
  dot: {
    color: colors.signal,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  locationText: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    color: colors.faint,
  },
  intro: {
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
    gap: space.lg,
  },
  rail: {
    marginHorizontal: -space.gutter,
  },
  railContent: {
    paddingHorizontal: space.gutter,
    gap: 12,
  },
  railItem: {
    width: 272,
  },
  footer: {
    fontFamily: fonts.body,
    fontSize: 12.5,
    color: colors.faint,
    textAlign: "center",
  },
  footerLink: {
    color: colors.paper,
    textDecorationLine: "underline",
  },
});
