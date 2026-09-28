import type { ReactNode } from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Svg, { Defs, Path, Pattern, Rect } from "react-native-svg";
import { links, profile, sourceUrl } from "../data/profile";
import { projects } from "../data/projects";
import { openLink } from "../lib/openLink";
import { Glow } from "./Glow";
import { Monogram } from "./Monogram";
import { Eyebrow } from "./Eyebrow";
import { PillButton } from "./PillButton";
import { FadeIn } from "./FadeIn";
import { PressableScale } from "./PressableScale";
import { ThemeToggle } from "./ThemeToggle";
import { Icon } from "./icons/Icon";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { useTheme } from "../theme/ThemeProvider";
import { fonts, radii } from "../theme/tokens";

const screenWidth = 390;

function Grid() {
  const { palette } = useTheme();
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Svg width="100%" height="100%">
        <Defs>
          <Pattern id="stageGrid" width="64" height="64" patternUnits="userSpaceOnUse">
            <Path d="M64 0H0V64" fill="none" stroke={palette.ink} strokeOpacity="0.045" strokeWidth="1" />
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#stageGrid)" />
      </Svg>
    </View>
  );
}

type IndexRowProps = {
  index: number;
  active: boolean;
  dense: boolean;
  onOpen: (id: string) => void;
};

function IndexRow({ index, active, dense, onOpen }: IndexRowProps) {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();
  const project = projects[index];

  return (
    <PressableScale
      onPress={() => onOpen(project.id)}
      label={`Abrir ${project.name} no aparelho`}
      selected={active}
      pressedScale={0.97}
      style={({ hovered, focused }) => [
        styles.indexRow,
        dense && styles.indexRowDense,
        (hovered || active) && styles.indexRowHover,
        focused && styles.focus,
      ]}
    >
      {({ hovered }) => (
        <>
          <Text style={styles.indexNumber}>{String(index + 1).padStart(2, "0")}</Text>
          <View style={[styles.indexSwatch, { backgroundColor: project.accent }]} />
          <Text style={[styles.indexName, (hovered || active) && styles.indexNameHover]} numberOfLines={1}>
            {project.name}
          </Text>
          {active && !hovered ? (
            <Text style={styles.indexNow}>no aparelho</Text>
          ) : (
            <View style={[styles.indexArrow, hovered && styles.indexArrowHover]}>
              <Icon name="arrowRight" size={14} color={palette.ink} />
            </View>
          )}
        </>
      )}
    </PressableScale>
  );
}

type ProjectIndexProps = {
  active: string | null;
  dense: boolean;
  onOpen: (id: string) => void;
};

function ProjectIndex({ active, dense, onOpen }: ProjectIndexProps) {
  const styles = useStyles(createStyles);
  return (
    <View style={styles.index}>
      <Text style={styles.indexTitle}>Índice · {projects.length} projetos no ar</Text>
      <View style={styles.indexGrid}>
        {projects.map((project, index) => (
          <View key={project.id} style={styles.indexCell}>
            <IndexRow index={index} active={project.id === active} dense={dense} onOpen={onOpen} />
          </View>
        ))}
      </View>
    </View>
  );
}

function StatusBar() {
  const styles = useStyles(createStyles);
  const { palette } = useTheme();
  return (
    <View style={styles.statusBar}>
      <Text style={styles.clock}>9:41</Text>
      <View style={styles.island} />
      <View style={styles.statusIcons}>
        {[5, 8, 11].map((height) => (
          <View key={height} style={[styles.signalBar, { height, backgroundColor: palette.ink }]} />
        ))}
        <View style={styles.battery}>
          <View style={styles.batteryLevel} />
        </View>
      </View>
    </View>
  );
}

function Phone({ height, children }: { height: number; children: ReactNode }) {
  const styles = useStyles(createStyles);
  return (
    <View style={styles.phone}>
      <View style={[styles.sideButton, styles.sideAction]} />
      <View style={[styles.sideButton, styles.sideVolumeUp]} />
      <View style={[styles.sideButton, styles.sideVolumeDown]} />
      <View style={[styles.sideButton, styles.sidePower]} />
      <View style={styles.phoneShell}>
        <View style={[styles.phoneScreen, { height }]}>
          <StatusBar />
          <View style={styles.app}>{children}</View>
        </View>
      </View>
    </View>
  );
}

type StageProps = {
  children: ReactNode;
  activeProject: string | null;
  onOpenProject: (id: string) => void;
};

