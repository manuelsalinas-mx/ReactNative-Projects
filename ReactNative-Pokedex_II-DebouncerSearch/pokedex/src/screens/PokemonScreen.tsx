import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { RootStackParams } from '../navigators/NavigationStack'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {
    const poke = route.params
    const { top } = useSafeAreaInsets()

    const { isLoading, pokemon } = usePokemon(poke.id)


    return (
        <View style={{ flex: 1 }}>
            <View style={{
                ...myStyles.headerContainer,
                backgroundColor: poke.color,
            }}
            >
                {/* Backbutton */}
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.pop()}
                    style={{
                        ...myStyles.backButton,
                        top: top + 5,
                    }}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/128/507/507257.png?ga=GA1.1.1965869148.1695848995&track=ais' }}
                        style={{ height: 30, width: 30 }}
                    />
                </TouchableOpacity>

                {/* Nombre del Pokemon */}
                <Text style={{
                    ...myStyles.pokemonName,
                    top: top + 40,
                }}
                >
                    {poke.name + '\n#' + poke.id}
                </Text>

                {/* Pokebola blanca */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{
                        ...myStyles.pokeball,
                    }}
                />

                {/* Imagen de Pokemon */}
                <FadeInImage
                    uri={poke.picture}
                    style={myStyles.pokemonImagen}
                />
            </View>

            {/* Detalles y Loading */}
            {
                isLoading
                    ? (
                        <View style={myStyles.loadingIndicator}>
                            <ActivityIndicator
                                color={poke.color}
                                size={50}
                            />
                        </View>
                    )
                    : <PokemonDetails pokemon={pokemon!} />
            }


        </View>
    )
}

const myStyles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        // alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
        marginTop: 8
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
        textShadowColor: 'black',
        textShadowOffset: {
            width: 1,
            height: 1
        },
        textShadowRadius: 10,
    },
    pokeball: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        bottom: -120,
        opacity: 0.7,

    },
    pokemonImagen: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -30,
        alignSelf: 'center'
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


});
