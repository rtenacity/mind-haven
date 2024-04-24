import React, { useRef, useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native';
import styles from '../../styles';
import Header from '../../component/Header';
import { Icon } from "@rneui/themed";
import { FIRESTORE, FIREBASE_AUTH } from '../../FirebaseConfig';
import { addDoc, collection } from "firebase/firestore";

const { width, height } = Dimensions.get('window');

export default function JournalScreen({navigation}) {
    const scrollViewRef = useRef();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const user = FIREBASE_AUTH.currentUser;

    const handleChangeText = (newText) => {
        setText(newText);
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    const handleSave = async () => {
        if (user && title.trim() !== '' && text.trim() !== '') {
            const journalsRef = collection(FIRESTORE, "journals", user.uid, "journals");
            await addDoc(journalsRef, {
                title: title,
                text: text,
                date: new Date()
            });
        }
    };

    return (
        <SafeAreaView style={{backgroundColor: '#AEC5EB', flex: 1, flexGrow: 1}}>
            <View style={styles.headerJournal}>
                <TextInput
                    style = {styles.titleTextbox}
                    placeholder='Untitled'
                    value={title}
                    onChangeText={setTitle}
                />
                <TouchableOpacity onPress={handleSave}><Icon name='done' size={0.10 * width}/></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Journal')}><Icon name='exit-to-app' size={0.10 * width}/></TouchableOpacity>
                {/* <TouchableOpacity><Icon name='delete' size={0.10 * width}/></TouchableOpacity> */}
            </View>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>
                <ScrollView
                    style = {{paddingVertical: 0.02 * width, paddingHorizontal: 0.03 * width}}
                    keyboardShouldPersistTaps="handled"
                    ref={scrollViewRef}
                >
                    <TextInput
                        style = {{padding: 10, fontSize: 25, textAlignVertical: 'top',}}
                        multiline={true}
                        placeholder='Start writing...'
                        keyboardAppearance='dark'
                        onChangeText={handleChangeText}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
