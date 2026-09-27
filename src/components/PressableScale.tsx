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

type Interaction = PressableStateCallbackType & { hovered?: boolean; focused?: boolean };

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
        style={(state) => (typeof style === "function" ? style(state as Interaction) : style)}
      >
        {(state) => (typeof children === "function" ? children(state as Interaction) : children)}
      </Pressable>
    </Animated.View>
  );
}
