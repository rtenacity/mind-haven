import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import styles from '../styles';
import Header from '../component/Header';
import NavigationBar from '../component/Navbar';
import { collection, addDoc } from 'firebase/firestore';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { FIREBASE_AUTH, FIRESTORE } from '../FirebaseConfig';


export default function MeditationSetup({ navigation }) {

    const [time, setTime] = useState(0);
    const [initialTime, setInitialTime] = useState(0);
    const [playing, setPlaying] = useState(false);
    const user = FIREBASE_AUTH.currentUser;

    const handleTimeSet = (minutes) => {
        const seconds = minutes * 60;
        setTime(seconds);
        setInitialTime(seconds);
        setPlaying(true);
    };

    const populateWeekWithRandomData = async () => {
        const user = FIREBASE_AUTH.currentUser;
        if (!user) return;
    
        const now = new Date();
        const currentDay = now.getDay(); // Sunday - 0, Monday - 1, ..., Saturday - 6
        const startOfWeek = new Date(now.setDate(now.getDate() - currentDay)); // Set to Sunday
    
        for (let i = 0; i < 7; i++) {
            const day = new Date(startOfWeek);
            day.setDate(day.getDate() + i);
            const dateString = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
            
            // Generate a random session time between 5 and 30 minutes (in increments of 5)
            const randomTime = 5 * (Math.floor(Math.random() * 6) + 1);
            const seconds = randomTime * 60;
            
            const sessionRef = collection(FIRESTORE, "meditation_sessions", user.uid, dateString);
            await addDoc(sessionRef, {
                time: randomTime,
                completedAt: day,
            });
            console.log(`${randomTime} minute session for ${day.toDateString()} saved`);
        }
    };    

    const handleComplete = async () => {
        if (user) {
            const date = new Date();
            const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            const sessionRef = collection(FIRESTORE, "meditation_sessions", user.uid, dateString);
            await addDoc(sessionRef, {
                time: initialTime / 60,
                completedAt: date,
            });
            console.log(`${initialTime / 60} minute session completed`);
        }
        setPlaying(false);
        setTime(0);
        return [false, 0]; // Do not restart the timer automatically
    };

    return (
        
        <SafeAreaView style={[styles.dashboardContainer, { textAlign: 'center', alignItems: 'center' }]}>
            <Header navigation={navigation} />
            <ScrollView>
                <View style={[{ textAlign: 'center', alignItems: 'center'}]}>
                    <CountdownCircleTimer
                        key={time}
                        isPlaying={playing}
                        duration={time}
                        size={300}
                        colors={['#8A7DDC']}
                        trailColor={'#A7B7E8'}
                        onComplete={handleComplete}>
                        {({ remainingTime }) => (
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.titleText}>{Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? '0' : ''}{Math.floor(remainingTime % 60)}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                    <Button buttonStyle={{ borderRadius: 20, marginRight: 10 }} color='#8A7DDC' onPress={() => setPlaying(false)}>
                                        <Icon name="pause" type='ionicon' size={30} />
                                    </Button>
                                    <Button buttonStyle={{ borderRadius: 20, marginRight: 10 }} color='#8A7DDC' onPress={() => setPlaying(true)}>
                                        <Icon name="controller-play" type='entypo' size={30} />
                                    </Button>
                                    <Button buttonStyle={{ borderRadius: 20 }} color='#AD7DDC' onPress={() => {
                                        setPlaying(false);
                                        setTime(0);
                                    }}>
                                        <Icon name="refresh" type='ionicon' size={30} />
                                    </Button>
                                </View>
                            </View>
                        )}
                        </CountdownCircleTimer>
                        <View style={{ paddingVertical: 5 }} />

                        <View style={styles.meditationButtonViewSetup}>
                            <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => {handleTimeSet(5)}}>
                                <Text style={styles.meditationButtonText}>5 Min</Text>
                            </Button>
                            <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => {handleTimeSet(10)}}>
                                <Text style={styles.meditationButtonText}>10 Min</Text>
                            </Button>
                        </View>
                        <View style={styles.meditationButtonViewSetup}>
                            <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => {handleTimeSet(15)}}>
                                <Text style={styles.meditationButtonText}>15 Min</Text>
                            </Button>
                            <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => {handleTimeSet(20)}}>
                                <Text style={styles.meditationButtonText}>20 Min</Text>
                            </Button>
                        </View>
                        <View style={styles.meditationButtonViewSetup}>
                            <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => {handleTimeSet(25)}}>
                                <Text style={styles.meditationButtonText}>25 Min</Text>
                            </Button>
                            <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={() => {handleTimeSet(30)}}>
                                <Text style={styles.meditationButtonText}>30 Min</Text>
                            </Button>
                        </View>
                        <View style = {styles.meditationButtonViewSetup}>
                            <Button color="#8A7DDC" buttonStyle={styles.meditationButtonSetup} onPress={populateWeekWithRandomData}>
                                <Text style={styles.meditationButtonText}>Populate Week</Text>
                            </Button>
                        </View>
                    </View>
                    <View style = {{height: 150, width:20}}/>
                </ScrollView>
            <NavigationBar nav={navigation} />
        </SafeAreaView>
    );

}