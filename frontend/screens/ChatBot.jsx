import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Dimensions, ActivityIndicator, StyleSheet } from 'react-native';
import styles from '../styles';
import Header from '../component/Header';
import NavigationBar from '../component/Navbar';
import { OPENAI_API_KEY } from '@env';
import OpenAI from 'openai';
import Ionicons from '@expo/vector-icons/Ionicons';


const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

const { width, height } = Dimensions.get('window');

export default function ChatBoxScreen({ navigation }) {
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
      <Header />
      <View style={newStyles.chatContainer}>
        <ScrollView 
          style={newStyles.chatHistoryScroll}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {chatHistory.map((chat, index) => (
            <View key={index} style={newStyles.messageContainer}>
              <View style={[newStyles.message, chat.role === "user" ? newStyles.userMessage : newStyles.systemMessage]}>
                <Text style={styles.normalText}>{chat.content}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={newStyles.inputWrapper}>
          <TextInput
            style={newStyles.inputContainer}
            onChangeText={setInputText}
            value={inputText}
            placeholder="Type your message here..."
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity
            style={newStyles.sendButton}
            onPress={sendMessage}
            disabled={isLoading || !inputText.trim()}
          >
            <Ionicons name="send" size={32} color="black" />
          </TouchableOpacity>
          {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
        </View>
      </View>
      <NavigationBar nav={navigation} />
    </SafeAreaView>
  );
}

// Updated styles
const newStyles = StyleSheet.create({
  chatContainer: {
    height: '73%',
    // Add shadow to the container's border
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chatHistoryScroll: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#331B4B",
    marginHorizontal: 10,
    // Add shadow to the scroll area
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  message: {
    backgroundColor: '#AFCDFF',
    flexDirection: 'row',
    maxWidth: '80%',
    borderRadius: 10,
    marginVertical: 0.01 * width,
    padding: 5,
    marginHorizontal: 0.01 * width,
    // Add shadow to each message
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#8A7DDC',
    borderRadius: 10,
  },
  systemMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    borderRadius: 10,
  },
  messageContainer: {
    flexDirection: 'row',  // This supports horizontal alignment.
    paddingHorizontal: 0.02 * width,
    paddingVertical: 0.02 * width,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  inputContainer: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    marginRight: 10,
    fontFamily: "KaiseiOpti_400Regular",
    // Add shadow to the input field
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  sendButton: {
    width: 70,
    height: 50,
    backgroundColor: "#8A7DDC",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // Add shadow to the send button
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: "KaiseiOpti_400Regular",
  },
});

