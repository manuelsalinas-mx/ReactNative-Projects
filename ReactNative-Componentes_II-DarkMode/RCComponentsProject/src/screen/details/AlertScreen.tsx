import React from 'react'
import { Alert, Button, Text, View } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { HeaderTitle } from '../../components/HeaderTitle'
import { styles } from '../../theme/appTheme'
import prompt from 'react-native-prompt-android'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert('Info', 'Estas mostrando una alerta simple',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                },
            ],
            {
                cancelable: true, // Esto permite quitar la alerta tocando el fondo en ANDROID
                onDismiss: () => console.log('On dismiss')
            }
        );
    }

    const showPromptForIos = () => {
        Alert.prompt(
            'Info',
            'Estas mostrando una alerta simple',
            (valor: string) => console.log('info: ', valor),
            'plain-text',
            'pre texto',
            'number-pad',
        );
    }

    const showPromptForAll = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <BackButton />
            <View style={styles.globalMargin}>
                <HeaderTitle title='Alerts' />

                <Button
                    title='Alerta Comun para iOS & Android'
                    onPress={showAlert}
                />

                <View style={{ height: 10 }} />

                <Button
                    title='Prompt solo para iOS'
                    onPress={showPromptForIos}
                />

                <View style={{ height: 10 }} />

                <Button
                    title='Prompt Lib para iOS & Android'
                    onPress={showPromptForAll}
                />
            </View>
        </View>
    )
}
