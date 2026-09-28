import Svg, { Circle, Path } from "react-native-svg";

export type IconName = "arrowUpRight" | "arrowRight" | "arrowLeft" | "code" | "globe" | "pin" | "sun" | "moon" | "lock";

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
  sun: [
    "M12 2.75v1.9",
    "M12 19.35v1.9",
    "M2.75 12h1.9",
    "M19.35 12h1.9",
    "M5.46 5.46l1.34 1.34",
    "M17.2 17.2l1.34 1.34",
    "M5.46 18.54l1.34-1.34",
    "M17.2 6.8l1.34-1.34",
  ],
  moon: ["M20 14.6A8.2 8.2 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6Z"],
  lock: [
    "M6.5 10.5h11a1.5 1.5 0 0 1 1.5 1.5v6.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18.5V12a1.5 1.5 0 0 1 1.5-1.5Z",
    "M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5",
    "M12 14.5v2",
  ],
};

const circles: Partial<Record<IconName, { cx: number; cy: number; r: number }>> = {
  globe: { cx: 12, cy: 12, r: 8.5 },
  pin: { cx: 12, cy: 10, r: 2.2 },
  sun: { cx: 12, cy: 12, r: 3.9 },
};

export function Icon({ name, size = 18, color }: Props) {
  const circle = circles[name];
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {strokes[name].map((d) => (
        <Path key={d} d={d} stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      ))}
      {circle && <Circle {...circle} stroke={color} strokeWidth={1.5} />}
    </Svg>
  );
}
