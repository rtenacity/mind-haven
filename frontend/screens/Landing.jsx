import React, { useEffect } from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { Button } from "@rneui/themed";
import styles from "../styles";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";
import {Dimensions} from "react-native";


export default function LandingScreen({ navigation }) {
  let [fontsLoaded] = useFonts({
    KaiseiOpti_700Bold,
    KaiseiOpti_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={styles.container}
    >
      <Image source={require("../assets/logo.png")} style={styles.bigLogo} />
      <View style={{}}>
        <Text style={styles.titleText}>{"The Mind \nHaven"}</Text>
        <Text style={styles.subtitleText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </Text>
      </View>
      <View>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("SignUp")}
          buttonStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
          color="#8A7DDC"
        />

        <Button
          title="Log In"
          onPress={() => navigation.navigate("LogIn")}
          buttonStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
          color="white"
        />
      </View>
    </View>
  );
}
