import type { ComponentType } from "react";
import { StyleSheet, View, type StyleProp, type ViewStyle } from "react-native";
import Svg from "react-native-svg";
import type { CoverKind } from "../data/projects";
import { BeaconCover } from "./covers/BeaconCover";
import { SailsCover } from "./covers/SailsCover";
import { SchemaCover } from "./covers/SchemaCover";
import { TerminalCover } from "./covers/TerminalCover";
import { HalftoneCover } from "./covers/HalftoneCover";
import { SummitCover } from "./covers/SummitCover";
import type { CoverProps } from "./covers/types";
import { useSvgId } from "../hooks/useSvgId";

const covers: Record<CoverKind, ComponentType<CoverProps>> = {
  beacon: BeaconCover,
  sails: SailsCover,
  schema: SchemaCover,
  terminal: TerminalCover,
  halftone: HalftoneCover,
  summit: SummitCover,
};

type Props = {
  kind: CoverKind;
  ratio?: number;
  style?: StyleProp<ViewStyle>;
};

export function ProjectCover({ kind, ratio = 16 / 10, style }: Props) {
  const Artwork = covers[kind];
  const uid = useSvgId("cover");

  return (
    <View style={[styles.frame, { aspectRatio: ratio }, style]} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
      <Svg width="100%" height="100%" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice">
        <Artwork uid={uid} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: "100%",
    overflow: "hidden",
  },
});
