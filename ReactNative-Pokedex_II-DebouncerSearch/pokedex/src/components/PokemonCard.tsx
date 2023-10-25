import React from 'react'
import { View, TouchableOpacity, StyleSheet, Dimensions, Text, Image } from 'react-native'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';

interface Props {
    pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
    const windowWidth = Dimensions.get('window').width
    const navigator = useNavigation<any>()

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigator.navigate('PokemonScreen', pokemon)}
        >
            <View style={{
                ...myStyle.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: pokemon.color
            }}
            >
                <View>
                    <Text style={myStyle.name}>{pokemon.name + '\n#' + pokemon.id}</Text>
                </View>

                <View style={myStyle.pokebolaContainer}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={myStyle.pokebola}
                    />
                </View>

                <FadeInImage
                    uri={pokemon.picture}
                    style={myStyle.pokemonImage}
                />
            </View>
        </TouchableOpacity>
    )
}

const myStyle = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 20,
        height: 110,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
        textShadowColor: 'black',
        textShadowOffset: {
            width: 1,
            height: 1
        },
        textShadowRadius: 5,

    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -20,
        bottom: -20

    },
    pokebolaContainer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    },
    pokemonImage: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -10,
        bottom: -10
    }
});
