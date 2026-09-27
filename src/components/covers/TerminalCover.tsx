import { Circle, Defs, G, LinearGradient, Rect, Stop } from "react-native-svg";
import type { CoverProps } from "./types";

const code = [
  [0, 58, "#7CFF9B"],
  [1, 90, "#CFE9D5"],
  [2, 72, "#CFE9D5"],
  [2, 40, "#FFB86B"],
  [1, 30, "#CFE9D5"],
  [0, 20, "#7CFF9B"],
] as const;

const scanlines = Array.from({ length: 50 }, (_, index) => index * 4);

export function TerminalCover({ uid }: CoverProps) {
  return (
    <G>
      <Defs>
        <LinearGradient id={`${uid}-terminalGlow`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#10301C" />
          <Stop offset="1" stopColor="#06120A" />
        </LinearGradient>
      </Defs>
      <Rect width="320" height="200" fill="#040A06" />
      <Rect x="36" y="22" width="248" height="156" rx="18" fill={`url(#${uid}-terminalGlow)`} stroke="#7CFF9B" strokeOpacity="0.25" />
      <G>
        <Circle cx="56" cy="40" r="3.5" fill="#FF6B5E" opacity="0.8" />
        <Circle cx="68" cy="40" r="3.5" fill="#FFC247" opacity="0.8" />
        <Circle cx="80" cy="40" r="3.5" fill="#7CFF9B" opacity="0.8" />
        <Rect x="186" y="36" width="80" height="8" rx="4" fill="#7CFF9B" opacity="0.12" />
      </G>
      {code.map(([indent, width, color], line) => (
        <Rect
          key={line}
          x={58 + indent * 16}
          y={62 + line * 16}
          width={width}
          height="6"
          rx="3"
          fill={color}
          opacity={line === 3 ? 0.9 : 0.55}
        />
      ))}
      <Rect x="58" y="160" width="9" height="11" fill="#7CFF9B" />
      <Rect x="200" y="96" width="64" height="60" rx="8" fill="#7CFF9B" opacity="0.08" stroke="#7CFF9B" strokeOpacity="0.35" />
      <G fill="#7CFF9B" opacity="0.75">
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((column) => (
            <Rect key={`${row}${column}`} x={210 + column * 16} y={104 + row * 16} width="12" height="12" rx="2" opacity={(row + column) % 2 ? 0.35 : 0.8} />
          )),
        )}
      </G>
      <G fill="#000" opacity="0.18">
        {scanlines.map((y) => (
          <Rect key={y} x="0" y={y} width="320" height="1.4" />
        ))}
      </G>
    </G>
  );
}
