import React from "react";
import { View, Dimensions } from "react-native";
import { CartesianChart , Bar } from "victory-native";
import {
    KaiseiOpti_400Regular,
  } from "@expo-google-fonts/kaisei-opti";
import { useFont } from "@shopify/react-native-skia";
import styles from "../styles"; 

const { width, height } = Dimensions.get('window');

const DATA = [
    { day: 'Mon', minutes: 30},
    { day: 'Tue', minutes: 40},
    { day: 'Wed',  minutes: 50},
    { day: 'Thu', minutes: 40, },
    { day: 'Fri', minutes: 30},
    { day: 'Sat', minutes: 40,},
    { day: 'Sun', minutes: 50},
    
];



export default function MeditationBar() {
    const font = useFont(KaiseiOpti_400Regular, 14)
    return (
        <View style={ styles.graphContainer }>
            <CartesianChart
            data={DATA}
            xKey="day" yKeys={["minutes"]}
            domainPadding={{ left: 40, right: 40}}
            axisOptions={{  
                font,
                tickCount: { x: 7, y: 0 },
                lineColor: "#AEC5EB",
            }}
            domain = {{y: [0, 55]}} 
            >
            {({ points, chartBounds }) => (
                //👇 pass a PointsArray to the Bar component, as well as options.
                <Bar
                points={points.minutes}
                chartBounds={chartBounds}
                color="#8A7DDC"
                roundedCorners={{ topLeft: 10, topRight: 10, bottomLeft: 10, bottomRight: 10}}
                innerPadding={0.3}
                />
            )}
            </CartesianChart>
        </View>
    );
}