# React-Counter-Flex
En esta sección nos enfocaremos principalmente en comprender los 3 bloques principales para el diseño de aplicaciones en React
Native:
1. Box Object Model
2. Position
3. Flex Layout

   
Entraremos en detalles en cada uno de estos tres bloques de diseño para poder sentir que tenemos la libertad necesaria para crear los diseños funcionales que queramos.

### Para poder ver todos los diseños hay que intercambiar en el `App.tsx` los compomentes 
```
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
```

![koke](https://github.com/manuels-bts/React-Counter-Flex/assets/116088500/264271d1-4686-46eb-bed3-366e2a2eeb12)
