import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";
import { links, profile } from "../data/profile";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

export default function MainScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: profile.avatarUri }} style={styles.avatar} />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.headline}>{profile.headline}</Text>

      <View style={styles.linksBox}>
        {links.map((link) => (
          <TouchableOpacity
            key={link.label}
            style={styles.linkButton}
            onPress={() => Linking.openURL(link.url)}
          >
            <Text style={styles.linkText}>{link.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.skillsButton}
        onPress={() => navigation.navigate("Skills")}
      >
        <Text style={styles.skillsButtonText}>Ver minhas habilidades →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101014",
    alignItems: "center",
    paddingTop: 64,
    paddingHorizontal: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#2a2a33",
  },
  name: {
    color: "#f5f5f5",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 16,
  },
  headline: {
    color: "#9a9aa5",
    fontSize: 14,
    marginTop: 4,
  },
  linksBox: {
    width: "100%",
    marginTop: 32,
    gap: 12,
  },
  linkButton: {
    borderWidth: 1,
    borderColor: "#3a8dff",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  linkText: {
    color: "#3a8dff",
    fontWeight: "600",
  },
  skillsButton: {
    marginTop: 40,
    backgroundColor: "#3a8dff",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: "100%",
  },
  skillsButtonText: {
    color: "#0b0b0f",
    fontWeight: "700",
    textAlign: "center",
  },
});
