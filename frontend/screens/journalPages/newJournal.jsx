import React, {useRef} from 'react';
import { View, SafeAreaView, TouchableOpacity,
         Dimensions, ScrollView, TextInput,
         Keyboard, KeyboardAvoidingView } from 'react-native';
import styles from '../../styles';
import Header from '../../component/Header';
import { Icon } from "@rneui/themed";
const { width, height } = Dimensions.get('window');

export default function JournalScreen({navigation}) {
    const scrollViewRef = useRef();
    const handleChangeText = (newText) => {
        scrollViewRef.current.scrollToEnd({ animated: true });
    };
    return (
        <SafeAreaView style={{backgroundColor: '#AEC5EB', flex: 1, flexGrow: 1}}>
            <View style={styles.headerJournal}>
                <TextInput style = {styles.titleTextbox}
                    placeholder='Untitled'
                />
                <TouchableOpacity onPress={() => Keyboard.dismiss()}><Icon name='done' size={0.10 * width}/></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Journal')}><Icon name='exit-to-app' size={0.10 * width}/></TouchableOpacity>
                <TouchableOpacity><Icon name='delete' size={0.10 * width}/></TouchableOpacity>
            </View>
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={10}>
                <ScrollView
                style = {{paddingVertical: 0.02 * width, paddingHorizontal: 0.03 * width}}
                keyboardShouldPersistTaps="handled"
                ref={scrollViewRef}
                >
                    <TextInput style = {{padding: 10, fontSize: 25, textAlignVertical: 'top',}}
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