import React from 'react'
import { View } from 'react-native'

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#5856D6',
                height: 1200,
                width: 1000,
                transform: [
                    { rotate: '-70deg' }
                ],
                top: -250
            }}
        >

        </View>
    )
}
