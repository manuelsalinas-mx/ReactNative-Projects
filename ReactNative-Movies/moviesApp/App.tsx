import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { } from 'react-native';
import { NavigationStack } from './src/navigation/NavigationStack';

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  )
}

export default App;