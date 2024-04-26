import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from '../styles';
import Header from '../component/Header';
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { useFocusEffect } from "@react-navigation/native";
const {width, height} = Dimensions.get('window');

export default function UserSettings() {
    return (
        <View style = {styles.container}>
            <Header />
            <View style = {{textAlign: 'left', alignSelf: 'left'}}>
                <Text style = {styles.titleText}>Settings</Text>
                <Text style = {styles.subtitleText}>Account</Text>
            </View>
            
            <TouchableOpacity style = {[styles.settingsBox, {backgroundColor: '#AD7DDC'}]}>
                    <Text style = {{fontSize: 25, fontFamily: "KaiseiOpti_400Regular"}}>Change Username</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.settingsBox, {backgroundColor: '#AD7DDC'}]} onPress={() => FIREBASE_AUTH.signOut()}>
                    <Text style = {{fontSize: 25, fontFamily: "KaiseiOpti_400Regular"}}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.settingsBox, {backgroundColor: '#F88379',}]}>
                    <Text style = {{fontSize: 25, fontFamily: "KaiseiOpti_400Regular"}}>Delete Account</Text>
            </TouchableOpacity>
        </View>
    );
}