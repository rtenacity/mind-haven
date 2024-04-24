import React, { useState, useEffect } from 'react';

import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, TextInput, Button } from 'react-native';
import styles from '../styles';
import Header from '../component/Header';
import { Icon } from "@rneui/themed";
import NavigationBar from '../component/Navbar';
import axios from 'axios'; // Import Axios for making HTTP requests
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, 
});

const { width, height } = Dimensions.get('window');

export default function ChatBoxScreen({navigation}) {
    const [journals, setJournals] = useState([]);
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([{
        "role": "system",
        "content": "Yo, dont let anyone die"
      },]);

    const sendMessage = async () => {
        setChatHistory([...chatHistory, { "role" : "user", "content": inputText}]);
        // console.log(chatHistory);
        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: chatHistory,
                temperature: 0.8,
                max_tokens: 64,
                top_p: 1,
              });
            console.log(response, response.choices[0].message.content)
            const botResponse = response.choices[0].message.content
            setChatHistory([...chatHistory, { "role": "system", "content": botResponse }]);
            setInputText('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

  
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
                {/* Chat Interface */}
                <View style={styles.chatContainer}>
                    <ScrollView>
                        {chatHistory.map((chat, index) => (
                            <View key={index}>
                                <Text style={styles.journalTitle}>Role: {chat.role}</Text>
                                <Text style={styles.journalTitle}>content: {chat.content}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                        onChangeText={text => setInputText(text)}
                        value={inputText}
                    />
                    <Button title="Send" onPress={sendMessage} />
                </View>
                {/* End of Chat Interface */}
                
            </ScrollView>
            <NavigationBar nav={navigation} />
        </SafeAreaView>
    )

}
