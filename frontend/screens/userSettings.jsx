import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import styles from '../styles';
import Header from '../component/Header';
import { getAuth, updateProfile } from "firebase/auth";

const { width, height } = Dimensions.get('window');



export default function UserSettings({ navigation }) {
    const changeUsername = () => {
        Alert.prompt(
            'Change Username',
            'Enter your new username:',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: (newUsername) => updateUsername(newUsername),
                },
            ],
            'plain-text'
        );
    };
    const auth = getAuth();

    const updateUsername = (newUsername) => {
        const user = auth.currentUser;
        updateProfile(user, {
            displayName: newUsername
        }).then(() => {
            Alert.alert("Username updated successfully!");
        }).catch(error => {
            Alert.alert("Error", error.message);
        });
    };    

    const deleteUser = () => {
        Alert.alert(
            "Delete Account",
            "Are you sure you want to delete your account? This action cannot be undone.",
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        const user = FIREBASE_AUTH.currentUser;
                        user.delete().then(() => {
                            Alert.alert("Account deleted successfully.");
                        }).catch(error => {
                            Alert.alert("Error", error.message);
                        });
                    }
                }
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Header />

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Text style={styles.titleText}>Settings</Text>
                <Button
                    buttonStyle={{ borderRadius: 20, marginLeft: 10 }}
                    color='#AD7DDC'
                    onPress={() => { navigation.goBack() }}
                >
                    <Icon name="exit-outline" type='ionicon' size={30} />
                </Button>
            </View>

            <TouchableOpacity style={[styles.settingsBox, { backgroundColor: '#AD7DDC' }]} onPress={changeUsername}>
                <Text style={{ fontSize: 25, fontFamily: "KaiseiOpti_400Regular" }}>Change Username</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsBox, { backgroundColor: '#AD7DDC' }]} onPress={() => FIREBASE_AUTH.signOut()}>
                <Text style={{ fontSize: 25, fontFamily: "KaiseiOpti_400Regular" }}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsBox, { backgroundColor: '#F88379' }]} onPress={deleteUser}>
                <Text style={{ fontSize: 25, fontFamily: "KaiseiOpti_400Regular" }}>Delete Account</Text>
            </TouchableOpacity>
        </View>
    );
}
