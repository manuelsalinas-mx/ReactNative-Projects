import React, { useEffect } from 'react'

import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';

export const DetailScreen = () => {
    const navigator = useNavigation<any>();

    useEffect(() => {
        navigator.setOptions({
            title: 'DeTallon', // Overrides the default title
            headerBackTitle: 'Atras Custom' // solo funciona en iOS
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.mainTitle}>DetailScreen</Text>
            <Button
                title='Abrir Perfil'
                onPress={() => navigator.navigate('ProfileScreen')}
            />

            <Text>Navegar con Argumentos (Pasar info a otra pantalla)</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        flexDirection: 'row'
                    }}
                    onPress={() => navigator.navigate('ProfileScreen', {
                        id: 1234567890,
                        nombre: 'Gwen Stacy',
                        imagenPerfil: 'https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1681855894%2Finstasize-website%2Flearn%2Fblonde-woman-selfie-instagram-influencer.webp&w=828&q=75'
                    })}
                >
                    <View style={styles.menuIcon}>
                        <Icon name='bug' size={24} color='white' />
                    </View>
                    <Text style={styles.textoBotonGrande}>Gwen Stacy</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF2F92',
                        flexDirection: 'row'
                    }}
                    onPress={() => navigator.navigate('ProfileScreen', {
                        id: 987654321,
                        nombre: 'Pink',
                        imagenPerfil: 'https://instasize.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmunkee%2Fimage%2Fupload%2Fw_1000%2Cc_fill%2Car_1%3A1%2Cg_auto%2Cr_max%2Fv1681841003%2Finstasize-website%2Flearn%2Fwoman-pink-hair-youtuber-video.webp&w=828&q=75'
                    })}
                >
                    <View style={styles.menuIcon}>
                        <Icon name='rose' size={24} color='white' />
                    </View>
                    <Text style={styles.textoBotonGrande}>Pink</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
