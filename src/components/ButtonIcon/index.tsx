import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import DiscordImag from "../../assets/discord.png";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export const ButtonIcon = ({ title, ...rest }: Props) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImag} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
