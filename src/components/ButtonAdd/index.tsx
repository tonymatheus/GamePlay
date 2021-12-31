import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/themes";

export function ButtonAdd({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color={theme.colors.heading}
      />
    </TouchableOpacity>
  );
}
