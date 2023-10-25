import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            <View style={styles.cajaAzul} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#404985',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // flexWrap: 'nowrap'
    },
    cajaMorada: {
        // flex: 2,
        width: 100,
        height: 100,
        backgroundColor: '#9465FF',
        borderWidth: 5,
        borderColor: 'white',
        // alignSelf: 'flex-end'm
        // top: 100
    },
    cajaNaranja: {
        // flex: 2,
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'white',
        // alignSelf: 'center',
        // left: 100,
        // top: 50

    },
    cajaAzul: {
        // flex: 4,
        width: 100,
        height: 100,
        backgroundColor: '#76D6FF',
        borderWidth: 5,
        borderColor: 'white',
        // alignSelf: 'center'
    },
});
