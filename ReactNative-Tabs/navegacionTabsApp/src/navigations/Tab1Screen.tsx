import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { Colores, styles } from '../theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

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
                <Icon name='rocket' size={50} color={Colores.primary} />
                <Icon name='battery-charging-outline' size={50} color={Colores.primary} />
                <Icon name='desktop-outline' size={50} color={Colores.primary} />
                <Icon name='rainy-sharp' size={50} color={Colores.primary} />
                <Icon name='skull-sharp' size={50} color={Colores.primary} />
                <Icon name='logo-android' size={50} color={Colores.primary} />
                <Icon name='logo-apple' size={50} color={Colores.primary} />
            </Text>
        </View>
    )
}
