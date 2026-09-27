import { Circle, Defs, G, Line, LinearGradient, Path, RadialGradient, Rect, Stop } from "react-native-svg";
import type { CoverProps } from "./types";

const skyline = [
  [0, 150, 26, 50],
  [24, 128, 22, 72],
  [44, 158, 30, 42],
  [72, 112, 26, 88],
  [96, 140, 34, 60],
  [128, 122, 20, 78],
  [146, 162, 40, 38],
  [184, 134, 24, 66],
  [206, 104, 30, 96],
  [234, 146, 26, 54],
  [258, 126, 32, 74],
  [288, 154, 32, 46],
];

const windows = [
  [80, 124],
  [80, 140],
  [214, 118],
  [222, 134],
  [214, 158],
  [30, 142],
  [264, 140],
  [104, 154],
];

const rain = Array.from({ length: 22 }, (_, index) => [
  (index * 47) % 320,
  (index * 29) % 150,
]);

export function BeaconCover({ uid }: CoverProps) {
  return (
    <G>
      <Defs>
        <LinearGradient id={`${uid}-beaconSky`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#1C2440" />
          <Stop offset="1" stopColor="#090B14" />
        </LinearGradient>
        <LinearGradient id={`${uid}-beaconBeam`} x1="0" y1="1" x2="1" y2="0">
          <Stop offset="0" stopColor="#FFC247" stopOpacity="0.9" />
          <Stop offset="1" stopColor="#FFC247" stopOpacity="0.05" />
        </LinearGradient>
        <RadialGradient id={`${uid}-beaconHalo`} cx="0.5" cy="0.5" r="0.5">
          <Stop offset="0" stopColor="#FFE3A1" stopOpacity="0.95" />
          <Stop offset="0.55" stopColor="#FFC247" stopOpacity="0.35" />
          <Stop offset="1" stopColor="#FFC247" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect width="320" height="200" fill={`url(#${uid}-beaconSky)`} />
      <Path d="M-10 58 Q 60 36 130 52 T 330 44 L 330 84 Q 240 70 150 80 T -10 86 Z" fill="#2A3358" opacity="0.55" />
      <Path d="M112 200 L 196 44 L 262 62 L 124 200 Z" fill={`url(#${uid}-beaconBeam)`} />
      <Circle cx="232" cy="52" r="46" fill={`url(#${uid}-beaconHalo)`} />
      <Circle cx="232" cy="52" r="17" fill="#FFE9B8" opacity="0.9" />
      <G stroke="#9FB0E0" strokeOpacity="0.28" strokeWidth="1">
        {rain.map(([x, y]) => (
          <Line key={`${x}-${y}`} x1={x} y1={y} x2={x - 4} y2={y + 12} />
        ))}
      </G>
      <G fill="#05060B">
        {skyline.map(([x, y, w, h]) => (
          <Rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} />
        ))}
      </G>
      <G fill="#FFC247" opacity="0.8">
        {windows.map(([x, y]) => (
          <Rect key={`${x}-${y}`} x={x} y={y} width="4" height="5" />
        ))}
      </G>
      <Rect x="112" y="196" width="16" height="4" fill="#FFC247" />
    </G>
  );
}
