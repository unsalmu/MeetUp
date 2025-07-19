// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import OnboardingScreen from './src/screens/OnboardingScreen';
// …other screens

// Define the shape of your navigation stack
export type RootStackParamList = {
  Onboarding: undefined;
  SignIn:      undefined;
  // …other screens
};

// Create the Stack
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        {/* add more screens here as you build them */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
