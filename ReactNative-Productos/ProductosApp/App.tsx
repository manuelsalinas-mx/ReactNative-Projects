import "react-native-gesture-handler";
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { NavigationStack } from './src/navigation/NavigationStack';
import { AuthProvider } from "./src/context/authContext";

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <NavigationStack />
      </AppState>
    </NavigationContainer>
  )
}

export default App;