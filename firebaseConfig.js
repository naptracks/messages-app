import { initializeApp } from "firebase/app";

import {getReactNativePersistence, initializeAuth} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getFirestore, collection} from 'firebase/firestore'


// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below 

const firebaseConfig = {
  apiKey: "AIzaSyDPLtfU5-bCC0kmIm3ZsZjo34WFbbraHRE",

  authDomain: "messenger-624e9.firebaseapp.com",

  projectId: "messenger-624e9",

  storageBucket: "messenger-624e9.appspot.com",

  messagingSenderId: "751223432248",

  appId: "1:751223432248:web:d5574343ca2d12cf98f2cd",

  measurementId: "G-GXYBLK66FE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');
