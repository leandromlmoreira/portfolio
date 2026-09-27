import { StyleSheet, View } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import { useSvgId } from "../hooks/useSvgId";
import { useTheme } from "../theme/ThemeProvider";

type Props = {
  color?: string;
  height?: number;
};

export function Glow({ color, height = 420 }: Props) {
  const id = useSvgId("glow");
  const { palette } = useTheme();
  const tone = color ?? palette.accent;

  return (
    <View pointerEvents="none" style={[styles.layer, { height }]}>
      <Svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
        <Defs>
          <RadialGradient id={id} cx="0.82" cy="0" rx="0.9" ry="0.8" fx="0.82" fy="0">
            <Stop offset="0" stopColor={tone} stopOpacity={palette.glow} />
            <Stop offset="0.55" stopColor={tone} stopOpacity={palette.glow * 0.25} />
            <Stop offset="1" stopColor={tone} stopOpacity="0" />
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
