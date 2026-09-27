import { useEffect, useRef, type ReactNode } from "react";
import { Animated, Platform, type StyleProp, type ViewStyle } from "react-native";
import { motion } from "../theme/tokens";
import { useReducedMotion } from "../hooks/useReducedMotion";

type Props = {
  children: ReactNode;
  order?: number;
  style?: StyleProp<ViewStyle>;
};

export function FadeIn({ children, order = 0, style }: Props) {
  const progress = useRef(new Animated.Value(0)).current;
  const reduced = useReducedMotion();

  useEffect(() => {
    const animation = Animated.timing(progress, {
      toValue: 1,
      duration: reduced ? 0 : motion.enter,
      delay: reduced ? 0 : order * motion.stagger,
      easing: motion.easeOut,
      useNativeDriver: Platform.OS !== "web",
    });
    animation.start();
    return () => animation.stop();
  }, [order, progress, reduced]);

  const translateY = progress.interpolate({ inputRange: [0, 1], outputRange: [18, 0] });

  return (
    <Animated.View style={[style, { opacity: progress, transform: [{ translateY }] }]}>
      {children}
    </Animated.View>
  );
}
