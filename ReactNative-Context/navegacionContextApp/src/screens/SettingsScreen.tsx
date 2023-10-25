import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

export const SettingsScreen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.mainTitle}>SettingsScreen</Text>
            <Button
                title='Atras via Pop'
                onPress={() => navigation.pop()}
            />

            <Button
                title='Atras via goBack'
                onPress={() => navigation.goBack()}
            />

            <Button
                title='ir a Home'
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}
