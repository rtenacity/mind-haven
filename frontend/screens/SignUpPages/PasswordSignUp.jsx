import * as React from "react";
import { View, Text, ActivityIndicator, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import styles from "../../styles";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";

export default function PasswordSignUpScreen({ navigation }) {
  const [value, onChangeText] = React.useState("");
  const [error, setError] = React.useState("");

  let [fontsLoaded] = useFonts({
    KaiseiOpti_700Bold,
    KaiseiOpti_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const onSubmit = () => {
    if(value === undefined || value === "") {
      setError("Please enter a password")
    }
    else(
      navigation.navigate("Dashboard")
    )

  } 

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.normalLogo}
        />
        <View style={{}}>
          <Text style={styles.titleText}>The Mental Haven</Text>
          <Text style={styles.subtitleText}>
            Enter a Password
          </Text>
        </View>
      </View>
      <View>
        <View>
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            style={styles.inputContainer}
            value={value}
            placeholder="Password"
            titleStyle={styles.inputText}
            color="#8A7DDC"
            
          />
          {error &&
              <Text style={styles.subtitleText}>
                {error}
              </Text>
          }
          
          <Button
            title="Done"
            onPress={() => onSubmit()}
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonText}
            color="#8A7DDC"
          />
        </View>
      </View>
    </View>
  );
}
