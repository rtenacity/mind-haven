import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Dimensions, ActivityIndicator, StyleSheet } from 'react-native';
import styles from '../styles';
import Header from '../component/Header';
import NavigationBar from '../component/Navbar';
import { OPENAI_API_KEY } from '@env';
import OpenAI from 'openai';

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
        <ScrollView style={{ flex: 1 }}>
            <Header />
            <View style={styles.chatContainer}>
                <ScrollView 
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
            </View>
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
            <Text style={newStyles.buttonText}>Send</Text>
          </TouchableOpacity>
          {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
        </View>
        <NavigationBar nav={navigation} />
    </SafeAreaView>
  );
}

// Additional styles
const newStyles = StyleSheet.create({
  message: {
    backgroundColor: '#AFCDFF',
    flexDirection: 'row',
    maxWidth: '80%',
    borderRadius: 10,
    marginVertical: 0.01 * width,
    padding: 10,
    marginHorizontal: 0.02 * width,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
  },
  systemMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
    borderRadius: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 0.02 * width,
    paddingVertical: 0.02 * width,
  },
  inputWrapper: {
    position: 'absolute',
    bottom: 150,
    width: '100%',
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
    fontSize: 0.04 * width,  
  },
  sendButton: {
    width: 50,
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: "KaiseiOpti_400Regular",
    fontSize: 0.04 * width,  
    // marginHorizontal: 0.06 * width,
  },
});
