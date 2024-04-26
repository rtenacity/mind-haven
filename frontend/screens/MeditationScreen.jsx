import React, {useState} from "react";
import { View, SafeAreaView, ScrollView, Image, Text } from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import styles from "../styles";
import { Button, Icon } from "@rneui/themed";

export default function MeditationScreen({ route, navigation }) {
    const [playing, setPlaying] = useState(true);
    const { time } = route.params;
    return (
        <SafeAreaView style = {[styles.realMeditationScreenContainer, {backgroundColor: '#AEC5EB'} ]}>
            <Image source={require("../assets/landscape.jpg")} style={styles.meditationScreenImage} />
            <CountdownCircleTimer
            isPlaying={playing}
            duration={time}
            size={300}
            colors={['#8A7DDC']}
            trailColor={'#A7B7E8'}>
                {({ remainingTime }) =>
                <View style = {{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.titleText}>{Math.floor(remainingTime/60)}{':'}{remainingTime % 60 < 10 ? '0' : ''}{Math.floor(remainingTime%60)}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                        <Button buttonStyle={{borderRadius: 20, marginRight: 10}} color = '#8A7DDC' onPress={
                            () => {
                                setPlaying(false);
                            }
                        }>
                            <Icon name="pause" type='ionicon' size={50}/></Button>
                        <Button buttonStyle={{borderRadius: 20, marginRight: 10}} color = '#8A7DDC' onPress={
                            () => {
                                setPlaying(true);
                            }
                        }>
                            <Icon name="controller-play" type='entypo' size={50}/></Button>
                        <Button buttonStyle={{borderRadius: 20}} color = '#AD7DDC' onPress={() => {navigation.navigate('MeditationSetup')}}>
                            <Icon name="exit-outline" type='ionicon' size={50}/></Button>
                    </View>
                </View>}
            </CountdownCircleTimer>
        </SafeAreaView>
    );
}