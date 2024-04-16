import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './screens/Landing';
import LogIn from './screens/LogIn';
import DashboardScreen from './screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpPageScreen from './screens/SignUpPage';
import SignUpOptionsScreen from './screens/SignUpOptions';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="SignUp" component={SignUpPageScreen} />
        <Stack.Screen name="SignUpOptions" component={SignUpOptionsScreen} />
        <Stack.Screen name="Login" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


