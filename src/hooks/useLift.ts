import { useEffect, useRef } from "react";
import { Animated, Platform } from "react-native";
import { motion } from "../theme/tokens";
import { useReducedMotion } from "./useReducedMotion";

export const useLift = (active: boolean) => {
  const progress = useRef(new Animated.Value(0)).current;
  const reduced = useReducedMotion();

  useEffect(() => {
    const animation = Animated.timing(progress, {
      toValue: active ? 1 : 0,
      duration: reduced ? 0 : motion.hover,
      easing: motion.easeOut,
      useNativeDriver: Platform.OS !== "web",
    });
    animation.start();
    return () => animation.stop();
  }, [active, progress, reduced]);

  return progress;
};
