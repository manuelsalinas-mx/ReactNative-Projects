import React from 'react'
import { StyleSheet, Dimensions, View, Text, useWindowDimensions } from 'react-native';


// const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.20
                }}></View>
                <View style={styles.cajaNaranja}></View>
            </View>
            <Text style={styles.bold}>W: {width}, H:  {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D5FF45',
        width: '100%',
        height: 200
    },
    cajaMorada: {
        backgroundColor: 'purple',
        // width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: 'orange',
    },
    bold: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
