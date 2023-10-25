import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const MapScreen = () => {
    const { top } = useSafeAreaInsets()

    return (
        <View
            style={{
                top: top
            }}
        >
            <Text style={{ fontSize: 30 }}>MAp Screen</Text>
        </View>
    )
}
