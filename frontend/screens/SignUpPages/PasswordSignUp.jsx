import * as React from "react";
import { View, Text, ActivityIndicator, Image, TextInput } from "react-native";
import { Button } from "@rneui/themed";
import styles from "../../styles";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";
import { FIREBASE_AUTH } from '../../FirebaseConfig.ts';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";

export default function PasswordSignUpScreen({ navigation, route }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = React.useState("");
  const userName = route.params?.userName;

  let [fontsLoaded] = useFonts({
    KaiseiOpti_700Bold,
    KaiseiOpti_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


  const onSubmit = async () => {
    setLoading(true); // Show loading indicator
    setError(''); // Clear previous errors

    // Check if both email and password are provided
    if (!email || !password) {
        setError("Please enter both email and password");
        setLoading(false); // Hide loading indicator
    } else {
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
            
            // Check if user is successfully created
            if (userCredential.user) {
                // Update the user profile with the username
                await updateProfile(userCredential.user, {
                    displayName: userName
                });
                console.log('User registered with username: ', userName);
                
                // Check if displayName is set
                if (userCredential.user.displayName) {
                    console.log(userCredential.user.displayName)
                    // User profile update successful, proceed to dashboard
                    navigation.navigate("Dashboard");
                } else {
                    // If displayName is undefined, log error and wait a few seconds
                    console.log('DisplayName not set, waiting...');
                    setTimeout(() => {
                        // Possible action after waiting, such as retrying update or logging out
                        console.log('Continuing after delay...');
                        navigation.navigate("Dashboard"); // Proceed to dashboard after delay
                    }, 5000); // Wait for 5 seconds
                }
            }
        } catch (e) {
            // Handle errors like email already in use, bad formatted email, weak password, etc.
            setError(e.message);
            console.log(e);
        } finally {
            // Hide loading indicator after all operations are complete
            setLoading(false);
        }
    }
};



  const signUp = () => onSubmit(createUserWithEmailAndPassword);

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.normalLogo}
        />
        <View>
          <Text style={styles.titleText}>The Mental Haven</Text>
          <Text style={styles.subtitleText}>
            Sign Up
          </Text>
        </View>
      </View>
      <View>
        <TextInput
          autoCapitalize="none"
          onChangeText={setEmail}
          style={styles.inputContainer}
          value={email}
          placeholder="Email"
          keyboardType="email-address" // Ensure proper keyboard is shown
          color="#8A7DDC"
        />
        <TextInput
          autoCapitalize="none"
          onChangeText={setPassword}
          style={styles.inputContainer}
          value={password}
          placeholder="Password"
          secureTextEntry={true} // Hide password input
          color="#8A7DDC"
        />
        {error &&
          <Text style={styles.subtitleText}>
            {error}
          </Text>
        }
        <Button
          title="Done"
          onPress={signUp}
          buttonStyle={styles.buttonContainer}
          titleStyle={styles.buttonText}
          color="#8A7DDC"
        />
      </View>
    </View>
  );
}
