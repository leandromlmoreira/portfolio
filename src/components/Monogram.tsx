import Svg, { Circle, Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import { colors } from "../theme/tokens";
import { useSvgId } from "../hooks/useSvgId";

type Props = {
  size?: number;
};

export function Monogram({ size = 44 }: Props) {
  const id = useSvgId("monogram");
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" accessibilityLabel="Monograma LM">
      <Defs>
        <LinearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#1D2029" />
          <Stop offset="1" stopColor="#0C0D12" />
        </LinearGradient>
      </Defs>
      <Rect x="0.5" y="0.5" width="47" height="47" rx="15" fill={`url(#${id})`} stroke={colors.lineStrong} />
      <Path d="M13 14v20h9" stroke={colors.paper} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Path d="M24 34V14l6 11 6-11v20" stroke={colors.signal} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <Circle cx="38.5" cy="9.5" r="2.5" fill={colors.signal} />
    </Svg>
  );
}
