import * as React from "react";
import { useState } from "react";
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from "react-native";
import styles from "../styles";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { useFocusEffect } from "@react-navigation/native";

export default function Header({ navigation }) {
    const [displayName, setDisplayName] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useFocusEffect(
        React.useCallback(() => {
            const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, user => {
                if (user) {
                    setDisplayName(user.displayName || 'None');
                } else {
                    setDisplayName('');
                }
                setIsLoading(false);
            });

            return () => {
                unsubscribe();
                setIsLoading(true);
            };
        }, [])
    );

    if (isLoading) {
        return (
            <View style={styles.headerDashboard}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.headerDashboard}>
            <View style={styles.leftSideDashboard}>
                <TouchableOpacity onPress={() => navigation.navigate('UserSettings')}>
                    <Text style={styles.circleText}>{displayName.charAt(0)}</Text>
                </TouchableOpacity>
                <Text style={styles.headerIconText}>Hello,{'\n'}{displayName}</Text>
            </View>
            <Image
                style={styles.headerIconImage}
                source={require("../assets/logo.png")}
            />
        </View>
    );    
}
