import React, { useEffect, useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { CartesianChart, Bar } from "victory-native";
import { KaiseiOpti_400Regular } from "@expo-google-fonts/kaisei-opti";
import { useFont } from "@shopify/react-native-skia";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import "firebase/firestore";
import { getAuth } from 'firebase/auth';
import styles from "../styles";

const { width, height } = Dimensions.get('window');

export default function MeditationBar() {
  const font = useFont(KaiseiOpti_400Regular, 14);
  const [meditationTimes, setMeditationTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeditationData = async () => {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;

      if (user) {
        const today = new Date();
        const currentDay = today.getDay();
        const sunday = new Date(today.setDate(today.getDate() - currentDay));

        const dateList = Array.from({ length: 7 }).map((_, index) => {
          const nextDate = new Date(sunday);
          nextDate.setDate(sunday.getDate() + index);
          return `${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`;
        });
        


        let dataByDate = {};

        for (const date of dateList) {
          const sessionsRef = collection(db, "meditation_sessions", user.uid, date);
          const querySnapshot = await getDocs(sessionsRef);
          dataByDate[date] = 0;

          querySnapshot.forEach((doc) => {
            const { time } = doc.data();
            dataByDate[date] += time;
          });
        }

        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const formattedData = dateList.map(date => {
          const day = new Date(date);
          day.setDate(day.getDate() + 1)
          return {
            day: days[day.getDay()],
            minutes: dataByDate[date],
            date: date
          };
        });

        setMeditationTimes(formattedData);
        setIsLoading(false);
      }
    };

    fetchMeditationData();
  }, []);

  if (isLoading || meditationTimes.length === 0) {
    return <View style={styles.container}><Text>Loading data...</Text></View>;
  }

  const maxYDomain = Math.max(...meditationTimes.map(item => item.minutes)) + 5;

  return (
    <View style={styles.graphContainer}>
      <CartesianChart
        data={meditationTimes}
        xKey="day" yKeys={["minutes"]}
        domainPadding={{ left: 40, right: 40}}
        axisOptions={{
          font,
          tickCount: { x: 7, y: 0 },
          lineColor: "#AEC5EB",
        }}
        domain={{y: [0, maxYDomain]}} 
      >
        {({ points, chartBounds }) => (
          <Bar
            points={points.minutes}
            chartBounds={chartBounds}
            color="#8A7DDC"
            roundedCorners={{ topLeft: 5, topRight: 5, bottomLeft: 0, bottomRight: 0}}
            innerPadding={0.3}
          />
        )}
      </CartesianChart>
    </View>
  );
}
