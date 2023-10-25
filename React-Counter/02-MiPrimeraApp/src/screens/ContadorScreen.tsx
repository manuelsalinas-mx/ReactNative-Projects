import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FloatingButton } from '../components/FloatingButton';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(0)

    const suma = (cantidad: number) => {
        const total = contador + cantidad
        if (total >= 0) {
            setContador(contador + cantidad);
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.title}> Contador: {contador}
            </Text>

            < FloatingButton
                title='-1'
                position='bottomLeft'
                onPress={() => suma(-1)}
            />

            < FloatingButton
                title='+1'
                position='bottomRight'
                onPress={() => suma(1)}
            />


        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
        top: -15
    }
})