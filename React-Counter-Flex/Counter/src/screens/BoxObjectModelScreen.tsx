import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        // width: 150,
        borderWidth: 3,
        paddingHorizontal: 100,
        paddingVertical: 20,
        // backgroundColor: 'orange'
    },
    container: {
        flex: 1,
        backgroundColor: 'orange'
    }
});