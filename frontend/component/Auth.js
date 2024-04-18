import * as React from "react";
import { View, Text, ActivityIndicator, Image, TextInput } from "react-native";
import { Button, Icon } from "@rneui/themed";
import styles from "../styles";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";

export default function Auth({ navigation }) {
  const [value, onChangeText] = React.useState("");

  let [fontsLoaded] = useFonts({
    KaiseiOpti_700Bold,
    KaiseiOpti_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Button
        title="Google"
        onPress={() => navigation.navigate("Dashboard")}
        icon = {
          <Icon name = "google" type = "font-awesome" />
        }
        buttonStyle={styles.buttonContainer}
        titleStyle={styles.buttonText}
        color="white"
        iconLeft
      />
      <Button
        title="Apple"
        onPress={() => navigation.navigate("Dashboard")}
        icon = {
          <Icon name = "apple" type = "font-awesome"/>
        }
        buttonStyle={styles.buttonContainer}
        titleStyle={styles.buttonText}
        color="white"
      />
      <Button
        title="Facebook"
        icon = {
          <Icon name = "facebook" type = "font-awesome"/>
        }
        onPress={() => navigation.navigate("Dashboard")}
        buttonStyle={styles.buttonContainer}
        titleStyle={styles.buttonText}
        color="white"
      />
    </View>
  );
}
