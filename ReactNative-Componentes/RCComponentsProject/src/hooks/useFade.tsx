import { useRef } from "react";
import { Animated } from "react-native";


export const useFade = () => {

    const opacity = useRef(new Animated.Value(0.2)).current;
    const position = useRef(new Animated.Value(-100)).current;

    const fadeIn = () => {
        // Fade
        Animated.timing(
            opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }
        ).start(() => console.log('Animacion fade in ha terminado'))

    }

    const movingAnimation = (initialPoition: number = -100, duration: number = 1000) => {

        position.setValue(initialPoition)
        // slide
        Animated.timing(
            position, {
            toValue: 0,
            duration,
            useNativeDriver: true
        }
        ).start()
    }

    const fadeOut = () => {
        // Fade
        Animated.timing(
            opacity, {
            toValue: 0.2,
            duration: 500,
            useNativeDriver: true
        }
        ).start()

        // Slide
        Animated.timing(
            position, {
            toValue: -100,
            duration: 1000,
            useNativeDriver: true
        }
        ).start()
    }

    return {
        opacity,
        fadeIn,
        fadeOut,
        position,
        movingAnimation
    }
}