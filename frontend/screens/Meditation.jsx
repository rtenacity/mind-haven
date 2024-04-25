import * as React from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native';
import styles from '../styles';
import NavigationBar from '../component/Navbar';
import Header from '../component/Header';
import { Button } from '@rneui/themed';

export default function MeditationSetup({ navigation }) {
    return (
        <SafeAreaView style = {[styles.dashboardContainer, {justifyContent: 'center', textAlign: 'center', alignItems: 'center'}]}>
            <ScrollView>
                <Header />
                <View style = {{textAlgin: 'center', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {styles.titleMeditation}>Meditation Timer</Text>
                    <View style = {{
                        height: 300, width: 300,
                        borderColor: "#8A7DDC",
                        borderWidth: 5, borderRadius: 300/2,
                        marginVertical: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <TextInput placeholder="00 : 00" keyboardType="numeric" maxlength = "5" style = {{
                            fontSize: 50,
                            textAlign: 'center',
                            width: 200,
                            height: 50 
                        }}/>
                    </View>
                </View>
                <Text style = {styles.orText}>Or Choose:</Text>
                <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 10}}>
                    <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup} onPress={() => {navigation.navigate("MeditationScreen")}}>
                        <Text style = {{color: '#331B4B', fontSize: 25}}>5 Min</Text>
                    </Button>
                    <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup}>
                        <Text style = {{color: '#331B4B', fontSize: 25}}>10 Min</Text>
                    </Button>
                </View>
                <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 10}}>
                    <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup}>
                        <Text style = {{color: '#331B4B', fontSize: 25}}>15 Min</Text>
                    </Button>
                    <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup}>
                        <Text style = {{color: '#331B4B', fontSize: 25}}>20 Min</Text>
                    </Button>
                </View>
                <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 40, marginVertical: 10}}>
                    <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup}>
                        <Text style = {{color: '#331B4B', fontSize: 25}}>25 Min</Text>
                    </Button>
                    <Button color = "#8A7DDC" buttonStyle= {styles.meditationButtonSetup}>
                        <Text style = {{color: '#331B4B', fontSize: 25}}>30 Min</Text>
                    </Button>
                </View>
                <View style = {{padding: 75}}></View>
            </ScrollView>
            <NavigationBar nav={navigation} />
        </SafeAreaView>
    );
}