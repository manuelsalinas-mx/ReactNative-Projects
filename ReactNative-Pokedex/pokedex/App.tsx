import React from 'react'
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationStack } from './src/navigators/NavigationStack';

export const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  )
}

export default App;
