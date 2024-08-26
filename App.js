import { StatusBar } from 'expo-status-bar';
import React from 'react';
import firebase from 'firebase/compat/app';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjkE4V_Ku7_Z05saAuZLoktt9tzZxdMJ0",
  authDomain: "deshi-dev.firebaseapp.com",
  projectId: "deshi-dev",
  storageBucket: "deshi-dev.appspot.com",
  messagingSenderId: "670723129930",
  appId: "1:670723129930:web:b528870e886c9df6c01cb3",
  measurementId: "G-0CGK8X439V"
};

// Initialize Firebase
if(firebase.apps.length === 0){
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}



// Main Code
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName="Landing">
        <Stack.Screen name='Landing' component={LandingScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
