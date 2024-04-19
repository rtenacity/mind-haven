
import * as React from 'react';
import { ScrollView, SafeAreaView, View, Text, Dimensions, Image, Button } from 'react-native';
import styles from '../styles';
import  Header from '../component/Header';

const { width, height } = Dimensions.get('window');

const barData = [
  { value: 50, label: "M" },
  { value: 10, label: "T" },
  { value: 40, label: "W" },
  { value: 95, label: "T" },
  { value: 85, label: "F" },
  { value: 91, label: "S" },
  { value: 35, label: "S" }
];

var num = 0;

export default function DashboardScreen({navigation}) {
    return (
      <SafeAreaView style = {styles.dashboardContainer}>
        <ScrollView
        horizontal={false}
        >
          <Header navigation={navigation}/>
          <Text style = {styles.dashboardTitle}>Meditation</Text>
          <View style = {styles.dashBox}>
          </View>
          <Text style = {styles.dashboardTitle}>Recent Entries</Text>
          <View style = {styles.dashBox}>
            
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }