
import * as React from 'react';
import { ScrollView, SafeAreaView, View, Text, Dimensions, Image, Button } from 'react-native';
import styles from '../styles';
import  Header from '../component/Header';
import { Icon } from "@rneui/themed";

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
          </View>
          <Text style = {styles.dashboardTitle}>Recent Entries</Text>
          <View style = {styles.dashBox}>
            <View style = {styles.journalEntries}>
              <View style = {styles.imageJournalEntry}>
                <Icon name = "image-outline" type = "ionicon" size={0.12 * width}/>
              </View>
              <View style= {{marginLeft:0.03 * width}}>
                <Text style = {styles.journalTitle}>{"(Untitled)"}</Text>
                <Text style = {styles.journalDate}>Date</Text>
              </View>
            </View>
            <View style = {styles.journalEntries}>
              <View style = {styles.imageJournalEntry}>
                <Icon name = "image-outline" type = "ionicon" size={0.12 * width}/>
              </View>
              <View style= {{marginLeft:0.03 * width}}>
                <Text style = {styles.journalTitle}>{"(Untitled)"}</Text>
                <Text style = {styles.journalDate}>Date</Text>
              </View>
            </View>
            <View style = {styles.journalEntries}>
              <View style = {styles.imageJournalEntry}>
                <Icon name = "image-outline" type = "ionicon" size={0.12 * width}/>
              </View>
              <View style= {{marginLeft:0.03 * width}}>
                <Text style = {styles.journalTitle}>{"(Untitled)"}</Text>
                <Text style = {styles.journalDate}>Date</Text>
              </View>
            </View>
            <View style = {styles.moreButton}>
              <Icon name = "arrow-down-circle-outline" type = "ionicon" size={0.12 * width}/>
              <Text style={styles.journalTitle}>
                More
              </Text>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }