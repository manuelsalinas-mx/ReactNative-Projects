import React from 'react'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView, StyleSheet } from 'react-native';
// import { ContadorScreen } from './src/screens/ContadorScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { RelativePositionScreen } from './src/screens/RelativePositionScreen';
// import { AbsolutePositionScreen } from './src/screens/AbsolutePositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    // <ContadorScreen />
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#404985',
      }}
    >
      {/* <BoxObjectModelScreen /> */}
      {/* < DimensionesScreen /> */}
      {/* <RelativePositionScreen /> */}
      {/* <AbsolutePositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  )
}

export default App;