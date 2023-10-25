import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useFade } from '../../hooks/useFade'
import { Spacer } from '../../components/Spacer'
import { BackButton } from '../../components/BackButton'

export const Animation101Screen = () => {

    const { opacity, fadeIn, fadeOut, position, movingAnimation } = useFade()

    return (
        <View style={styles.container}>
            <BackButton />
            <View style={styles.boxContainer}>
                <Animated.View
                    style={{
                        ...styles.purpleBox,
                        opacity,
                        transform: [{
                            translateY: position
                        }]
                    }}
                />

                <Button
                    title='Fade In'
                    onPress={() => {
                        fadeIn()
                        movingAnimation()
                    }}
                />
                <View style={{ marginVertical: 5 }} />
                <Button
                    title='Fade Out'
                    onPress={fadeOut}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        height: 150,
        width: 150,
        backgroundColor: '#531B93',
        marginBottom: 20,
        borderRadius: 10
    }
});
