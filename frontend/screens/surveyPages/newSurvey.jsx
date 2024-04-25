import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../../styles';
import { Icon } from "@rneui/themed";
import { FIRESTORE, FIREBASE_AUTH } from '../../FirebaseConfig';
import { addDoc, collection } from "firebase/firestore";
import Slider from '@react-native-community/slider';

const { width } = Dimensions.get('window');

export default function MoodSurveyScreen({ navigation }) {
    const [mood, setMood] = useState(5);
    const [energy, setEnergy] = useState(5);
    const [stress, setStress] = useState(5);
    const user = FIREBASE_AUTH.currentUser;

    const handleSave = async () => {
        if (user) {
            const surveysRef = collection(FIRESTORE, "surveys", user.uid, "surveys");
            await addDoc(surveysRef, {
                mood,
                energy,
                stress,
                date: new Date()
            });
        }
    };

    return (
        <SafeAreaView style={{backgroundColor: '#AEC5EB', flex: 1, flexGrow: 1}}>
            <View style={styles.headerSurvey}>
                <TouchableOpacity onPress={handleSave}>
                    <Icon name='done' size={0.10 * width} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Icon name='exit-to-app' size={0.10 * width} />
                </TouchableOpacity>
            </View>
            <View style={{ padding: 20 }}>
                <Text style={styles.label}>Mood (1-10):</Text>
                <Slider
                    value={mood}
                    onValueChange={setMood}
                    maximumValue={10}
                    minimumValue={1}
                    step={1}
                    style={{ width: '100%', height: 40 }}
                />
                <Text style={styles.label}>Energy (1-10):</Text>
                <Slider
                    value={energy}
                    onValueChange={setEnergy}
                    maximumValue={10}
                    minimumValue={1}
                    step={1}
                    style={{ width: '100%', height: 40 }}
                />
                <Text style={styles.label}>Stress (1-10):</Text>
                <Slider
                    value={stress}
                    onValueChange={setStress}
                    maximumValue={10}
                    minimumValue={1}
                    step={1}
                    style={{ width: '100%', height: 40 }}
                />
            </View>
        </SafeAreaView>
    );
}
