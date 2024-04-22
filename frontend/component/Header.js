import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";
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
                    if (user.displayName) {
                        setDisplayName(user.displayName);
                    } else {
                        setTimeout(() => {
                            if (user.displayName) {
                                setDisplayName(user.displayName);
                            } else {
                                setDisplayName('None');
                            }
                        }, 500);
                    }
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
                <View style={styles.circle} />
                <Text style={styles.headerIconText}>Hello, {displayName}</Text>
            </View>
            <Image
                style={styles.headerIconImage}
                source={require("../assets/logo.png")} />
        </View>
    );
}
