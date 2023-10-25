import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { useForm } from '../hooks/useForm'
import { AuthContext } from '../context/authContext'

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {

    const { signUp, errorMessage, removeError } = useContext(AuthContext);

    const { name, email, password, onChange, } = useForm({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        if (errorMessage.length === 0) return;

        Alert.alert('Registro incorrecto', errorMessage, [{
            text: 'Okay',
            onPress: removeError
        }]);

    }, [errorMessage])

    const onRegister = () => {
        console.log({ email, password, name });
        Keyboard.dismiss();
        signUp({
            nombre: name,
            correo: email,
            password
        });
    }

    return (
        <>
            {/* Keyboard avoid  */}
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#5856D6' }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >
                {/* Formulario */}
                <View style={loginStyles.formContainer}>
                    <WhiteLogo />
                    <Text style={loginStyles.title}>Registro</Text>

                    <Text style={loginStyles.label}>Nombre:</Text>
                    <TextInput
                        placeholder='Ingresa nombre'
                        placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
                        autoCorrect={false}
                        autoCapitalize='words'
                        underlineColorAndroid={'white'}
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldiOS
                        ]}
                        onChangeText={(text) => onChange(text, 'name')}
                        value={name}
                        onSubmitEditing={onRegister}
                    />

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
                        onSubmitEditing={onRegister}
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
                        onSubmitEditing={onRegister}
                    />

                    {/* Boton crear cuenta */}
                    <View style={loginStyles.buttonLoginContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.buttonLogin}
                            onPress={onRegister}
                        >
                            <Text style={loginStyles.buttonText}>Crear cuenta</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Ir a Login */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.replace('LoginScreen')}
                        style={loginStyles.backToLoginButton}
                    >
                        <Text style={loginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </>
    )
}
