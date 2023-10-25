import React from 'react'
import 'react-native-gesture-handler';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/navigations/MenuLateral';
// import { MenuLateralBasico } from './src/navigations/MenuLateralBasico';
// import { NavigationStack } from './src/navigations/NavigationStack';


export const App = () => {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
    </NavigationContainer>
  )
}

export default App;
