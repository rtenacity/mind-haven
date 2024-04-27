import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import { getAuth, updateProfile } from "firebase/auth";
import styles from '../styles';
import Header from '../component/Header';

const { width, height } = Dimensions.get('window');

export default function UserSettings({ navigation }) {
    const [userUpdated, setUserUpdated] = useState(false);

    const auth = getAuth();

    const updateUsername = (newUsername) => {
        const user = auth.currentUser;
        updateProfile(user, {
            displayName: newUsername
        }).then(() => {
            Alert.alert("Username updated successfully!");
            setUserUpdated(prev => !prev);
        }).catch(error => {
            Alert.alert("Error", error.message);
        });
    };

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
                        const user = auth.currentUser;
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
            <Header navigation = {navigation} key={userUpdated} /> 

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
            <TouchableOpacity style={[styles.settingsBox, { backgroundColor: '#AD7DDC' }]} onPress={() => auth.signOut()}>
                <Text style={{ fontSize: 25, fontFamily: "KaiseiOpti_400Regular" }}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsBox, { backgroundColor: '#F88379' }]} onPress={deleteUser}>
                <Text style={{ fontSize: 25, fontFamily: "KaiseiOpti_400Regular" }}>Delete Account</Text>
            </TouchableOpacity>
        </View>
    );
}
