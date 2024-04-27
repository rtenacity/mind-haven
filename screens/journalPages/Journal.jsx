import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import styles from '../../styles';
import Header from '../../component/Header';
import { Icon } from "@rneui/themed";
import NavigationBar from '../../component/Navbar';
import { FIRESTORE, FIREBASE_AUTH } from '../../FirebaseConfig';
import { collection, onSnapshot, query, where, orderBy } from "firebase/firestore";

const { width, height } = Dimensions.get('window');

export default function JournalScreen({navigation}) {
    const [journals, setJournals] = useState([]);
    const user = FIREBASE_AUTH.currentUser;
    const initialJournalNum = 8;
    const [journalNum, setJournalNum] = useState(initialJournalNum);
    const [allJournalsDisplayed, setAllJournalsDisplayed] = useState(false);
    const [displayHeight, setDisplayHeight] = useState(calculateInitialHeight(initialJournalNum));

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
    
            const journalsRef = collection(FIRESTORE, "journals", user.uid, "journals");
            const q = query(journalsRef, where("date", "<=", new Date()), orderBy("date", "desc"));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const loadedJournals = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })).sort((a, b) => b.date.toDate() - a.date.toDate());  // Ensure sorting by date, descending
                setJournals(loadedJournals);
            });
    
            return () => unsubscribe(); // Cleanup on unmount
        }, [user])
    );

    const handleDisplayAllJournals = () => {
        setAllJournalsDisplayed(true);
        setDisplayHeight(journals.length * calculateInitialHeight(1)); // Calculate total height based on all journals
    };

    return (
        <SafeAreaView style={styles.dashboardContainer}>
            <ScrollView>
                <Header navigation={navigation}/> 
                <View style={styles.newJournal}>
                    <Text style={styles.dashboardTitle}>New Journal</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NewJournal')}>
                        <View style={{
                            width: 0.14 * width,
                            height: 0.14 * width,
                            borderRadius: 0.14 * width / 2,
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
                </View>
                <View style={styles.journalEntries}></View>
                <View style={[styles.journalBox, {height: displayHeight}]}>
                    {journals.slice(0, allJournalsDisplayed ? journals.length : journalNum).map(journal => (
                        <TouchableOpacity key={journal.id} onPress={() => navigation.navigate('JournalDetail', { journalId: journal.id })} style={styles.journalEntries}>
                            <View style={styles.imageJournalEntry}>
                                <Icon name="journal-outline" type="ionicon" size={0.12 * width}/>
                            </View>
                            <View style={{ marginLeft: 0.03 * width }}>
                                <Text style={styles.journalTitle}>{journal.title || "(Untitled)"}</Text>
                                <Text style={styles.journalDate}>{new Date(journal.date.toDate()).toLocaleDateString()}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                    {!allJournalsDisplayed && (
                        <TouchableOpacity style={styles.moreButton} onPress={handleDisplayAllJournals}>
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
