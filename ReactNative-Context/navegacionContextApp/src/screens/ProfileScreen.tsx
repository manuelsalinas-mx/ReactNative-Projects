import React, { useContext, useEffect } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigations/NavigationStack';
import { AuthContext } from '../context/AuthContext'


interface Props extends StackScreenProps<RootStackParams, 'ProfileScreen'> { };

export const ProfileScreen = ({ route }: Props) => {

    // console.log(JSON.stringify(props, null, 3))

    const navigator = useNavigation<any>()
    const info = route.params;

    // Set Screen title
    useEffect(() => {
        navigator.setOptions({
            title: info.nombre
        })
    }, [])

    // Set username and image picture oon side menu
    const { changeUsername } = useContext(AuthContext)

    useEffect(() => {
        changeUsername(
            info.nombre,
            info.imagenPerfil
        )
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.mainTitle}>ProfileScreen</Text>

            <View style={styleImage.profileContainer}>
                <Image
                    style={styleImage.profilePicture}
                    source={{
                        uri: `${info.imagenPerfil}`
                    }}
                />

                <Text style={{
                    ...styles.mainTitle,
                    fontWeight: 'bold'
                }}
                >
                    {info.nombre}
                </Text>
            </View>

            <Button
                title='Abrir Ajustes'
                onPress={() => navigator.navigate('SettingsScreen')}
            />
        </View>
    )
}

const styleImage = StyleSheet.create({
    profileContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100
    }
});
