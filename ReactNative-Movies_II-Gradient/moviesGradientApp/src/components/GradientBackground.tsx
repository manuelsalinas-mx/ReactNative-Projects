import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradiantContext';

interface Props {
    children: JSX.Element | JSX.Element[];
}


export const GradientBackground = ({ children }: Props) => {

    const { colors } = useContext(GradientContext)

    useEffect(() => {
        console.log({ colors })
    }, [colors])


    return (
        <View style={{
            flex: 1,
            // backgroundColor: 'yellow'
        }}
        >
            <LinearGradient
                colors={[colors.primary, colors.secondary]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.7 }}
            />
            {children}
        </View>
    )
}
