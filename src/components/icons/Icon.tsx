import Svg, { Circle, Path } from "react-native-svg";

export type IconName = "arrowUpRight" | "arrowRight" | "arrowLeft" | "code" | "globe" | "pin";

type Props = {
  name: IconName;
  size?: number;
  color: string;
};

const strokes: Record<IconName, string[]> = {
  arrowUpRight: ["M7 17 17 7", "M8.5 7H17v8.5"],
  arrowRight: ["M4.5 12h15", "M13.5 6l6 6-6 6"],
  arrowLeft: ["M19.5 12h-15", "M10.5 6l-6 6 6 6"],
  code: ["M8.5 7 3.5 12l5 5", "M15.5 7l5 5-5 5", "M13.5 4.5l-3 15"],
  globe: ["M3.5 12h17", "M12 3.5c2.6 2.4 3.9 5.2 3.9 8.5s-1.3 6.1-3.9 8.5", "M12 3.5C9.4 5.9 8.1 8.7 8.1 12s1.3 6.1 3.9 8.5"],
  pin: ["M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"],
};

export function Icon({ name, size = 18, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {strokes[name].map((d) => (
        <Path key={d} d={d} stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {name === "globe" && <Circle cx={12} cy={12} r={8.5} stroke={color} strokeWidth={1.6} />}
      {name === "pin" && <Circle cx={12} cy={10} r={2.2} stroke={color} strokeWidth={1.6} />}
    </Svg>
  );
}
