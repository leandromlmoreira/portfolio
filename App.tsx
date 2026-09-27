import { Platform, StyleSheet, View, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Syne_700Bold, Syne_800ExtraBold } from "@expo-google-fonts/syne";
import { Manrope_400Regular, Manrope_500Medium, Manrope_700Bold } from "@expo-google-fonts/manrope";
import { JetBrainsMono_500Medium } from "@expo-google-fonts/jetbrains-mono";
import { AppNavigator, navigationRef } from "./src/navigation/AppNavigator";
import { DesktopStage } from "./src/components/DesktopStage";
import { colors } from "./src/theme/tokens";

const stageBreakpoint = 1024;

const openProject = (id: string) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate("Project", { id });
  }
};

export default function App() {
  const { width } = useWindowDimensions();
  const [fontsLoaded] = useFonts({
    Syne_700Bold,
    Syne_800ExtraBold,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_700Bold,
    JetBrainsMono_500Medium,
  });

  if (!fontsLoaded) {
    return <View style={styles.boot} />;
  }

  const staged = Platform.OS === "web" && width >= stageBreakpoint;

  return (
    <SafeAreaProvider style={styles.boot}>
      <StatusBar style="light" />
      {staged ? (
        <DesktopStage onOpenProject={openProject}>
          <AppNavigator />
        </DesktopStage>
      ) : (
        <AppNavigator />
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  boot: {
    flex: 1,
    backgroundColor: colors.ink,
  },
});
