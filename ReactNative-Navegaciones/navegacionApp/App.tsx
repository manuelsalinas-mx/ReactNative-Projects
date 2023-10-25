import React from 'react'
import 'react-native-gesture-handler';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack } from './src/navigations/NavigationStack';


export const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  )
}

export default App;
