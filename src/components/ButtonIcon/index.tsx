import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import DiscordImag from "../../assets/discord.png";
import { styles } from "./styles";

type Props = {
  title: string;
};

export const ButtonIcon = ({ title }: Props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImag} style={styles.icon} />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
