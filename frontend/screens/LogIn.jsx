import * as React from 'react';
import {
    View, Text, Dimensions,
    Image, TextInput
} from 'react-native';
import styles from "../styles";
import Auth from "../component/Auth";
import { Button } from "@rneui/themed";

const { width, height } = Dimensions.get('window');

export default function LogIn ({ navigation }) {
    return (
        <View
            style = {styles.container}
        >
            <View
            style={{
                alignItems: "center",
                
            }}
            >
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.normalLogo}
                />
                <Text
                    style={styles.titleText}
                >{"Welcome Back"}</Text>
            </View>
            <View>
                <Text
                    style={styles.fieldText}
                >{"Username"}</Text>
                
                <TextInput
                    style = {styles.inputContainer}
                    placeholder='Enter Username'
                >                
                </TextInput>
                <Text
                    style={styles.fieldText}
                >{"Password"}</Text>
                <TextInput
                    style = {styles.inputContainer}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                >                
                </TextInput>
                <Button
                title="Log In"
                onPress={() => navigation.navigate("Dashboard")}
                buttonStyle={styles.buttonContainer}
                titleStyle={styles.buttonText}
                color="#8A7DDC"
                />
            </View>
            <View>
              <Text style = {styles.orText}>
                Or
              </Text>
            </View>
            <View>
              <Auth/>
            </View>
        </View>
    )
}
