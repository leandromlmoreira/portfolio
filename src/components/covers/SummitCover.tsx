import { Defs, G, LinearGradient, Rect, Stop } from "react-native-svg";
import type { CoverProps } from "./types";

const steps = [
  [0, 168, 320, 32, "#2B1B3D"],
  [20, 148, 250, 20, "#3C2552"],
  [48, 128, 200, 20, "#4E2F66"],
  [76, 108, 150, 20, "#63397A"],
  [104, 88, 104, 20, "#7A4590"],
  [128, 68, 60, 20, "#9352A3"],
  [144, 52, 28, 16, "#B061B5"],
] as const;

const stars = [
  [24, 20],
  [60, 42],
  [96, 16],
  [212, 24],
  [252, 46],
  [292, 18],
  [276, 70],
];

const bands = ["#1B1033", "#2C1745", "#4A1F55", "#78305A", "#B04A55", "#E27A4C"];

export function SummitCover({ uid }: CoverProps) {
  return (
    <G>
      <Defs>
        <LinearGradient id={`${uid}-summitLight`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#FFB23F" stopOpacity="0" />
          <Stop offset="1" stopColor="#FFB23F" stopOpacity="0.3" />
        </LinearGradient>
      </Defs>
      {bands.map((color, index) => (
        <Rect key={color} x="0" y={index * 28} width="320" height="30" fill={color} />
      ))}
      <Rect x="0" y="100" width="320" height="100" fill={`url(#${uid}-summitLight)`} />
      <G fill="#FFF3C4">
        {stars.map(([x, y]) => (
          <Rect key={`${x}-${y}`} x={x} y={y} width="3" height="3" />
        ))}
      </G>
      {steps.map(([x, y, w, h, color]) => (
        <Rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} fill={color} />
      ))}
      <G fill="#FFB23F">
        {steps.slice(1).map(([x, y]) => (
          <Rect key={`lamp${x}`} x={x + 6} y={y - 6} width="4" height="6" />
        ))}
      </G>
      <Rect x="157" y="24" width="3" height="28" fill="#F2EFE8" />
      <Rect x="160" y="24" width="18" height="11" fill="#FFB23F" />
      <Rect x="112" y="80" width="8" height="8" fill="#F2EFE8" />
      <Rect x="110" y="72" width="12" height="8" fill="#FFB23F" />
    </G>
  );
}
