import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean
    accion: (numeroTexto: string) => void;
}

export const BotonCalc = ({ texto, color = '#2D2F31', ancho = false, accion }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => accion(texto)}
        >
            <View
                style={{
                    ...stylesButton.boton,
                    backgroundColor: color,
                    width: ancho ? 180 : 80
                }}
            >
                <Text style={{
                    ...stylesButton.botonTexto,
                    color: (color === 'gray') ? 'black' : 'white'
                }}
                >{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}


const stylesButton = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        backgroundColor: 'gray',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
});
