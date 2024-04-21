import * as React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "../styles";

export default function Header({ navigation }) {
    return (
        <View style={styles.headerDashboard}>
            <View style = {styles.leftSideDashboard}>
                <View style = {styles.circle}/>

                <Text style={styles.headerIconText}>Hello,{'\n'}[Username]</Text>
            </View>

            <Image
            style = {styles.headerIconImage}
            source={require("../assets/logo.png")} />
        </View>
    );
}