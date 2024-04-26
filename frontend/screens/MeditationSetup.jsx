import * as React from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from '../styles';
import NavigationBar from '../component/Navbar';
import Header from '../component/Header';
import { Button } from '@rneui/themed';

export default function MeditationSetup({ navigation }) {
    return (
        <SafeAreaView style = {[styles.dashboardContainer, {textAlign: 'center', alignItems: 'center'}]}>
            <Header navigation={navigation}/>
            <View style = {{paddingVertical: 30}}/>
            <View style = {{textAlgin: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <Text style = {styles.titleMeditation}>Meditation Timer</Text>
            </View>
            <Text style = {styles.orText}>Choose:</Text>
            <View style = {styles.meditationButtonViewSetup}>
                <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup} onPress={() => {navigation.navigate("MeditationScreen", {time: 5 * 60});}}>
                    <Text style = {styles.meditationButtonText}>5 Min</Text>
                </Button>
                <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup} onPress={() => {navigation.navigate("MeditationScreen", {time: 10 * 60});}}>
                    <Text style = {styles.meditationButtonText}>10 Min</Text>
                </Button>
            </View>
            <View style = {styles.meditationButtonViewSetup}>
                <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup} onPress={() => {navigation.navigate("MeditationScreen", {time: 15 * 60});}}>
                    <Text style = {styles.meditationButtonText}>15 Min</Text>
                </Button>
                <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup} onPress={() => {navigation.navigate("MeditationScreen", {time: 20 * 60});}}>
                    <Text style = {styles.meditationButtonText}>20 Min</Text>
                </Button>
            </View>
            <View style = {styles.meditationButtonViewSetup}>
                <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup} onPress={() => {navigation.navigate("MeditationScreen", {time: 25 * 60});}}>
                    <Text style = {styles.meditationButtonText}>25 Min</Text>
                </Button>
                <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup} onPress={() => {navigation.navigate("MeditationScreen", {time: 30 * 60});}}>
                    <Text style = {styles.meditationButtonText}>30 Min</Text>
                </Button>
            </View>
            <View style = {{padding: 75}}></View>
            <NavigationBar nav={navigation} />
        </SafeAreaView>
    );
}