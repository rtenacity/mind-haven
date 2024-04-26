import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import styles from "../../styles";
import { Icon } from "@rneui/themed";
import { FIRESTORE, FIREBASE_AUTH } from "../../FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { Slider } from '@rneui/themed';

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
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#AEC5EB", flex: 1, flexGrow: 1 }}>
      <View style={styles.headerJournal}>
          <Text style={styles.titleJournal}>
              {new Date().toDateString() || "(Untitled)"}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}><Icon name='exit-to-app' size={0.10 * width} /></TouchableOpacity>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.fieldText}> Mood (1-10):</Text>

        <Slider
          value={mood}
          onValueChange={setMood}
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
                color={color(mood)}
              />
            ),
          }}
        />
        <Text style={styles.fieldText}>Energy (1-10):</Text>
        <Slider
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
                name="heartbeat"
                type="font-awesome"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color={color(energy)}
              />
            ),
          }}
        />
        <Text style={styles.fieldText}>Stress (1-10):</Text>
        <Slider
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
      </View>
    </SafeAreaView>
  );
}
