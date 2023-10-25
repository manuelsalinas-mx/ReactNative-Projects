import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { styles } from '../theme/AppTheme';

export const Tab2Screen = () => {
    useEffect(() => {
        console.log('Tab 2 effect');
    }, [])

    return (
        <View>
            <Text style={styles.mainTitle}> Tab 2</Text>
        </View>
    )
}
