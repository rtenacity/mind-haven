import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../styles';
import Header from '../component/Header';
import { Icon } from "@rneui/themed";
const { width, height } = Dimensions.get('window');

export default function JournalScreen({navigation}) {
    return(
        <SafeAreaView style={styles.dashboardContainer}>
            <Header />
            <View style = {styles.newJournal}>
                <Text style = {styles.dashboardTitle}>New Journal</Text>
                <TouchableOpacity>
                    <View style={{
                        width: 0.14 * width,
                        height: 0.14 * width, 
                        borderRadius: 0.14 * width/2,
                        backgroundColor: "#8A7DDC",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Icon name="add" size={0.12 * width}/> 
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.newJournal}>
                <Text style = {styles.dashboardTitle}>Recent Entries</Text>
                <Icon name="search" size={0.12 * width} style={{textAlign: 'right'}}/>
            </View>
            <View>
                
            </View>
        </SafeAreaView>
    );        
}