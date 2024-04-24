import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATxhQYzNs3VeZ37c4fHzNledpy6VI99sA",
    authDomain: "tsasoftwaredev-c87ca.firebaseapp.com",
    projectId: "tsasoftwaredev-c87ca",
    storageBucket: "tsasoftwaredev-c87ca.appspot.com",
    messagingSenderId: "649599788698",
    appId: "1:649599788698:web:0079ad1fbf2f2ec79be123",
    measurementId: "G-DTGLVB8B4Q"
};

const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const FIRESTORE = getFirestore(FIREBASE_APP);
