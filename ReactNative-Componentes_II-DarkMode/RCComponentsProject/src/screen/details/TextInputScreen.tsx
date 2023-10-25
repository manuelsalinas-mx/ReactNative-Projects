import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { HeaderTitle } from '../../components/HeaderTitle'
import { styles } from '../../theme/appTheme'
import { useForm } from '../../hooks/useForm'
import { CustomSwitch } from '../../components/CustomSwitch'
import { ThemeContext } from '../../context/theme/ThemeContext'

export const TextInputScreen = () => {

    const { form, setvalue, isSubscribed } = useForm({
        email: '',
        phone: '',
        username: '',
        isSubscribed: false
    })

    const { theme: { colors } } = useContext(ThemeContext)

    return (

        <View style={{ flex: 1 }}>
            <BackButton />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView>
                        <View style={styles.globalMargin}>
                            <HeaderTitle title='Text Inputs' />

                            <TextInput
                                style={tStyles.field}
                                placeholder='email'
                                keyboardType='email-address'
                                autoCorrect={false}
                                // value={form.email}
                                onChangeText={(text: string) => setvalue(text, 'email')}
                            />

                            <TextInput
                                style={tStyles.field}
                                placeholder='phone'
                                keyboardType='phone-pad'
                                // value={form.phone}
                                onChangeText={(text: string) => setvalue(text, 'phone')}
                            />

                            <TextInput
                                style={tStyles.field}
                                placeholder='username'
                                keyboardType='ascii-capable'
                                autoCorrect={false}
                                // value={form.username}
                                onChangeText={(text: string) => setvalue(text, 'username')}
                            />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...tStyles.switchTextRow, color: colors.text }}>isSubscribed</Text>
                                <CustomSwitch isOn={isSubscribed} onChange={(enabled) => setvalue(enabled, 'isSubscribed')} />
                            </View>

                            <Text style={{ ...tStyles.json, color: colors.text, backgroundColor: colors.card }}>{JSON.stringify(form, null, 3)}</Text>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View>

    )
}

const tStyles = StyleSheet.create({
    field: {
        backgroundColor: '#EBEBEB',
        paddingHorizontal: 10,
        borderRadius: 5,
        height: 40,
        borderColor: 'silver',
        borderWidth: 1,
        marginVertical: 8
    },
    json: {
        fontSize: 16,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 10
    },
    switchTextRow: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});
