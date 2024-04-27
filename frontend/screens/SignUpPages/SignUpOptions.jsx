import * as React from "react";
import { View, Text, ActivityIndicator, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import styles from "../../styles";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";
import Auth from "../../component/Auth";

export default function SignUpOptionsScreen({ navigation, route }) {
  const userName = route.params?.userName;
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
          source={require("../../assets/logo.png")}
          style={styles.normalLogo}
        />
        <View style={{}}>
          <Text style={styles.titleText}>How would you like to sign up?</Text>
        </View>
      </View>
      <View>
        <View>
          <Button
            title="Sign Up with a Password"
            onPress={() => navigation.navigate("PasswordSignUp", { userName: userName })}
            buttonStyle={styles.buttonContainer}
            titleStyle={{fontFamily: "KaiseiOpti_400Regular", color: "black", fontSize: 23,}}
            color="#8A7DDC"
          />
          <Text style={styles.orText}>or</Text>
        </View>
      </View>
    </View>
  );
}
