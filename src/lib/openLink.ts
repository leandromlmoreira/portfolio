import { Linking } from "react-native";

export const openLink = (url: string) => Linking.openURL(url).catch(() => undefined);
