import * as React from "react";
import { View, Text, Image, TextInput, ActivityIndicator } from "react-native";
import { Button } from "@rneui/themed";
import styles from "../styles";
import { FIREBASE_AUTH } from '../FirebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function LogIn({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        setLoading(true); // Show loading indicator
        setError(''); // Clear previous errors

        // Check if both email and password are provided
        if (!email || !password) {
            setError("Please enter both email and password");
            setLoading(false); // Hide loading indicator
        } else {
            try {
                // Attempt to sign in with email and password
                const userCredential = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
                
                // Check if user is successfully logged in
                if (userCredential.user) {
                    console.log('User logged in:', userCredential.user.email);
                    // User login successful, proceed to dashboard
                    navigation.navigate("Dashboard");
                }
            } catch (e) {
                // Handle errors like wrong password, user not found, etc.
                setError(e.message);
                console.log(e);
            } finally {
                // Hide loading indicator after all operations are complete
                setLoading(false);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.normalLogo}
                />
                <Text style={styles.titleText}>{"Welcome Back"}</Text>
            </View>
            <View>
                <TextInput
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    style={styles.inputContainer}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    color="#8A7DDC"
                />
                <TextInput
                    autoCapitalize="none"
                    onChangeText={setPassword}
                    style={styles.inputContainer}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={true}
                    color="#8A7DDC"
                />
                {error && <Text style={styles.subtitleText}>{error}</Text>}
                <Button
                    title="Log In"
                    onPress={handleLogin}
                    buttonStyle={styles.buttonContainer}
                    titleStyle={styles.buttonText}
                    color="#8A7DDC"
                />
                          <Button
            title="Back"
            onPress={() => navigation.goBack()}
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonText}
            color="#F5F5F5"
          />
            </View>
        </View>
    );
}
