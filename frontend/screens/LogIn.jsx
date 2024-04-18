import * as React from 'react';
import {
    View, Text, Dimensions,
    Image, TextInput
} from 'react-native';
import styles from "../styles"
import Auth from "../component/Auth"

const { width, height } = Dimensions.get('window');

export default function LogIn ({}) {
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
