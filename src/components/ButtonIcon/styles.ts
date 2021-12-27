import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 6,
  },
  title: {
    width: "60%",
    color: theme.colors.reading,
    textAlign: "center",
    fontWeight: "bold",
  },
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: theme.colors.line,
  },
  icon: {
    width: 24,
    height: 18,
  },
});
