import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MyMap } from '../components/MyMap'

export const MapScreen = () => {

    const { top } = useSafeAreaInsets()

    return (
        <View
            style={{
                flex: 1,
                top: top
            }}
        >
            <MyMap />
        </View>
    )
}
