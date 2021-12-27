import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: `${theme.colors.background}`,
    width: "100%",
  },

  Image: {
    width: "100%",
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.colors.reading,
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.colors.reading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 54,
  },
  viewButton: {
    marginBottom: 50,
  },
});
