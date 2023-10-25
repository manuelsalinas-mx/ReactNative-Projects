import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../context/authContext'

interface Props extends StackScreenProps<any, any> { }


export const LoginScreen = ({ navigation }: Props) => {

    const { signIn, errorMessage, removeError } = useContext(AuthContext)

    const { email, password, onChange, } = useForm({
        email: '',
        password: ''
    })

    useEffect(() => {
        // Error?
        if (errorMessage.length === 0) return

        // Alerta
        Alert.alert('Login Incorrecto', errorMessage, [{
            text: "Okay",
            onPress: removeError
        }])

    }, [errorMessage])


    const onLogin = () => {
        console.log("login...")
        console.log({ email, password })
        Keyboard.dismiss()

        signIn({ correo: email, password })
    }

    return (
        <>
            {/* Background */}
            <Background />

            {/* Keyboard avoid  */}
            <KeyboardAvoidingView
                style={{
                    flex: 1
                }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >
                {/* Formulario */}
                <View style={loginStyles.formContainer}>
                    <WhiteLogo />
                    <Text style={loginStyles.title}>Login</Text>

                    <Text style={loginStyles.label}>Email:</Text>
                    <TextInput
                        placeholder='Ingresa email'
                        placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
                        keyboardType='email-address'
                        autoCorrect={false}
                        autoCapitalize='none'
                        underlineColorAndroid={'white'}
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldiOS
                        ]}
                        onChangeText={(text) => onChange(text, 'email')}
                        value={email}
                        onSubmitEditing={onLogin}
                    />

                    <Text style={loginStyles.label}>Contraseña:</Text>
                    <TextInput
                        placeholder='* * * * * *'
                        placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
                        keyboardType='default'
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry={true}
                        underlineColorAndroid={'white'}
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldiOS
                        ]}
                        onChangeText={(text) => onChange(text, 'password')}
                        value={password}
                        onSubmitEditing={onLogin}
                    />

                    {/* Boton Login */}
                    <View style={loginStyles.buttonLoginContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.buttonLogin}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear nueva cuenta */}
                    <View style={loginStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.replace('RegisterScreen')}
                        >
                            <Text style={loginStyles.buttonText}>Nueva Cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
