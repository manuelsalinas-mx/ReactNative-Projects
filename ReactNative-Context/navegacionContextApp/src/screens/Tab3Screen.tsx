import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';

export const Tab3Screen = () => {
    useEffect(() => {
        console.log('Tab 3 effect');
    }, [])

    return (
        <View>
            <Text style={styles.mainTitle}> Tab 3</Text>
        </View>
    )
}
