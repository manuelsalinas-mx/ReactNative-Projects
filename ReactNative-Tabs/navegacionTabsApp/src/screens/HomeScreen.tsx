import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { DrawerScreenProps } from '@react-navigation/drawer'

interface Props extends StackScreenProps<any, any> { };
// interface Props extends DrawerScreenProps<any, any> { };

export const HomeScreen = ({ navigation }: Props) => {
    useEffect(() => {
        navigation.setOptions({
            // headerLeft: () => <Text>Hola</Text>

        })
    }, [])



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
