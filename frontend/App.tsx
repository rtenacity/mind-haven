import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './screens/Landing';
import LogIn from './screens/LogIn';
import DashboardScreen from './screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPageScreen from './screens/SignUpPages/SignUpPage';
import SignUpOptionsScreen from './screens/SignUpPages/SignUpOptions';
import PasswordSignUpScreen from './screens/SignUpPages/PasswordSignUp';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { User } from 'firebase/auth';
import JournalScreen from './screens/journalPages/Journal';
import NewJournalScreen from './screens/journalPages/newJournal';


const AppStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

function AppLayout() {
  return (
      <AppStack.Navigator  screenOptions={{ headerShown: false }}>
        {/* <AppStack.Screen name="Landing" component={LandingScreen} /> */}
        <AppStack.Screen name="Dashboard" component={DashboardScreen} />
        {/* <AppStack.Screen name="SignUp" component={SignUpPageScreen} /> */}
        {/* <AppStack.Screen name="SignUpOptions" component={SignUpOptionsScreen} /> */}
        {/* <AppStack.Screen name="PasswordSignUp" component={PasswordSignUpScreen} /> */}
        {/* <AppStack.Screen name="LogIn" component={LogIn} /> */}
        <AppStack.Screen name="Journal" component={JournalScreen} />
        <AppStack.Screen name="NewJournal" component={NewJournalScreen} />
      </AppStack.Navigator>
  );
}

function AuthLayout() {
  return(<AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Landing" component={LandingScreen} />
    <AuthStack.Screen name="LogIn" component={LogIn} />
    <AuthStack.Screen name="SignUp" component={SignUpPageScreen} />
    <AuthStack.Screen name="SignUpOptions" component={SignUpOptionsScreen} />
    <AuthStack.Screen name="PasswordSignUp" component={PasswordSignUpScreen} />
  </AuthStack.Navigator>)
}

function App() {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log(user)
      setUser(user)
    }
      )
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
          <Stack.Screen name='InsideLayout' component={AppLayout} options={{ headerShown: false }} />
        ) : <Stack.Screen name = 'Auth' component={AuthLayout} options = {{headerShown: false}}>

        </Stack.Screen>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


