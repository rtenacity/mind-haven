import * as React from "react";
import { useState } from "react";
import { View, Text, ActivityIndicator, Image, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../styles";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { useFocusEffect } from "@react-navigation/native";

export default function Header({ navigation }) {
    const [displayName, setDisplayName] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [menuVisible, setMenuVisible] = useState(false);

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

    const openMenu = () => {
        setMenuVisible(!menuVisible); // Toggle visibility of the dropdown menu
    };

    const handleUserSettings = () => {
        // Handle User Settings action, e.g., navigate to settings screen
        navigation.navigate('UserSettings');
        setMenuVisible(false);
    };

    const handleSignOut = () => {
        // Handle sign-out logic, e.g., Firebase sign out
        FIREBASE_AUTH.signOut();
    };

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
                <TouchableOpacity onPress={openMenu}>
                    <Text style={styles.circleText}>{displayName.charAt(0)}</Text>
                </TouchableOpacity>
                <Text style={styles.headerIconText}>Hello, {displayName}</Text>
            </View>
            <Image
                style={styles.headerIconImage}
                source={require("../assets/logo.png")} />
            {menuVisible && (
                <View style={styles.dropdownMenu}>
                    <TouchableOpacity onPress={handleUserSettings}>
                        <Text style={styles.dropdownItem}>User Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSignOut}>
                        <Text style={styles.dropdownItem}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );    
}
