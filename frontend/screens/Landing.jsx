import * as React from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { Button } from "@rneui/themed";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";
import {Dimensions} from "react-native";

const { width, height } = Dimensions.get('window');

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
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#AEC5EB",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{
          height: height * 0.4,
          width: width * 0.8
        }}
      />
      <View
        style={{

        }}
      >
        <Text
          style={{
            backgroundColor: "#AEC5EB",
            fontFamily: "KaiseiOpti_700Bold",
            color: "#331B4B",
            fontSize: 0.11 * width,
          }}
        >
          {"The Mind \nHaven"}
        </Text>

        <Text
          style={{
            backgroundColor: "#AEC5EB",
            fontFamily: "KaiseiOpti_400Regular",
            fontSize: 0.06 * width,
            color: "#331B4B",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center'
        }}
      >
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Dashboard")}
          buttonStyle={{ height: 0.09 * height, width: 0.83 * width, borderRadius: 0.03 * height, marginTop: 0.05 * height }}
          titleStyle={{
            fontFamily: "KaiseiOpti_400Regular",
            color: "black",
            fontSize: 0.07 * width,
          }}
          color="#8A7DDC"
        />

        <Button
          title="Log In"
          onPress={() => navigation.navigate("Login")}
          buttonStyle={{ height: 0.09 * height, width: 0.83 * width, borderRadius: 0.03 * height, margin: 10 }}
          titleStyle={{
            fontFamily: "KaiseiOpti_400Regular",
            color: "black",
            fontSize: 0.07 * width,
          }}
          color="white"
        />
      </View>
    </View>
  );
}
