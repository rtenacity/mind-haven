import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import styles from "../../styles";
import { Icon } from "@rneui/themed";
import { FIRESTORE, FIREBASE_AUTH } from "../../FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { Slider } from '@rneui/themed';
import Header from "../../component/Header";
import { StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export default function MoodSurveyScreen({ navigation }) {
  const [mood, setMood] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [stress, setStress] = useState(5);
  const user = FIREBASE_AUTH.currentUser;
  const colors = ["#331B4B", "#42245C", "#522E6D", "#62387E", "#72428F",  "#814CA0", "#9156B1", "#A160C2", "#B16AD3", "#AD7DDC"]

 
  const color = (value) => {
    return colors[(value-1)];  
  };

  const handleSave = async () => {
    if (user) {
      const surveysRef = collection(FIRESTORE, "surveys", user.uid, "surveys");
      await addDoc(surveysRef, {
        mood,
        energy,
        stress,
        date: new Date(),
      });
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#AEC5EB", flex: 1, flexGrow: 1 }}>
    <ScrollView>
      <View style={styles.headerJournal}>
          <Text style={styles.titleJournal}>
              {new Date().toDateString() || "(Untitled)"}
          </Text>
          <TouchableOpacity onPress={handleSave}><Icon name='done' size={0.10 * width}/></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}><Icon name='exit-to-app' size={0.10 * width} /></TouchableOpacity>
      </View>

      <View style={{justifyContent: "center", alignItems:"center"}}>
      <Text style={newStyles.fieldText}>Understanding how you're feeling is key to unlocking mental health.</Text>
     <View style={{padding:2}}></View>
      </View>
      <View style={styles.chatHistoryScroll}>
        <Text style={newStyles.fieldText}>Your mood can change how you act. Rate how you're feeling on a scale from 1-10:</Text>
        <View style={{padding:2}}></View>
        <Slider
          style={{ width: 0.8 * width, alignSelf: "center"}}
          value={mood}
          onValueChange={setMood}
          maximumValue={10}
          minimumValue={0}
          step={1}
          allowTouchTrack = {true}
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
                color={color(mood)}
              />
            ),
          }}
        />
        <View style={{padding:2}}></View>
        <Text style={newStyles.fieldText}>Your energy can change your drive. Rate your energy level on a scale from 1-10:</Text>
        <View style={{padding:2}}></View>
        <Slider
          style={{ width: 0.8 * width, alignSelf: "center"}}
          value={energy}
          onValueChange={setEnergy}
          maximumValue={10}
          minimumValue={0}
          step={1}
          allowTouchTrack
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
                color={color(energy)}
              />
            ),
          }}
        />
        <View style={{padding:2}}></View>
        <Text style={newStyles.fieldText}>Stress can negatively impact your mental and physical health. Rate your stress level on a scale from 1-10:</Text>
        <View style={{padding:2}}></View>
        <Slider
          style={{ width: 0.8 * width, alignSelf: "center"}}
          value={stress}
          onValueChange={setStress}
          maximumValue={10}
          minimumValue={0}
          step={1}
          allowTouchTrack
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
                color={color(stress)}
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
  centerFieldText: {
    fontFamily: "KaiseiOpti_400Regular",
    color: "#331B4B",
    fontSize: 0.05 * width,
    margin: 0.02 * width,
    textAlign: 'center',
    padding: 10
  },
  fieldText: {
    fontFamily: "KaiseiOpti_400Regular",
    color: "#331B4B",
    fontSize: 0.05 * width,
    margin: 0.02 * width,
    padding: 10
  },
});