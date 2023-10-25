import React, { useRef } from 'react'
import { StyleSheet, Animated, PanResponder, View } from 'react-native'
import { BackButton } from '../../components/BackButton';

export const Animation102Screen = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x, // x,y are Animated.Value
                dy: pan.y,
            },
        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
            ).start();
        },
    });

    return (
        <View style={styles.container}>
            <BackButton />
            <View style={styles.boxContainer}>
                <Animated.View
                    {...panResponder.panHandlers}
                    style={styles.blueBox}
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
    blueBox: {
        height: 150,
        width: 150,
        backgroundColor: '#0096FF',
        borderRadius: 10
    }
});
