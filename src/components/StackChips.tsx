import { ScrollView, StyleSheet, Text } from "react-native";
import type { StackCount } from "../lib/stacks";
import { PressableScale } from "./PressableScale";
import { colors, fonts, radii, space } from "../theme/tokens";

type Props = {
  stacks: StackCount[];
  total: number;
  selected: string | null;
  onSelect: (stack: string | null) => void;
};

type ChipProps = {
  label: string;
  count: number;
  active: boolean;
  onPress: () => void;
};

function Chip({ label, count, active, onPress }: ChipProps) {
  return (
    <PressableScale
      onPress={onPress}
      label={`Filtrar por ${label}`}
      role="tab"
      selected={active}
      pressedScale={0.94}
      style={({ hovered }) => [styles.chip, active ? styles.active : hovered && styles.hover]}
    >
      <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
      <Text style={[styles.count, active && styles.activeCount]}>{count}</Text>
    </PressableScale>
  );
}

export function StackChips({ stacks, total, selected, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroller}
      contentContainerStyle={styles.row}
    >
      <Chip label="Todos" count={total} active={selected === null} onPress={() => onSelect(null)} />
      {stacks.map((stack) => (
        <Chip
          key={stack.name}
          label={stack.name}
          count={stack.count}
          active={selected === stack.name}
          onPress={() => onSelect(selected === stack.name ? null : stack.name)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroller: {
    marginHorizontal: -space.gutter,
    flexGrow: 0,
  },
  row: {
    gap: 8,
    paddingHorizontal: space.gutter,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 38,
    paddingHorizontal: 14,
    borderRadius: radii.pill,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: "rgba(242, 239, 232, 0.03)",
  },
  hover: {
    borderColor: colors.lineStrong,
  },
  active: {
    backgroundColor: colors.signal,
    borderColor: colors.signal,
  },
  label: {
    fontFamily: fonts.body,
    fontSize: 13.5,
    color: colors.paper,
  },
  activeLabel: {
    fontFamily: fonts.bodyStrong,
    color: colors.signalInk,
  },
  count: {
    fontFamily: fonts.mono,
    fontSize: 11,
    color: colors.faint,
  },
  activeCount: {
    color: "rgba(17, 20, 10, 0.6)",
  },
});
