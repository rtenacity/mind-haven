import React, { useState, useEffect } from 'react'; // Import useEffect normally for other uses
import { useFocusEffect } from '@react-navigation/native'; // Specifically import useFocusEffect from react-navigation
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import styles from '../../styles';
import Header from '../../component/Header';
import { Icon } from "@rneui/themed";
import NavigationBar from '../../component/Navbar';
import { FIRESTORE, FIREBASE_AUTH } from '../../FirebaseConfig';
import { collection, onSnapshot, query, where } from "firebase/firestore";


const { width, height } = Dimensions.get('window');


export default function SurveyScreen({navigation}) {
    const [journals, setJournals] = useState([]);
    const user = FIREBASE_AUTH.currentUser;

    useFocusEffect(
        React.useCallback(() => {
            if (!user) {
                console.log("No user logged in!");
                return;
            }

            const journalsRef = collection(FIRESTORE, "journals", user.uid, "journals");
            // Consider adjusting the query to suit your specific timestamp requirements
            const q = query(journalsRef, where("date", "<=", new Date()));
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const loadedJournals = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setJournals(loadedJournals);
            });

            return () => unsubscribe(); // Cleanup on unmount
        }, [user])
    );



    return(
        <SafeAreaView style={styles.dashboardContainer}>
            <ScrollView>
                <Header /> 
                <View style = {styles.newJournal}>
                    <Text style = {styles.dashboardTitle}>New Journal</Text>
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
                    <Text style = {styles.dashboardTitle}>Recent Entries</Text>
                    <TouchableOpacity><Icon name="search" size={0.12 * width} style={{textAlign: 'right'}}/></TouchableOpacity>
                </View>
                <View style={styles.journalEntries}></View>
                <View style = {styles.journalBox}>
                {journals.slice(0).reverse().map(journal => (
                    <TouchableOpacity key={journal.id} onPress={() => navigation.navigate('JournalDetail', { journalId: journal.id })} style={styles.journalEntries}>
                        <View style = {styles.imageJournalEntry}>
                            <Icon name="image-outline" type="ionicon" size={0.12 * width}/>
                        </View>
                        <View style={{ marginLeft:0.03 * width }}>
                            <Text style = {styles.journalTitle}>{journal.title || "(Untitled)"}</Text>
                            <Text style = {styles.journalDate}>{new Date(journal.date.toDate()).toLocaleDateString()}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                    <TouchableOpacity style = {styles.moreButton}>
                        <Icon name = "arrow-down-circle-outline" type = "ionicon" size={0.12 * width}/>
                        <Text style={styles.journalTitle}>
                            More
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{marginBottom: height * 0.2}}/>
            </ScrollView>
            <NavigationBar nav={navigation} />
        </SafeAreaView>
    );        
}