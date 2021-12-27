import React from "react";
import { View, Text, Image } from "react-native";

import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        source={IlustrationImg}
        style={styles.Image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}e organize suas jogatinas{"\n"}
          Facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{"\n"}
          favoritos com seus amigos
        </Text>
      </View>
      <View style={styles.viewButton}>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
};
