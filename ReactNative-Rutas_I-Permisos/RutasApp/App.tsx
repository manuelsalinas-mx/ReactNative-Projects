import React from 'react'
import { NavigationStack } from './src/navigations/NavigationStack';
import { NavigationContainer } from "@react-navigation/native";
import { StackAnimationTypes } from 'react-native-screens';
import { PermissionsProvider } from './src/context/PermissionsContext';

const AppState = ({ children }: any) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <NavigationStack />
      </AppState>
    </NavigationContainer>
  )
}

export default App;
