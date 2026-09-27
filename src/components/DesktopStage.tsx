import type { ReactNode } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Svg, { Circle, Defs, Pattern, Rect } from "react-native-svg";
import { links, profile, sourceUrl } from "../data/profile";
import { projects } from "../data/projects";
import { openLink } from "../lib/openLink";
import { Glow } from "./Glow";
import { Monogram } from "./Monogram";
import { Eyebrow } from "./Eyebrow";
import { PillButton } from "./PillButton";
import { FadeIn } from "./FadeIn";
import { PressableScale } from "./PressableScale";
import { colors, fonts } from "../theme/tokens";

const screenWidth = 390;

function DotGrid() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Svg width="100%" height="100%">
        <Defs>
          <Pattern id="stageDots" width="28" height="28" patternUnits="userSpaceOnUse">
            <Circle cx="2" cy="2" r="1" fill={colors.paper} opacity="0.07" />
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#stageDots)" />
      </Svg>
    </View>
  );
}

function ProjectIndex({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <View style={styles.index}>
      {projects.map((project) => (
        <PressableScale
          key={project.id}
          onPress={() => onOpen(project.id)}
          label={`Abrir ${project.name} no aparelho`}
          pressedScale={0.95}
          style={({ hovered }) => [styles.indexItem, hovered && { borderColor: project.accent }]}
        >
          <View style={[styles.indexDot, { backgroundColor: project.accent }]} />
          <Text style={styles.indexText}>{project.name}</Text>
        </PressableScale>
      ))}
    </View>
  );
}

function Phone({ height, children }: { height: number; children: ReactNode }) {
  return (
    <View style={styles.phoneShell}>
      <View style={[styles.phoneScreen, { height }]}>
        <View style={styles.statusBar}>
          <View style={styles.island} />
        </View>
        <View style={styles.app}>{children}</View>
      </View>
    </View>
  );
}

type StageProps = {
  children: ReactNode;
  onOpenProject: (id: string) => void;
};

export function DesktopStage({ children, onOpenProject }: StageProps) {
  const { height } = useWindowDimensions();
  const phoneHeight = Math.max(640, Math.min(844, height - 72));
  const github = links[0];

  return (
    <View style={styles.stage}>
      <DotGrid />
      <Glow color={colors.signal} height={height} />
      <View style={styles.columns}>
        <FadeIn style={styles.copy}>
          <Monogram size={52} />
          <Eyebrow label="Portfólio mobile · React Native + Expo" />
          <Text style={styles.title}>
            {profile.firstName} {profile.lastName}
            <Text style={styles.dot}>.</Text>
          </Text>
          <Text style={styles.lead}>
            {profile.role}. Este é o meu portfólio em forma de app: o mesmo código roda no celular e aqui no navegador.
            Toque num projeto abaixo ou navegue pelo aparelho ao lado.
          </Text>
          <ProjectIndex onOpen={onOpenProject} />
          <View style={styles.actions}>
            <PillButton label="Perfil no GitHub" onPress={() => openLink(github.url)} />
            <PillButton label="Código deste app" icon="code" variant="ghost" onPress={() => openLink(sourceUrl)} />
          </View>
        </FadeIn>
        <FadeIn order={2}>
          <Phone height={phoneHeight}>{children}</Phone>
        </FadeIn>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stage: {
    flex: 1,
    backgroundColor: colors.inkDeep,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  columns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 96,
    paddingHorizontal: 64,
    maxWidth: 1240,
    width: "100%",
    justifyContent: "space-between",
  },
  copy: {
    flex: 1,
    maxWidth: 620,
    gap: 28,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 84,
    lineHeight: 84,
    letterSpacing: -3.4,
    color: colors.paper,
  },
  dot: {
    color: colors.signal,
  },
  lead: {
    fontFamily: fonts.bodyRegular,
    fontSize: 18,
    lineHeight: 29,
    color: colors.muted,
    maxWidth: 480,
  },
  index: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  indexItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.line,
  },
  indexDot: {
    width: 7,
    height: 7,
    borderRadius: 2,
  },
  indexText: {
    fontFamily: fonts.body,
    fontSize: 13,
    color: colors.muted,
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  phoneShell: {
    padding: 11,
    borderRadius: 60,
    backgroundColor: "#1A1C22",
    borderWidth: 1,
    borderColor: "rgba(242, 239, 232, 0.14)",
    shadowColor: "#000",
    shadowOpacity: 0.55,
    shadowRadius: 60,
    shadowOffset: { width: 0, height: 30 },
  },
  phoneScreen: {
    width: screenWidth,
    borderRadius: 49,
    overflow: "hidden",
    backgroundColor: colors.ink,
  },
  statusBar: {
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.ink,
  },
  island: {
    width: 108,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#000",
  },
  app: {
    flex: 1,
  },
});
