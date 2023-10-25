
import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export const LoadingScreen = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}

        >
            <ActivityIndicator
                size={100}
                color={'purple'}
            />
            <Text>Loading...</Text>
        </View>
    )
}
