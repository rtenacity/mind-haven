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
  const [surveys, setSurveys] = useState([]);
  const user = FIREBASE_AUTH.currentUser;

  useFocusEffect(
    React.useCallback(() => {
      if (!user) {
        console.log("No user logged in!");
        return;
      }

      // Journals
      const journalsRef = collection(FIRESTORE, "journals", user.uid, "journals");
      const journalsQuery = query(journalsRef, where("date", "<=", new Date()));
      const journalsUnsubscribe = onSnapshot(journalsQuery, (snapshot) => {
        const loadedJournals = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setJournals(loadedJournals);
      });

      // Surveys
      const surveysRef = collection(FIRESTORE, "surveys", user.uid, "surveys");
      const surveysQuery = query(surveysRef, where("date", "<=", new Date()));
      const surveysUnsubscribe = onSnapshot(surveysQuery, (snapshot) => {
        const loadedSurveys = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setSurveys(loadedSurveys);
      });

      return () => {
        journalsUnsubscribe(); // Cleanup journals on unmount
        surveysUnsubscribe(); // Cleanup surveys on unmount
      };
    }, [user])
  );


  return (
    <SafeAreaView style={styles.dashboardContainer}>
      <ScrollView>
        <Header navigation={navigation} />
        <Text style={styles.dashboardTitle}>Meditation</Text>
        <View style={styles.dashBox}>
          <Text style={styles.meditationText}>This Week</Text>
          <MeditationBar key={Date.now()} />
        </View>
        <Text style={styles.dashboardTitle}>Recent Entries</Text>
        <View style={styles.dashBox}>
          {journals.length > 0 ? (
            journals
              .sort((a, b) => b.date.toDate() - a.date.toDate())  // Sorting journals by date
              .slice(0, 4)
              .map(journal => (
                <TouchableOpacity key={journal.id} onPress={() => navigation.navigate('JournalDetail', { journalId: journal.id })} style={styles.journalEntries}>
                  <View style={styles.imageJournalEntry}>
                    <Icon name="journal-outline" type="ionicon" size={0.12 * width} />
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
          {surveys.length > 0 ? (
            surveys.reverse().slice(0, 4).map(survey => (
              <TouchableOpacity key={survey.id} onPress={() => navigation.navigate('SurveyDetail', { surveyId: survey.id })} style={styles.journalEntries}>
                <View style={styles.imageJournalEntry}>
                  <Icon name="happy-outline" type="ionicon" size={0.12 * width} />
                </View>
                <View style={{ marginLeft: 0.03 * width }}>
                  <Text style={styles.journalTitle}>Survey {new Date(survey.date.toDate()).toLocaleDateString()}</Text>
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
        <View style={{ marginBottom: height * 0.15 }} />
      </ScrollView>
      <NavigationBar nav={navigation} />
    </SafeAreaView>
  );
}
