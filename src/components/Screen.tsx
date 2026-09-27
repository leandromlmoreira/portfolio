import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, space } from "../theme/tokens";

type Props = {
  children: ReactNode;
  header?: ReactNode;
  backdrop?: ReactNode;
};

export function Screen({ children, header, backdrop }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      {backdrop}
      {header && <View style={{ paddingTop: insets.top }}>{header}</View>}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingTop: header ? space.md : insets.top + space.xl, paddingBottom: insets.bottom + space.huge },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.ink,
    overflow: "hidden",
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: space.gutter,
    gap: space.xxl,
  },
});
