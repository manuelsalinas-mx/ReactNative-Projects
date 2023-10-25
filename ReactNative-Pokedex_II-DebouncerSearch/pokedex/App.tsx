import React from 'react'
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from './src/screens/HomeScreen'
import { NavigationStack } from './src/navigators/NavigationStack';
import { Tabs } from './src/navigators/Tabs';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      <Tabs />
    </NavigationContainer>
  )
}

export default App;
