import React, { useState } from 'react'
import { ActivityIndicator, Animated, StyleProp, View, ViewStyle } from 'react-native'
import { useFade } from '../hooks/useFade';
import { TurboModuleRegistry } from 'react-native';

interface Props {
    imgUrl: string;
    style?: StyleProp<ViewStyle>
}

export const FadeInImage = ({ imgUrl, style }: Props) => {
    const { opacity, fadeIn } = useFade()
    const [isLoading, setLoading] = useState(true)


    const renderImage = () => {
        fadeIn()
        setLoading(false)
    }


    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            {
                isLoading && <ActivityIndicator
                    size={50}
                    color={'black'}
                    style={{
                        position: 'absolute'
                    }}
                />
            }

            <Animated.Image
                source={{ uri: imgUrl }}
                onLoadEnd={renderImage}
                style={{
                    ...style as any,
                    opacity
                }}
            />
        </View>
    )
}
