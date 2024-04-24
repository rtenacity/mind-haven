import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import styles from '../styles';
import Header from '../component/Header';
import { Icon } from "@rneui/themed";
import NavigationBar from '../component/Navbar';
import { OPENAI_API_KEY } from '@env'
import OpenAI from 'openai';
import { Card } from 'react-native-elements';


const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

const { width, height } = Dimensions.get('window');

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
                            <View key={index} style = {newStyles.messageContainer}>
                            <Card style={[newStyles.message, chat.role === "user" ? newStyles.userMessage : newStyles.systemMessage]}>
                                <Text style={styles.normalText}>{chat.content}</Text>
                            </Card>
                            </View>
                        ))}
                    </ScrollView>
                    <TextInput
                        style={newStyles.inputContainer}
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
    backgroundColor: '#AFCDFF',
    flexDirection: 'row',
    width: 0.5 * width,
    height: 0.125 * width,
    borderRadius: 0.04 * width,
    marginVertical: 0.01 * width,
    padding: 0.02 * width,
    marginHorizontal: 0.02 * width,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    marginBottom: 0.01 * width,

  },
  systemMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    marginBottom: 0.01 * width,
  },
  messageText: {
    fontSize: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 0.02 * width,
    paddingVertical: 0.02 * width,
  },
    inputContainer: {
        backgroundColor: "white",
        width: 0.85 * width,
        height: 0.08 * height,
        borderRadius: 0.03 * height,
        padding: 0.05 * width,
        marginHorizontal: 0.02 * width,
        fontSize: 0.05 * width,
        marginVertical: 0.02 * width,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        justifyContent: 'center',
    },
});
