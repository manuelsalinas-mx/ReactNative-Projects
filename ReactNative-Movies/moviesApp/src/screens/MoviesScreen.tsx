import { useNavigation } from '@react-navigation/native'
import React, { } from 'react'
import { ActivityIndicator, Dimensions, SafeAreaView, View, ScrollView } from 'react-native'
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import Carousel from 'react-native-snap-carousel';
import { HorizontalMovieList } from '../components/HorizontalMovieList';

const { width: windowWidth } = Dimensions.get('window');

export const MoviesScreen = () => {

    const navigation = useNavigation<any>();

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator color={'blue'} size={50} />
            </View>
        )
    }

    return (
        <SafeAreaView>
            <ScrollView>
                {/* <Text style={{ fontSize: 50 }}>Movies</Text>
            <Button
                title='Detalle'
                onPress={() => navigation.navigate('MovieDetailScreen')}
            /> */}

                {/* Carousel Principal */}
                <View style={{ height: 320 }}  >
                    <Carousel
                        layout={'default'}
                        data={nowPlaying}
                        renderItem={({ item }) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={200}
                    />
                </View>

                {/* Peliculas populares */}
                <HorizontalMovieList title='Populares' movies={popular} />
                <HorizontalMovieList title='La gente ama' movies={topRated} />
                <HorizontalMovieList title='Proximamente' movies={upcoming} />

            </ScrollView>
        </SafeAreaView>
    )
}
