import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Dimensions, TouchableOpacity, Alert } from 'react-native';
import styles from '../../styles';
import Header from '../../component/Header';
import { Icon } from "@rneui/themed";
import { FIRESTORE, FIREBASE_AUTH } from '../../FirebaseConfig';
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { Slider } from '@rneui/themed';
import { StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export default function SurveyDetail({ route, navigation }) {
    const { surveyId } = route.params;
    const [survey, setSurvey] = useState(null);
    const colors = ["#331B4B", "#42245C", "#522E6D", "#62387E", "#72428F",  "#814CA0", "#9156B1", "#A160C2", "#B16AD3", "#AD7DDC"]

    const color = (value) => {
        return colors[(value-1)];  
      };

    useEffect(() => {
        const loadSurvey = async () => {
            const user = FIREBASE_AUTH.currentUser;
            if (user) {
                const surveyRef = doc(FIRESTORE, "surveys", user.uid, "surveys", surveyId);
                const docSnap = await getDoc(surveyRef);
                if (docSnap.exists()) {
                    setSurvey({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            }
        };
        loadSurvey();
    }, [surveyId]);

    const handleDelete = async () => {
        const user = FIREBASE_AUTH.currentUser;
        if (user) {
            const surveyRef = doc(FIRESTORE, "surveys", user.uid, "surveys", surveyId);
            await deleteDoc(surveyRef);
            navigation.goBack();
        }
    };

    const confirmDelete = () => {
        Alert.alert(
            "Delete Survey",
            "Are you sure you want to delete this survey entry?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", onPress: handleDelete, style: 'destructive' }
            ],
            { cancelable: false }
        );
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#AEC5EB', flex: 1, flexGrow: 1 }}>
            <Header navigation={navigation}/>
            <View style={styles.headerJournal}>
                <Text style={styles.titleJournal}>
                    {survey ? new Date(survey.date.toDate()).toLocaleDateString() : "(No Date)"}
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}><Icon name='exit-to-app' size={0.10 * width} /></TouchableOpacity>
                <TouchableOpacity onPress={confirmDelete}><Icon name='delete' size={0.10 * width} /></TouchableOpacity>
            </View>
            <ScrollView>
            <View style={{justifyContent: "center", alignItems:"center"}}>
      <Text style={newStyles.fieldText}>Understanding how you're feeling is key to unlocking mental health.</Text>
     <View style={{padding:2}}></View>
      </View>
      <View style={styles.chatHistoryScroll}>
        <Text style={newStyles.fieldText}>Your mood can change how you act. On {new Date(survey.date.toDate()).toLocaleDateString()}, your mood was at:</Text>
        <View style={{padding:2}}></View>
        <Slider
          style={{ width: 0.8 * width, alignSelf: "center"}}
          value={survey ? survey.mood : 5}
          maximumValue={10}
          minimumValue={0}
          step={1}
          disabled={true}
          trackStyle={{ height: 5, backgroundColor: "transparent" }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon 
                name="happy-outline"
                type="ionicon"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color={color(survey ? survey.mood : 0)}
              />
            ),
          }}
        />
        <View style={{padding:2}}></View>
        <Text style={newStyles.fieldText}>Your energy can change your drive. On {new Date(survey.date.toDate()).toLocaleDateString()}, your energy was at:</Text>
        <View style={{padding:2}}></View>
        <Slider
          style={{ width: 0.8 * width, alignSelf: "center"}}
          value={survey ? survey.energy : 5}
          maximumValue={10}
          minimumValue={0}
          step={1}
          disabled={true}
          trackStyle={{ height: 5, backgroundColor: "transparent"}}
          thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon 
                name="flash-outline"
                type="ionicon"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color={color(survey ? survey.energy : 0)}
              />
            ),
          }}
        />
        <View style={{padding:2}}></View>
        <Text style={newStyles.fieldText}>Stress can negatively impact your mental and physical health. On {new Date(survey.date.toDate()).toLocaleDateString()}, your stress was at:</Text>
        <View style={{padding:2}}></View>
        <Slider
          style={{ width: 0.8 * width, alignSelf: "center"}}
          value={survey ? survey.stress : 5}
          disabled={true}
          maximumValue={10}
          minimumValue={0}
          step={1}
          
          trackStyle={{ height: 5, backgroundColor: "transparent" }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
          thumbProps={{
            children: (
              <Icon 
                name="heartbeat"
                type="font-awesome"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color={color(survey ? survey.stress : 0)}
              />
            ),
          }}
        />
        <Text></Text>
        <View style={{padding:10}}></View>
      </View>
      </ScrollView>
        </SafeAreaView>
    );
}

const newStyles = StyleSheet.create({
    fieldText: {
      fontFamily: "KaiseiOpti_400Regular",
      color: "#331B4B",
      fontSize: 0.05 * width,
      margin: 0.02 * width,
      padding: 10
    },
  });