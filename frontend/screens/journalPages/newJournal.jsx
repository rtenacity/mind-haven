import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, TextInput } from 'react-native';
import styles from '../../styles';
import Header from '../../component/Header';
import { Icon } from "@rneui/themed";
const { width, height } = Dimensions.get('window');

export default function JournalScreen({navigation}) {
    return (
        <SafeAreaView style={styles.dashboardContainer}>
            
            <View style={styles.headerJournal}>
                <TextInput style = {styles.titleTextbox}
                    placeholder='Untitled'
                />
                <Icon name='done' size={0.10 * width}/>
                <Icon name='exit-to-app' size={0.10 * width}/>
                <Icon name='delete' size={0.10 * width}/>
            </View>
        </SafeAreaView>
    )
}