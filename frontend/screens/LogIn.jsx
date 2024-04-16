import * as React from 'react';
import {
    View, Text, Dimensions,
    Image, TextInput
} from 'react-native';


const { width, height } = Dimensions.get('window');

export default LogIn = ({}) => {
    return (
        <View
            style = {{
                flex: 1,
                backgroundColor: "#AEC5EB",
                justifyContent: "center",
            }}
        >
            <View
            style={{
                alignItems: "center",
                
            }}
            >
                <Image
                    source={require("../assets/logo.png")}
                    style={{
                        height: height * 0.15,
                        width: width * 0.35
                    }}
                />
                <Text
                    style={{
                        backgroundColor: "#AEC5EB",
                        fontFamily: "KaiseiOpti_700Bold",
                        color: "#331B4B",
                        fontSize: 0.11 * width,
                    }}
                >{"Welcome Back"}</Text>
            </View>
            <View
                style = {{
                    alignItems: "left",
                    justifyContent: "left",
                    margin: width * 0.1
                }}
            >
                <Text
                    style={{
                        backgroundColor: "#AEC5EB",
                        fontFamily: "KaiseiOpti_700Bold",
                        color: "#331B4B",
                        fontSize: 0.06 * width,
                    }}
                >{"Username"}</Text>
                
                <TextInput
                    style = {{
                        backgroundColor: "white",
                        width: 0.8 * width,
                        height: 0.08 * height,
                        borderRadius: 0.03 * height,
                        padding: 0.05 * width,
                        fontSize: 0.05 * width
                    }}
                    placeholder='Enter Username'
                >                
                </TextInput>
                <Text
                    style={{
                        backgroundColor: "#AEC5EB",
                        fontFamily: "KaiseiOpti_700Bold",
                        color: "#331B4B",
                        fontSize: 0.06 * width,
                        marginTop: width * 0.1
                    }}
                >{"Password"}</Text>
                <TextInput
                    style = {{
                        backgroundColor: "white",
                        width: 0.8 * width,
                        height: 0.08 * height,
                        borderRadius: 0.03 * height,
                        padding: 0.05 * width,
                        fontSize: 0.05 * width
                    }}
                    placeholder='Enter Password'
                >                
                </TextInput>
            </View>
        </View>
    )
}