import "react-native-gesture-handler";
import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { NavigationStack } from "./src/navigation/NavigationStack";
import { ThemeProvider } from "./src/context/theme/ThemeContext";


const App = () => {
  return (
    <AppState>
      <NavigationStack />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;



