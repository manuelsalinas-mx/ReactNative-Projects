import React from 'react'
import { StyleSheet, View } from 'react-native'

export const RelativePositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2EA8FF',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 5,
        borderColor: 'white',
        top: 20
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 5,
        borderColor: 'white'
    },

});
