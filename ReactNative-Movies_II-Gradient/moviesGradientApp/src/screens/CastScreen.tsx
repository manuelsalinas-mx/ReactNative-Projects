import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/NavigationStack'
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'CastScreen'> { }
const screenHeight = Dimensions.get('screen').height

export const CastScreen = ({ route }: Props) => {

    const personCast = route.params
    const imgUrl = `https://image.tmdb.org/t/p/w500${personCast.profile_path}`

    console.log(personCast)

    return (
        <ScrollView>
            <View style={detailStyle.imageContainer}>
                <Image
                    source={{
                        uri: imgUrl
                    }}
                    style={detailStyle.posterImage}
                />
            </View>
            <View style={detailStyle.marginContainer}>
                <Text style={detailStyle.subtitle}>{personCast.name}</Text>
                <Text style={detailStyle.title}>{personCast.character}</Text>
            </View>
        </ScrollView >
    )
}

const detailStyle = StyleSheet.create({
    posterImage: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        height: screenHeight,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 9,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: -127,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,

    },
    subtitle: {
        fontSize: 14,
        color: '#D1D5DB',
        marginBottom: -10
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
});