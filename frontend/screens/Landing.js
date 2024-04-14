import * as React from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
import { Button } from "@rneui/themed";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";
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
            fontSize: 50,
          }}
        >
          {"The Mind \nHaven"}
        </Text>

        <Text
          style={{
            backgroundColor: "#AEC5EB",
            fontFamily: "KaiseiOpti_400Regular",
            color: "#331B4B",
            fontSize: 25,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </Text>
      </View>
      <View
        style={{
          
        }}
      >
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Dashboard")}
          buttonStyle={{ height: 70, width: 360, borderRadius: 37, margin: 10 }}
          titleStyle={{
            fontFamily: "KaiseiOpti_400Regular",
            color: "black",
            fontSize: 31,
          }}
          color="#8A7DDC"
        />

        <Button
          title="Log In"
          onPress={() => navigation.navigate("Dashboard")}
          buttonStyle={{ height: 70, width: 360, borderRadius: 37, margin: 10 }}
          titleStyle={{
            fontFamily: "KaiseiOpti_400Regular",
            color: "black",
            fontSize: 31,
          }}
          color="white"
        />
      </View>
    </View>
  );
}
