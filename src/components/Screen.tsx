import type { ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { Palette } from "../theme/palettes";
import { useStyles } from "../theme/useStyles";
import { space } from "../theme/tokens";

type Props = {
  children: ReactNode;
  header?: ReactNode;
  backdrop?: ReactNode;
};

export function Screen({ children, header, backdrop }: Props) {
  const insets = useSafeAreaInsets();
  const styles = useStyles(createStyles);

  return (
    <View style={styles.root}>
      {backdrop}
      {header && <View style={{ paddingTop: insets.top }}>{header}</View>}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingTop: header ? space.lg : insets.top + space.xl, paddingBottom: insets.bottom + space.huge },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const createStyles = (c: Palette) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: c.bg,
      overflow: "hidden",
    },
    scroll: {
      flex: 1,
    },
    content: {
      width: "100%",
      maxWidth: 640,
      alignSelf: "center",
      paddingHorizontal: space.gutter,
      gap: space.section,
    },
  });
