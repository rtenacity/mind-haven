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
  const [chatHistory, setChatHistory] = useState([{ role: "system", content: "Develop a text-based AI chatbot that provides mental health support and emotional counseling. The chatbot should simulate a compassionate, understanding, and supportive interaction for users experiencing emotional distress, anxiety, depression, or other mental health issues. Target Users: Individuals seeking non-critical emotional support and guidance, particularly those who may not have immediate access to human counselors. Empathetic Engagement: The chatbot should initiate conversations with a gentle, empathetic tone, acknowledging the user's feelings and validating their experiences. It should use language that conveys understanding and care. Active Listening Skills: Program the chatbot to reflect and paraphrase the user's statements, demonstrating active listening. This includes responses that show it is attentive to the user’s disclosed feelings and thoughts. Crisis Detection and Handling: The chatbot must recognize keywords or phrases indicating severe distress or a crisis situation. Upon detection, it should provide immediate resources, such as crisis hotline numbers, and urge the user to seek professional help. Guided Conversations: Incorporate guided mindfulness exercises, simple cognitive behavioral techniques, or relaxation prompts that users can perform during the chat to help manage their stress, anxiety, or depressive symptoms. Privacy Assurance: Remind users at the beginning of interactions that their privacy is respected but also clarify the limitations of privacy in digital communications, emphasizing that the chatbot is not a replacement for professional therapy. Resource Provisioning: When appropriate, the chatbot should suggest additional resources, like articles, videos, and digital tools that could help the user understand and manage their mental health better." }]);
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
    <SafeAreaView style={styles.chatbotContainer}>
      <Header navigation={navigation}/>
      <View style={styles.chatContainer}>
        <ScrollView 
          style={styles.chatHistoryScroll}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {chatHistory.slice(1).map((chat, index) => (
            <View key={index} style={styles.messageContainer}>
              <View style={[styles.message, chat.role === "user" ? styles.userMessage : styles.systemMessage]}>
                <Text style = {styles.normalText}>{chat.content}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.chatInputContainer}
            onChangeText={setInputText}
            value={inputText}
            placeholder="Type your message here..."
            onSubmitEditing={sendMessage}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendMessage}
            disabled={!inputText.trim()}
          >
            {isLoading ? (
      <Text style={styles.normalText}>...</Text>
    ) : (
      <Ionicons name="send" size={32} color="black" />
    )}
          </TouchableOpacity>
          {/* {isLoading && <ActivityIndicator size="small" color="#0000ff" />} */}
        </View>
      </View>
      <NavigationBar nav={navigation} />
    </SafeAreaView>
  );
}

