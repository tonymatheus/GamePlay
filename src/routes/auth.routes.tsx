import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../Screens/SignIn";
import { Home } from "../Screens/Home";

export type AuthRoutesStackParams = {
  SignIn: undefined;
  Home: undefined;
};

const { Navigator, Screen } =
  createNativeStackNavigator<AuthRoutesStackParams>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
