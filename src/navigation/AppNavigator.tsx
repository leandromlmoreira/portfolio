import { useMemo } from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  createNavigationContainerRef,
  type Theme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectScreen from "../screens/ProjectScreen";
import SkillsScreen from "../screens/SkillsScreen";
import { findProject } from "../data/projects";
import { useTheme } from "../theme/ThemeProvider";
import type { Palette } from "../theme/palettes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const navigationTheme = (palette: Palette): Theme => {
  const base = palette.scheme === "dark" ? DarkTheme : DefaultTheme;
  return {
    ...base,
    colors: {
      ...base.colors,
      background: palette.bg,
      card: palette.bg,
      text: palette.ink,
      border: palette.line,
      primary: palette.accent,
    },
  };
};

type Props = {
  onProjectChange?: (id: string | null) => void;
};

const currentProjectId = () => {
  const route = navigationRef.getCurrentRoute();
  return route?.name === "Project" ? (route.params as RootStackParamList["Project"]).id : null;
};

export function AppNavigator({ onProjectChange }: Props) {
  const { palette } = useTheme();
  const theme = useMemo(() => navigationTheme(palette), [palette]);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme}
      onStateChange={() => onProjectChange?.(currentProjectId())}
      documentTitle={{ formatter: (options) => `${options?.title ?? "Portfólio"} · Leandro Macedo` }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: palette.bg },
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Portfólio" }} />
        <Stack.Screen name="Projects" component={ProjectsScreen} options={{ title: "Projetos" }} />
        <Stack.Screen
          name="Project"
          component={ProjectScreen}
          options={({ route }) => ({ title: findProject(route.params.id)?.name ?? "Projeto" })}
        />
        <Stack.Screen name="Skills" component={SkillsScreen} options={{ title: "Skills" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
