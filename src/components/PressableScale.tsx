import { useRef, type ReactNode } from "react";
import {
  Animated,
  Platform,
  Pressable,
  type AccessibilityRole,
  type PressableStateCallbackType,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { usingKeyboard } from "../lib/inputModality";

type Interaction = PressableStateCallbackType & { hovered?: boolean; focused?: boolean };

const visible = (state: PressableStateCallbackType): Interaction => {
  const interaction = state as Interaction;
  return { ...interaction, focused: Boolean(interaction.focused) && usingKeyboard() };
};

type Props = {
  onPress: () => void;
  children: ReactNode | ((state: Interaction) => ReactNode);
  style?: StyleProp<ViewStyle> | ((state: Interaction) => StyleProp<ViewStyle>);
  label: string;
  role?: AccessibilityRole;
  selected?: boolean;
  pressedScale?: number;
};

export function PressableScale({
  onPress,
  children,
  style,
  label,
  role = "button",
  selected,
  pressedScale = 0.97,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const springTo = (toValue: number) =>
    Animated.spring(scale, {
      toValue,
      speed: 40,
      bounciness: 0,
      useNativeDriver: Platform.OS !== "web",
    }).start();

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        onPress={onPress}
        onPressIn={() => springTo(pressedScale)}
        onPressOut={() => springTo(1)}
        accessibilityRole={role}
        accessibilityLabel={label}
        accessibilityState={selected === undefined ? undefined : { selected }}
        style={(state) => (typeof style === "function" ? style(visible(state)) : style)}
      >
        {(state) => (typeof children === "function" ? children(visible(state)) : children)}
      </Pressable>
    </Animated.View>
  );
}
