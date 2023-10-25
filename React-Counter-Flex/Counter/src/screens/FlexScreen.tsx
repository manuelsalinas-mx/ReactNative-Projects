import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.caja1}>Caja 1</Text>
            <Text style={styles.caja2}>Caja 2</Text>
            <Text style={styles.caja3}>Caja 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4C5EC5',
        // flexDirection: 'row',
        // justifyContent: 'flex-end',
        // alignItems: 'flex-end',
        // flexWrap: 'wrap-reverse'
    },
    caja1: {
        // flex: 1,
        borderColor: 'white',
        borderWidth: 2,
        fontSize: 30,
        color: 'yellow',
        // alignSelf: 'center'
    },
    caja2: {
        // flex: 1,
        borderColor: 'white',
        borderWidth: 2,
        fontSize: 30,
        color: 'yellow',
        // alignSelf: 'flex-start'
    },
    caja3: {
        // flex: 1,
        borderColor: 'white',
        borderWidth: 2,
        fontSize: 30,
        color: 'yellow',
        // alignSelf: 'flex-end'
    }
});
