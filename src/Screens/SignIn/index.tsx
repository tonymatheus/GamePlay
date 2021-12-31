import React from "react";
import { View, Text, Image } from "react-native";

import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate("Home");
  }

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
        <ButtonIcon
          title="Entrar com Discord"
          onPress={handleSignIn}
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
};
