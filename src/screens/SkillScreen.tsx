import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { profile, skills } from "../data/profile";

export default function SkillScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={{ uri: profile.avatarUri }} style={styles.avatar} />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.sectionTitle}>Árvore de habilidades</Text>

      {skills.map((skill) => (
        <View key={skill.name} style={styles.skillRow}>
          <Text style={styles.skillName}>{skill.name}</Text>
          <View style={styles.track}>
            <View style={[styles.fill, { width: `${skill.level * 100}%` }]} />
          </View>
          <Text style={styles.skillPercent}>{Math.round(skill.level * 100)}%</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101014",
  },
  content: {
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#2a2a33",
  },
  name: {
    color: "#f5f5f5",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
  },
  sectionTitle: {
    color: "#9a9aa5",
    fontSize: 14,
    marginTop: 24,
    marginBottom: 16,
    alignSelf: "flex-start",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  skillRow: {
    width: "100%",
    marginBottom: 18,
  },
  skillName: {
    color: "#f5f5f5",
    fontSize: 15,
    marginBottom: 6,
  },
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#23232b",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#3a8dff",
  },
  skillPercent: {
    color: "#9a9aa5",
    fontSize: 12,
    marginTop: 4,
    textAlign: "right",
  },
});
