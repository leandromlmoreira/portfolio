import { Circle, G, Path, Rect } from "react-native-svg";

const dots = Array.from({ length: 14 * 9 }, (_, index) => {
  const column = index % 14;
  const row = Math.floor(index / 14);
  return { x: 10 + column * 22 + (row % 2) * 11, y: 10 + row * 22, r: 1.4 + ((column + row) % 5) * 0.7 };
});

const burst = Array.from({ length: 24 }, (_, index) => {
  const angle = (index / 24) * Math.PI * 2;
  const radius = index % 2 ? 26 : 44;
  return `${(250 + Math.cos(angle) * radius).toFixed(1)},${(62 + Math.sin(angle) * radius).toFixed(1)}`;
}).join(" ");

export function HalftoneCover() {
  return (
    <G>
      <Rect width="320" height="200" fill="#FFE14D" />
      <G fill="#FF3D7F" opacity="0.5">
        {dots.map((dot) => (
          <Circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r={dot.r} />
        ))}
      </G>
      <Path d="M0 0 H150 L 120 200 H0 Z" fill="#111" />
      <Path d="M156 0 H164 L 134 200 H126 Z" fill="#FFF" />
      <Circle cx="80" cy="104" r="48" fill="#00C2FF" opacity="0.9" />
      <Circle cx="90" cy="98" r="48" fill="#FF3D7F" opacity="0.85" />
      <Circle cx="85" cy="101" r="30" fill="#111" />
      <Path d={`M${burst}Z`} fill="#FFF" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
      <Rect x="232" y="54" width="36" height="6" rx="3" fill="#111" />
      <Rect x="238" y="66" width="24" height="5" rx="2.5" fill="#FF3D7F" />
      <Path d="M186 150 L 300 132 L 304 176 L 196 186 Z" fill="#111" />
      <Path d="M200 158 L 290 145" stroke="#FFE14D" strokeWidth="5" strokeLinecap="round" />
      <Path d="M204 172 L 262 164" stroke="#00C2FF" strokeWidth="5" strokeLinecap="round" />
    </G>
  );
}
