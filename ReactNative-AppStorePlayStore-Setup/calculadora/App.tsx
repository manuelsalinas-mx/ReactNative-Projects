import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/AppTheme';

export const App = () => {
  return (
    <SafeAreaView
      style={styles.fondo}
    >
      <StatusBar
        backgroundColor='black' // android
        barStyle='light-content' // ios
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;
