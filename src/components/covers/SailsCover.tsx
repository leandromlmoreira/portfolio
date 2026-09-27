import { Circle, Defs, G, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import type { CoverProps } from "./types";

export function SailsCover({ uid }: CoverProps) {
  return (
    <G>
      <Defs>
        <LinearGradient id={`${uid}-sailsBrand`} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#FFB547" />
          <Stop offset="0.5" stopColor="#FF6A3D" />
          <Stop offset="1" stopColor="#F0386B" />
        </LinearGradient>
        <LinearGradient id={`${uid}-sailsCard`} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#1A1C26" />
          <Stop offset="1" stopColor="#0E0F16" />
        </LinearGradient>
      </Defs>
      <Rect width="320" height="200" fill="#07080D" />
      <Circle cx="262" cy="36" r="80" fill="#F0386B" opacity="0.12" />
      <Circle cx="70" cy="190" r="90" fill="#7B8CFF" opacity="0.1" />
      <G transform="rotate(-8 170 104)">
        <Rect x="92" y="46" width="176" height="110" rx="14" fill={`url(#${uid}-sailsCard)`} stroke="#F5F3EE" strokeOpacity="0.12" />
        <Path d="M122 124 L 146 64 L 146 124 Z" fill={`url(#${uid}-sailsBrand)`} />
        <Path d="M150 124 L 150 80 L 168 124 Z" fill="#F5F3EE" opacity="0.85" />
        <Rect x="118" y="130" width="54" height="3" rx="1.5" fill="#F5F3EE" opacity="0.5" />
        <Rect x="200" y="132" width="44" height="6" rx="3" fill="#F5F3EE" opacity="0.2" />
        <Rect x="200" y="62" width="30" height="22" rx="4" fill="#FFB547" opacity="0.7" />
      </G>
      <Path d="M0 176 Q 40 168 80 176 T 160 176 T 240 176 T 320 176 V 200 H 0 Z" fill="#F5F3EE" opacity="0.05" />
    </G>
  );
}
