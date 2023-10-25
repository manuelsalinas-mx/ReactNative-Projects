import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props extends StackScreenProps<any, any> { };

export const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.mainTitle}>HomeScreen</Text>
            <Button
                title='Abrir Detalle'
                onPress={() => navigation.navigate('DetailScreen')}
            />
        </View>
    )
}
