
import * as React from 'react';
import { ScrollView, SafeAreaView, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../styles';
import  Header from '../component/Header';
import { Icon } from "@rneui/themed";
import MeditationBar from '../component/MeditationBar';
import NavigationBar from '../component/Navbar';
// import { Button } from 'react-native-elements';


const { width, height } = Dimensions.get('window');

export default function DashboardScreen({navigation}) {
  
    return (
      <SafeAreaView style = {styles.dashboardContainer}>
        <ScrollView
        horizontal={false}
        >
          <Header navigation={navigation}/>
          <Text style = {styles.dashboardTitle}>Meditation</Text>
          <View style = {styles.dashBox}>
            <Text style = {styles.meditationText}>This Week</Text>
            <MeditationBar />
          </View>
          <Text style = {styles.dashboardTitle}>Recent Entries</Text>
          <View style = {styles.dashBox}>
            <TouchableOpacity style = {styles.journalEntries}>
              <View style = {styles.imageJournalEntry}>
                <Icon name = "image-outline" type = "ionicon" size={0.12 * width}/>
              </View>
              <View style= {{marginLeft:0.03 * width}}>
                <Text style = {styles.journalTitle}>{"(Untitled)"}</Text>
                <Text style = {styles.journalDate}>Date</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.journalEntries} onPress = {() => navigation.navigate("Journal")}>
              <View style = {styles.imageJournalEntry}>
                <Icon name = "image-outline" type = "ionicon" size={0.12 * width}/>
              </View>
              <View style= {{marginLeft:0.03 * width}}>
                <Text style = {styles.journalTitle}>{"(Untitled)"}</Text>
                <Text style = {styles.journalDate}>Date</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.journalEntries}>
              <View style = {styles.imageJournalEntry}>
                <Icon name = "image-outline" type = "ionicon" size={0.12 * width}/>
              </View>
              <View style= {{marginLeft:0.03 * width}}>
                <Text style = {styles.journalTitle}>{"(Untitled)"}</Text>
                <Text style = {styles.journalDate}>Date</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style = {styles.moreButton}>
              <Icon name = "arrow-down-circle-outline" type = "ionicon" size={0.12 * width}/>
              <Text style={styles.journalTitle}>
                More
              </Text>
            </TouchableOpacity>
          </View>
          <Text style = {styles.dashboardTitle}>Mood Surverys</Text>
          <View style = {styles.dashBox}>
          </View>
          
        </ScrollView>
        <NavigationBar />
      </SafeAreaView>
    );
  }