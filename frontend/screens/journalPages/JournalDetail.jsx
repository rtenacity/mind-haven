import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Text, ScrollView, Dimensions, TouchableOpacity, Alert } from 'react-native';
import styles from '../../styles';
import Header from '../../component/Header';
import { Icon } from "@rneui/themed";
import { FIRESTORE, FIREBASE_AUTH } from '../../FirebaseConfig';
import { doc, getDoc, deleteDoc } from "firebase/firestore";

const { width } = Dimensions.get('window');

export default function JournalDetail({ route, navigation }) {
    const { journalId } = route.params;
    const [journal, setJournal] = useState(null);

    useEffect(() => {
        const loadJournal = async () => {
            const user = FIREBASE_AUTH.currentUser;
            if (user) {
                const journalRef = doc(FIRESTORE, "journals", user.uid, "journals", journalId);
                const docSnap = await getDoc(journalRef);
                if (docSnap.exists()) {
                    setJournal({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.log("No such document!");
                }
            }
        };
        loadJournal();
    }, [journalId]);

    const handleDelete = async () => {
        const user = FIREBASE_AUTH.currentUser;
        if (user) {
            const journalRef = doc(FIRESTORE, "journals", user.uid, "journals", journalId);
            await deleteDoc(journalRef);
            navigation.goBack();
        }
    };

    const confirmDelete = () => {
        Alert.alert(
            "Delete Journal",
            "Are you sure you want to delete this journal entry?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", onPress: handleDelete, style: 'destructive' }
            ],
            { cancelable: false }
        );
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#AEC5EB', flex: 1, flexGrow: 1 }}>
            <Header />
            <View style={styles.headerJournal}>
                <Text style={styles.titleTextbox}>
                    {journal?.title || "(Untitled)"}
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}><Icon name='exit-to-app' size={0.10 * width} /></TouchableOpacity>
                <TouchableOpacity onPress={confirmDelete}><Icon name='delete' size={0.10 * width} /></TouchableOpacity>
            </View>
            <ScrollView
                style={{ paddingVertical: 0.02 * width, paddingHorizontal: 0.03 * width }}
                keyboardShouldPersistTaps="handled"
            >
                <Text style={{ padding: 10, fontSize: 25, textAlignVertical: 'top', }}>
                    {journal?.text || "No content available."}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}
