import { Platform } from "react-native";

let keyboard = false;

if (Platform.OS === "web" && typeof window !== "undefined") {
  window.addEventListener("keydown", () => (keyboard = true), true);
  window.addEventListener("pointerdown", () => (keyboard = false), true);
}

export const usingKeyboard = () => keyboard;
