import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const NotificationsScreen = () => {

    const { top, bottom, left, right } = useSafeAreaInsets()

    return (
        <View style={{ marginTop: top }}>
            <Text style={styles.mainTitle}>Notifications Screen</Text>
        </View>
    )
}
