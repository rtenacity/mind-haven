import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import styles from '../styles';
import Header from '../component/Header';
import { Icon } from "@rneui/themed";
import NavigationBar from '../component/Navbar';
import { OPENAI_API_KEY } from '@env'
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

const { width } = Dimensions.get('window');

export default function ChatBoxScreen({navigation}) {
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([{ role: "system", content: "Hello there! How can I assist you today?" }]);
    const [isLoading, setIsLoading] = useState(false);
    const scrollViewRef = useRef();

    const sendMessage = async () => {
        if (!inputText.trim()) return;
        const newUserMessage = { role: "user", content: inputText.trim() };
        setChatHistory([...chatHistory, newUserMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: chatHistory.concat(newUserMessage),
                temperature: 0.7,
                max_tokens: 150,
                top_p: 1,
            });
            const botResponse = { role: "system", content: response.choices[0].message.content };
            setChatHistory(currentHistory => [...currentHistory, botResponse]);
        } catch (error) {
            setChatHistory(currentHistory => [...currentHistory, { role: "system", content: "Oops, something went wrong. Please try again!" }]);
            console.error('Error:', error);
        }
        setIsLoading(false);
    };

    return (
        <SafeAreaView style={styles.dashboardContainer}>
            <ScrollView>
                <Header />
                {/* Chat Interface */}
                <View style={styles.chatContainer}>
                    <ScrollView 
                        ref={scrollViewRef}
                        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
                    >
                        {chatHistory.map((chat, index) => (
                            <View key={index} style={[styles.message, chat.role === "system" ? styles.systemMessage : styles.userMessage]}>
                                <Text style={styles.messageText}>{chat.content}</Text>
                            </View>
                        ))}
                    </ScrollView>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputText}
                        value={inputText}
                        placeholder="Type your message here..."
                        onSubmitEditing={sendMessage}
                    />
                    {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
                    <Button title="Send" onPress={sendMessage} disabled={isLoading} />
                </View>
                {/* End of Chat Interface */}
            </ScrollView>
            <NavigationBar nav={navigation} />
        </SafeAreaView>
    );
}

// Additional styles
const newStyles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  systemMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
  },
  messageText: {
    fontSize: 16,
  },
});
