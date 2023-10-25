import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/NavigationStack';
import useMovieDetails from '../hooks/useMovieDetails';
import { MovieInfo } from '../components/MovieInfo';


interface Props extends StackScreenProps<RootStackParams, 'MovieDetailScreen'> { }
const screenHeight = Dimensions.get('screen').height

export const MovieDetailScreen = ({ route }: Props) => {

    const movie = route.params
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const { isLoading, movieInfo, cast } = useMovieDetails(movie.id)

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
                <Text style={detailStyle.subtitle}>{movie.original_title}</Text>
                <Text style={detailStyle.title}>{movie.title}</Text>
            </View>

            {
                isLoading
                    ? <ActivityIndicator size={30} color={'gray'} />
                    : <MovieInfo movieFull={movieInfo!} cast={cast} />
            }

        </ScrollView >
    )
}

const detailStyle = StyleSheet.create({
    posterImage: {
        flex: 1,
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7, // taking 70% of screen
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
        marginTop: 20
    },
    subtitle: {
        fontSize: 18,
        color: 'gray'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

