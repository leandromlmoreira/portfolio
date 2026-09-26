import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./src/screens/MainScreen";
import SkillScreen from "./src/screens/SkillScreen";
import type { RootStackParamList } from "./src/navigation/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#101014" },
          headerTintColor: "#f5f5f5",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} options={{ title: "Portfólio" }} />
        <Stack.Screen name="Skills" component={SkillScreen} options={{ title: "Habilidades" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
