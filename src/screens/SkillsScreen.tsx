import { StyleSheet, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { skillGroups } from "../data/skills";
import { projects } from "../data/projects";
import { Screen } from "../components/Screen";
import { TopBar } from "../components/TopBar";
import { FadeIn } from "../components/FadeIn";
import { SkillGroupCard } from "../components/SkillGroupCard";
import { colors, fonts, space } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Skills">;

export default function SkillsScreen({ navigation }: Props) {
  return (
    <Screen header={<TopBar title="Skills" onBack={navigation.goBack} />}>
      <FadeIn style={styles.intro}>
        <Text style={styles.title} accessibilityRole="header">
          Com o que{"\n"}trabalho<Text style={styles.dot}>.</Text>
        </Text>
        <Text style={styles.lead}>
          Sem barra de porcentagem: cada tecnologia mostra em quais projetos ela aparece. Toque para ver.
        </Text>
      </FadeIn>

      {skillGroups.map((group, index) => (
        <FadeIn key={group.title} order={index + 1}>
          <SkillGroupCard
            group={group}
            projects={projects}
            onOpenStack={(stack) => navigation.navigate("Projects", { stack })}
          />
        </FadeIn>
      ))}
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
  dot: {
    color: colors.signal,
  },
});
