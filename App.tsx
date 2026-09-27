import { useState } from "react";
import { Platform, View, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { InstrumentSerif_400Regular, InstrumentSerif_400Regular_Italic } from "@expo-google-fonts/instrument-serif";
import { Geist_400Regular, Geist_500Medium, Geist_600SemiBold } from "@expo-google-fonts/geist";
import { GeistMono_400Regular, GeistMono_500Medium } from "@expo-google-fonts/geist-mono";
import { AppNavigator, navigationRef } from "./src/navigation/AppNavigator";
import { DesktopStage } from "./src/components/DesktopStage";
import { ThemeProvider, useTheme } from "./src/theme/ThemeProvider";

const stageBreakpoint = 1024;

const openProject = (id: string) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate("Project", { id });
  }
};

function Shell() {
  const { width } = useWindowDimensions();
  const { palette, scheme } = useTheme();
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    InstrumentSerif_400Regular,
    InstrumentSerif_400Regular_Italic,
    Geist_400Regular,
    Geist_500Medium,
    Geist_600SemiBold,
    GeistMono_400Regular,
    GeistMono_500Medium,
  });

  const background = { flex: 1, backgroundColor: palette.bg };

  if (!fontsLoaded) {
    return <View style={background} />;
  }

  const staged = Platform.OS === "web" && width >= stageBreakpoint;

  return (
    <SafeAreaProvider style={background}>
      <StatusBar style={scheme === "dark" ? "light" : "dark"} />
      {staged ? (
        <DesktopStage onOpenProject={openProject} activeProject={activeProject}>
          <AppNavigator onProjectChange={setActiveProject} />
        </DesktopStage>
      ) : (
        <AppNavigator />
      )}
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
