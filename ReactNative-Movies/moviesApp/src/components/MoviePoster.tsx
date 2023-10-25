import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieInterfaces';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 300, width = 200 }: Props) => {

    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    // console.log(movie.title)
    const navigation = useNavigation<any>()

    return (
        <TouchableOpacity
            style={{
                width: width,
                height: height,
                marginHorizontal: 2,
                paddingBottom: 20,
                paddingHorizontal: 7
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('MovieDetailScreen', movie)}
        >
            <View style={cardStyles.imageContainer}>
                <Image
                    source={{
                        uri: imgUrl
                    }}
                    style={cardStyles.image}
                />
            </View>
        </TouchableOpacity>
    )
}


const cardStyles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        elevation: 5,
    }
});
