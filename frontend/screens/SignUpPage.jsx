import * as React from "react";
import { View, Text, ActivityIndicator, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import styles from "../styles";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";

export default function SignUpPageScreen({ navigation }) {
  const [value, onChangeText] = React.useState("");

  let [fontsLoaded] = useFonts({
    KaiseiOpti_700Bold,
    KaiseiOpti_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/logo.png")}
          style={styles.normalLogo}
        />
        <View style={{}}>
          <Text style={styles.titleText}>What's Your Name?</Text>
          <Text style={styles.normalText}>
            We take data privacy seriously. Our chats stay between us. We never
            share your data for ads or marketing.
          </Text>
        </View>
      </View>
      <View>
        <View>
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            style={styles.inputContainer}
            value={value}
            placeholder="Enter your Name"
            titleStyle={styles.inputText}
            color="#8A7DDC"
            onSubmitEditing={() => navigation.navigate("SignUpOptions")}
          />
          <Text style={styles.orText}>or</Text>
          <Button
            title="Prefer not say"
            onPress={() => navigation.navigate("SignUpOptions")}
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonText}
            color="#8A7DDC"
          />
        </View>
      </View>
    </View>
  );
}
