import { StyleSheet, View } from "react-native";
import { useSvgId } from "../hooks/useSvgId";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

type Props = {
  color: string;
  height?: number;
};

export function Glow({ color, height = 420 }: Props) {
  const id = useSvgId("glow");
  return (
    <View pointerEvents="none" style={[styles.layer, { height }]}>
      <Svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
        <Defs>
          <RadialGradient id={id} cx="0.78" cy="0.05" rx="0.9" ry="0.75" fx="0.78" fy="0.05">
            <Stop offset="0" stopColor={color} stopOpacity="0.22" />
            <Stop offset="0.5" stopColor={color} stopOpacity="0.05" />
            <Stop offset="1" stopColor={color} stopOpacity="0" />
          </RadialGradient>
        </Defs>
        <Rect width="100" height="100" fill={`url(#${id})`} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});
