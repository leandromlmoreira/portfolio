import { StyleSheet, Text } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { skillGroups } from "../data/skills";
import { projects } from "../data/projects";
import { Screen } from "../components/Screen";
import { TopBar } from "../components/TopBar";
import { FadeIn } from "../components/FadeIn";
import { SkillGroupCard } from "../components/SkillGroupCard";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { fonts, space } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Skills">;

export default function SkillsScreen({ navigation }: Props) {
  const styles = useStyles(createStyles);
  return (
    <Screen header={<TopBar title="Skills" onBack={navigation.goBack} />}>
      <FadeIn style={styles.intro}>
        <Text style={styles.title} accessibilityRole="header">
          Com o que <Text style={styles.titleItalic}>trabalho</Text>
        </Text>
        <Text style={styles.lead}>
          Sem barra de porcentagem: cada tecnologia mostra em quais projetos ela aparece. Toque para ver.
        </Text>
      </FadeIn>

      {skillGroups.map((group, index) => (
        <FadeIn key={group.title} order={index + 1} style={styles.group}>
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
    group: {
      marginTop: -space.lg,
    },
  });
