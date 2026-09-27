import { Circle, G, Path, Rect } from "react-native-svg";

type Table = { x: number; y: number; rows: number; id: string };

const tables: Table[] = [
  { x: 28, y: 36, rows: 4, id: "clientes" },
  { x: 128, y: 92, rows: 5, id: "pedidos" },
  { x: 226, y: 28, rows: 3, id: "produtos" },
];

const grid = Array.from({ length: 16 }, (_, index) => index * 20);

function TableNode({ x, y, rows }: Table) {
  return (
    <G>
      <Rect x={x} y={y} width="72" height={20 + rows * 12} rx="6" fill="#0B1F1C" stroke="#3FE0C5" strokeOpacity="0.55" />
      <Rect x={x} y={y} width="72" height="16" rx="6" fill="#3FE0C5" />
      <Rect x={x + 8} y={y + 6} width="30" height="4" rx="2" fill="#062520" />
      {Array.from({ length: rows }, (_, row) => (
        <G key={row}>
          <Circle cx={x + 10} cy={y + 24 + row * 12} r="2" fill={row === 0 ? "#FFD166" : "#3FE0C5"} opacity="0.8" />
          <Rect x={x + 16} y={y + 22 + row * 12} width={24 + ((row * 13) % 22)} height="4" rx="2" fill="#CFF7EF" opacity="0.45" />
        </G>
      ))}
    </G>
  );
}

export function SchemaCover() {
  return (
    <G>
      <Rect width="320" height="200" fill="#07231F" />
      <G stroke="#3FE0C5" strokeOpacity="0.07">
        {grid.map((value) => (
          <Path key={`v${value}`} d={`M${value} 0 V200`} />
        ))}
        {grid.slice(0, 11).map((value) => (
          <Path key={`h${value}`} d={`M0 ${value} H320`} />
        ))}
      </G>
      <G stroke="#3FE0C5" strokeWidth="1.4" fill="none" strokeDasharray="4 4" opacity="0.8">
        <Path d="M100 60 C 116 60, 110 116, 128 116" />
        <Path d="M226 52 C 208 52, 214 128, 200 128" />
      </G>
      {tables.map((table) => (
        <TableNode key={table.id} {...table} />
      ))}
      <Rect x="236" y="138" width="64" height="30" rx="6" fill="#0B1F1C" stroke="#FFD166" strokeOpacity="0.6" />
      <Rect x="244" y="147" width="20" height="4" rx="2" fill="#FFD166" />
      <Rect x="244" y="156" width="40" height="4" rx="2" fill="#CFF7EF" opacity="0.4" />
    </G>
  );
}
