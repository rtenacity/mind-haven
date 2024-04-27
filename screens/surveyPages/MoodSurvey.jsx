import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import styles from '../../styles';
import Header from '../../component/Header';
import { Icon } from "@rneui/themed";
import NavigationBar from '../../component/Navbar';
import { FIRESTORE, FIREBASE_AUTH } from '../../FirebaseConfig';
import { collection, onSnapshot, query, where } from "firebase/firestore";

const { width, height } = Dimensions.get('window');

export default function SurveyScreen({navigation}) {
    const [surveys, setSurveys] = useState([]);
    const user = FIREBASE_AUTH.currentUser;
    const [surveyNum, setSurveyNum] = useState(6);
    const [allSurveysDisplayed, setAllSurveysDisplayed] = useState(false);
    const [displayHeight, setDisplayHeight] = useState(calculateInitialHeight(6));

    function calculateInitialHeight(numEntries) {
        const baseHeightPerEntry = 0.1 * height; // Adjust based on your styling for each entry
        return numEntries * baseHeightPerEntry;
    }

    useFocusEffect(
        React.useCallback(() => {
            if (!user) {
                console.log("No user logged in!");
                return;
            }

            const surveysRef = collection(FIRESTORE, "surveys", user.uid, "surveys");
            const q = query(surveysRef, where("date", "<=", new Date()));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const loadedSurveys = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setSurveys(loadedSurveys);
            });

            return () => unsubscribe(); // Cleanup on unmount
        }, [user])
    );

    const handleDisplayAllSurveys = () => {
        setAllSurveysDisplayed(true);
        setDisplayHeight(surveys.length * calculateInitialHeight(1)); // Calculate total height based on all surveys
    };

    return (
        <SafeAreaView style={styles.dashboardContainer}>
            <ScrollView>
                <Header navigation={navigation}/> 
                <View style={styles.newJournal}>
                    <Text style={styles.dashboardTitle}>New Survey</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NewSurvey')}>
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
                    <Text style={styles.dashboardTitle}>Recent Entries</Text>
                    <TouchableOpacity><Icon name="search" size={0.12 * width} style={{textAlign: 'right'}}/></TouchableOpacity>
                </View>
                <View style={styles.journalEntries}></View>
                <View style={[styles.journalBox, {height: displayHeight}]}>
                    {surveys.reverse().slice(0, allSurveysDisplayed ? surveys.length : surveyNum).map(survey => (
                        <TouchableOpacity key={survey.id} onPress={() => navigation.navigate('SurveyDetail', { surveyId: survey.id })} style={styles.journalEntries}>
                            <View style={styles.imageJournalEntry}>
                                <Icon name="happy-outline" type="ionicon" size={0.12 * width}/>
                            </View>
                            <View style={{ marginLeft: 0.03 * width }}>
                                <Text style={styles.journalTitle}>Survey {new Date(survey.date.toDate()).toLocaleDateString()}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                    {!allSurveysDisplayed && (
                        <TouchableOpacity style={styles.moreButton} onPress={handleDisplayAllSurveys}>
                            <Icon name="arrow-down-circle-outline" type="ionicon" size={0.12 * width}/>
                            <Text style={styles.journalTitle}>More</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <View style={{marginBottom: height * 0.2}}/>
            </ScrollView>
            <NavigationBar nav={navigation} />
        </SafeAreaView>
    );        
}
