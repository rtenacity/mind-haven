import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from '../styles';
import Header from '../component/Header';
import { Button, Icon } from "@rneui/themed";
import { FIREBASE_AUTH } from '../FirebaseConfig';

const {width, height} = Dimensions.get('window');

export default function UserSettings({navigation}) {
    return (
        <View style={styles.container}>
            <Header />

            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                <Text style={styles.titleText}>Settings</Text>
                <Button
                    buttonStyle={{borderRadius: 20, marginLeft: 1}}
                    color='#AD7DDC'
                    onPress={() => {navigation.navigate('Dashboard')}}
                >
                    <Icon name="exit-outline" type='ionicon' size={30}/>
                </Button>
            </View>
            
            <TouchableOpacity style={[styles.settingsBox, {backgroundColor: '#AD7DDC'}]}>
                <Text style={{fontSize: 25, fontFamily: "KaiseiOpti_400Regular"}}>Change Username</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsBox, {backgroundColor: '#AD7DDC'}]} onPress={() => FIREBASE_AUTH.signOut()}>
                <Text style={{fontSize: 25, fontFamily: "KaiseiOpti_400Regular"}}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.settingsBox, {backgroundColor: '#F88379'}]}>
                <Text style={{fontSize: 25, fontFamily: "KaiseiOpti_400Regular"}}>Delete Account</Text>
            </TouchableOpacity>
        </View>
    );
}
