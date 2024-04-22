import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import styles from '../../styles';
import Header from '../../component/Header';
import { Icon } from "@rneui/themed";
const { width, height } = Dimensions.get('window');

export default function JournalScreen({navigation}) {
    return(
        <SafeAreaView style={styles.dashboardContainer}>
            <ScrollView>
                <Header />
                <View style = {styles.newJournal}>
                    <Text style = {styles.dashboardTitle}>New Journal</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NewJournal')}>
                        <View style={{
                            width: 0.14 * width,
                            height: 0.14 * width, 
                            borderRadius: 0.14 * width/2,
                            backgroundColor: "#8A7DDC",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Icon name="add" size={0.12 * width}/> 
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.newJournal}>
                    <Text style = {styles.dashboardTitle}>Recent Entries</Text>
                    <TouchableOpacity><Icon name="search" size={0.12 * width} style={{textAlign: 'right'}}/></TouchableOpacity>
                </View>
                <View style={styles.journalEntries}></View>
                <View style = {styles.journalBox}>
                    <TouchableOpacity style = {styles.journalEntries}>
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
                    <TouchableOpacity style = {styles.journalEntries}>
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
                    <TouchableOpacity style = {styles.journalEntries}>
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
            </ScrollView>
        </SafeAreaView>
    );        
}