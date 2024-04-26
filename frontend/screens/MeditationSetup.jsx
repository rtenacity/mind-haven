import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import styles from '../styles';
import Header from '../component/Header';
import NavigationBar from '../component/Navbar';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


export default function MeditationSetup({ navigation }) {

    const [time, setTime] = useState(0);
    const [playing, setPlaying] = useState(false);

    return (
        
        <SafeAreaView style={[styles.dashboardContainer, { textAlign: 'center', alignItems: 'center' }]}>
            <Header navigation={navigation} />
            <View style={{ paddingVertical: 10 }} />

            <CountdownCircleTimer
                key={time}
                isPlaying={playing}
                duration={time}
                size={300}
                colors={['#8A7DDC']}
                trailColor={'#A7B7E8'}>
                {({ remainingTime }) =>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.titleText}>{Math.floor(remainingTime / 60)}{':'}{remainingTime % 60 < 10 ? '0' : ''}{Math.floor(remainingTime % 60)}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <Button buttonStyle={{ borderRadius: 20, marginRight: 10 }} color='#8A7DDC' onPress={
                                () => {
                                    setPlaying(false);
                                }
                            }>
                                <Icon name="pause" type='ionicon' size={30} /></Button>
                            <Button buttonStyle={{ borderRadius: 20, marginRight: 10 }} color='#8A7DDC' onPress={
                                () => {
                                    setPlaying(true);
                                }
                            }>
                                <Icon name="controller-play" type='entypo' size={30} /></Button>
                            <Button buttonStyle={{ borderRadius: 20 }} color='#AD7DDC' onPress={() => {
                                setPlaying(false); // Stop the timer
                                setTime(0); // Reset the time to 0
                            }}>
                                <Icon name="refresh" type='ionicon' size={30} />
                            </Button>
                        </View>
                    </View>}
            </CountdownCircleTimer>
            <View style={{ paddingVertical: 10 }} />

            <View style={styles.meditationButtonViewSetup}>
                <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => { setTime(5 * 60); setPlaying(true); }}>
                    <Text style={styles.meditationButtonText}>5 Min</Text>
                </Button>
                <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => { setTime(10 * 60); setPlaying(true); }}>
                    <Text style={styles.meditationButtonText}>10 Min</Text>
                </Button>
            </View>
            <View style={styles.meditationButtonViewSetup}>
                <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => { setTime(15 * 60); setPlaying(true); }}>
                    <Text style={styles.meditationButtonText}>15 Min</Text>
                </Button>
                <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => { setTime(20 * 60); setPlaying(true); }}>
                    <Text style={styles.meditationButtonText}>20 Min</Text>
                </Button>
            </View>
            <View style={styles.meditationButtonViewSetup}>
                <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => { setTime(25 * 60); setPlaying(true); }}>
                    <Text style={styles.meditationButtonText}>25 Min</Text>
                </Button>
                <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => { setTime(30 * 60); setPlaying(true); }}>
                    <Text style={styles.meditationButtonText}>30 Min</Text>
                </Button>
            </View>

            <NavigationBar nav={navigation} />
        </SafeAreaView>
    );

}