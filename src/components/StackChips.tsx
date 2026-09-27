import { ScrollView, StyleSheet, Text } from "react-native";
import type { StackCount } from "../lib/stacks";
import { PressableScale } from "./PressableScale";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { fonts, radii, space } from "../theme/tokens";

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
  const styles = useStyles(createStyles);
  return (
    <PressableScale
      onPress={onPress}
      label={`Filtrar por ${label}`}
      role="tab"
      selected={active}
      pressedScale={0.94}
      style={({ hovered, focused }) => [
        styles.chip,
        active ? styles.active : hovered && styles.hover,
        focused && styles.focus,
      ]}
    >
      <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
      <Text style={[styles.count, active && styles.activeCount]}>{count}</Text>
    </PressableScale>
  );
}

export function StackChips({ stacks, total, selected, onSelect }: Props) {
  const styles = useStyles(createStyles);
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

const createStyles = (c: Palette) =>
  StyleSheet.create({
    scroller: {
      marginHorizontal: -space.gutter,
      flexGrow: 0,
    },
    row: {
      gap: 8,
      paddingHorizontal: space.gutter,
      paddingVertical: 3,
    },
    chip: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      height: 38,
      paddingHorizontal: 14,
      borderRadius: radii.pill,
      borderWidth: 1,
      borderColor: c.line,
      backgroundColor: c.surface,
    },
    hover: {
      borderColor: c.lineStrong,
      backgroundColor: c.raised,
    },
    focus: {
      outlineColor: c.accent,
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineOffset: 2,
    },
    active: {
      backgroundColor: c.primary,
      borderColor: c.primary,
    },
    label: {
      fontFamily: fonts.body,
      fontSize: 13.5,
      color: c.ink,
    },
    activeLabel: {
      fontFamily: fonts.bodyMedium,
      color: c.primaryInk,
    },
    count: {
      fontFamily: fonts.mono,
      fontSize: 11,
      color: c.faint,
    },
    activeCount: {
      color: c.primaryInk,
      opacity: 0.7,
    },
  });
