import {
  DarkTheme,
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
import { colors } from "../theme/tokens";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const theme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.ink,
    card: colors.ink,
    text: colors.paper,
    border: colors.line,
    primary: colors.signal,
  },
};

export function AppNavigator() {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme}
      documentTitle={{ formatter: (options) => `${options?.title ?? "Portfólio"} · Leandro Macedo` }}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.ink },
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