export function DesktopStage({ children, activeProject, onOpenProject }: StageProps) {
  const styles = useStyles(createStyles);
  const { width, height } = useWindowDimensions();
  const roomy = width >= 1280;
  const dense = height < 860;
  const phoneHeight = Math.max(640, Math.min(844, height - 96));
  const github = links[0];

  return (
    <View style={styles.stage}>
      <Grid />
      <Glow height={height} />
      <View style={[styles.columns, !roomy && styles.columnsCompact]}>
        <FadeIn style={styles.copy}>
          <View style={styles.brand}>
            <Monogram size={44} />
            <Eyebrow label="Portfólio mobile · React Native + Expo" />
            <View style={styles.spacer} />
            <ThemeToggle size={42} />
          </View>
          <Text style={[styles.title, !roomy && styles.titleCompact]} accessibilityRole="header">
            {profile.firstName} <Text style={styles.titleItalic}>{profile.lastName}</Text>
          </Text>
          <Text style={styles.lead}>
            {profile.role}. Este é o meu portfólio em forma de app: o mesmo código roda no celular e aqui no
            navegador. Escolha um projeto no índice ou navegue pelo aparelho.
          </Text>
          <ProjectIndex active={activeProject} dense={dense} onOpen={onOpenProject} />
          <View style={styles.actions}>
            <PillButton label="Perfil no GitHub" role="link" onPress={() => openLink(github.url)} />
            <PillButton
              label="Código deste app"
              icon="code"
              variant="ghost"
              role="link"
              onPress={() => openLink(sourceUrl)}
            />
          </View>
        </FadeIn>
        <FadeIn order={2} style={styles.device}>
          <Phone height={phoneHeight}>{children}</Phone>
        </FadeIn>
      </View>
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    stage: {
      flex: 1,
      backgroundColor: c.stage,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    columns: {
      flexDirection: "row",
      alignItems: "center",
      gap: 80,
      paddingHorizontal: 64,
      maxWidth: 1280,
      width: "100%",
      justifyContent: "space-between",
    },
    columnsCompact: {
      gap: 48,
      paddingHorizontal: 48,
    },
    copy: {
      flex: 1,
      maxWidth: 640,
      gap: 26,
    },
    brand: {
      flexDirection: "row",
      alignItems: "center",
      gap: 14,
    },
    spacer: {
      flex: 1,
    },
    title: {
      fontFamily: fonts.display,
      fontSize: 104,
      lineHeight: 100,
      letterSpacing: -3,
      color: c.ink,
    },
    titleCompact: {
      fontSize: 80,
      lineHeight: 80,
      letterSpacing: -2.2,
    },
    titleItalic: {
      fontFamily: fonts.displayItalic,
      color: c.accent,
    },
    lead: {
      fontFamily: fonts.body,
      fontSize: 17,
      lineHeight: 28,
      color: c.muted,
      maxWidth: 520,
    },
    index: {
      gap: 10,
    },
    indexTitle: {
      fontFamily: fonts.monoMedium,
      fontSize: 10.5,
      letterSpacing: 1.4,
      textTransform: "uppercase",
      color: c.faint,
    },
    indexGrid: {
      flexDirection: "row",
      flexWrap: "wrap",
      borderTopWidth: 1,
      borderTopColor: c.line,
      columnGap: 28,
    },
    indexCell: {
      width: "47%",
      borderBottomWidth: 1,
      borderBottomColor: c.line,
    },
    indexRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      height: 38,
      paddingHorizontal: 6,
      borderRadius: 8,
    },
    indexRowDense: {
      height: 33,
    },
    indexRowHover: {
      backgroundColor: c.hover,
    },
    focus: {
      outlineColor: c.accent,
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineOffset: 1,
    },
    indexNumber: {
      width: 20,
      fontFamily: fonts.mono,
      fontSize: 11,
      color: c.faint,
    },
    indexSwatch: {
      width: 7,
      height: 7,
      borderRadius: 3.5,
    },
    indexName: {
      flex: 1,
      fontFamily: fonts.body,
      fontSize: 14.5,
      color: c.ink,
    },
    indexNameHover: {
      transform: [{ translateX: 3 }],
    },
    indexNow: {
      fontFamily: fonts.mono,
      fontSize: 10.5,
      color: c.accent,
    },
    indexArrow: {
      opacity: 0,
      transform: [{ translateX: -4 }],
    },
    indexArrowHover: {
      opacity: 1,
      transform: [{ translateX: 0 }],
    },
    actions: {
      flexDirection: "row",
      gap: 12,
    },
    device: {
      alignItems: "center",
    },
    phone: {
      position: "relative",
    },
    phoneShell: {
      padding: 10,
      borderRadius: 60,
      backgroundColor: c.bezel,
      borderWidth: 1.5,
      borderColor: c.bezelEdge,
      shadowColor: c.shadow,
      shadowOpacity: c.scheme === "dark" ? 0.6 : 0.24,
      shadowRadius: 70,
      shadowOffset: { width: 0, height: 36 },
    },
    phoneScreen: {
      width: screenWidth,
      borderRadius: 50,
      overflow: "hidden",
      backgroundColor: c.bg,
    },
    sideButton: {
      position: "absolute",
      width: 4,
      borderRadius: 2,
      backgroundColor: c.bezelEdge,
    },
    sideAction: {
      left: -3,
      top: 128,
      height: 30,
    },
    sideVolumeUp: {
      left: -3,
      top: 180,
      height: 56,
    },
    sideVolumeDown: {
      left: -3,
      top: 248,
      height: 56,
    },
    sidePower: {
      right: -3,
      top: 200,
      height: 88,
    },
    statusBar: {
      height: 50,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 30,
      backgroundColor: c.bg,
    },
    clock: {
      width: 60,
      fontFamily: fonts.bodyStrong,
      fontSize: 15,
      color: c.ink,
    },
    island: {
      width: 112,
      height: 32,
      borderRadius: 16,
      backgroundColor: "#050505",
    },
    statusIcons: {
      width: 60,
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      gap: 2,
    },
    signalBar: {
      width: 3,
      borderRadius: 1,
    },
    battery: {
      marginLeft: 6,
      width: 24,
      height: 12,
      borderRadius: 3.5,
      borderWidth: 1,
      borderColor: c.faint,
      padding: 1.5,
    },
    batteryLevel: {
      flex: 1,
      width: "80%",
      borderRadius: 1.5,
      backgroundColor: c.ink,
    },
    app: {
      flex: 1,
    },
  });
