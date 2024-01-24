import React from 'react';
import { Text, View } from 'react-native';
import Login from './src/Components/Navigation/LoginNavigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  );
}
