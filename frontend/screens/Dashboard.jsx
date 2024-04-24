import * as React from 'react';
import { ScrollView, SafeAreaView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../styles';
import Header from '../component/Header';
import { Icon } from "@rneui/themed";
import MeditationBar from '../component/MeditationBar';
import NavigationBar from '../component/Navbar';
import { useState } from 'react';
import { FIRESTORE, FIREBASE_AUTH } from '../FirebaseConfig';
import { useFocusEffect } from '@react-navigation/native';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

const { width, height } = Dimensions.get('window');

export default function DashboardScreen({ navigation }) {
  const [journals, setJournals] = useState([]);
  const user = FIREBASE_AUTH.currentUser;

  useFocusEffect(
    React.useCallback(() => {
      if (!user) {
        console.log("No user logged in!");
        return;
      }

      const journalsRef = collection(FIRESTORE, "journals", user.uid, "journals");
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

  return (
    <SafeAreaView style={styles.dashboardContainer}>
      <ScrollView>
        <Header navigation={navigation} />
        <Text style={styles.dashboardTitle}>Meditation</Text>
        <View style={styles.dashBox}>
          <Text style={styles.meditationText}>This Week</Text>
          <MeditationBar />
        </View>
        <Text style={styles.dashboardTitle}>Recent Entries</Text>
        <View style={styles.dashBox}>
          {journals.length > 0 ? (
            journals.reverse().slice(0, 4).map(journal => (
              <TouchableOpacity key={journal.id} onPress={() => navigation.navigate('JournalDetail', { journalId: journal.id })} style={styles.journalEntries}>
                <View style={styles.imageJournalEntry}>
                  <Icon name="image-outline" type="ionicon" size={0.12 * width} />
                </View>
                <View style={{ marginLeft: 0.03 * width }}>
                  <Text style={styles.journalTitle}>{journal.title || "(Untitled)"}</Text>
                  <Text style={styles.journalDate}>{new Date(journal.date.toDate()).toLocaleDateString()}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.meditationText}>No new activity</Text>
          )}

          <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('Journal')}>
            <Icon name="arrow-down-circle-outline" type="ionicon" size={0.12 * width} />
            <Text style={styles.journalTitle}>More</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.dashboardTitle}>Mood Surveys</Text>
        <View style={styles.dashBox}>
        </View>
        <View>
          <Text style={styles.dashboardTitle}>Chatbot</Text>
          <View style={styles.dashBox}>
          </View>
        </View>
        <View style={{marginBottom: height * 0.2}}/>
      </ScrollView>
      <NavigationBar nav={navigation} />
    </SafeAreaView>
  );
}
