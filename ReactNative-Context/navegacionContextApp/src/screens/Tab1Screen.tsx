import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { Colores, styles } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {
    useEffect(() => {
        console.log('Tab 1 effect');
    }, [])



    return (
        <View
            style={styles.globalMargin}
        >
            <Text style={styles.mainTitle}> Tab 1</Text>
            <Text>
                <TouchableIcon icon='rocket' />
                <TouchableIcon icon='battery-charging-outline' />
                <TouchableIcon icon='desktop-outline' />
                <TouchableIcon icon='rainy-sharp' />
                <TouchableIcon icon='skull-sharp' />
                <TouchableIcon icon='logo-android' />
                <TouchableIcon icon='logo-apple' />
            </Text>
        </View>
    )
}
