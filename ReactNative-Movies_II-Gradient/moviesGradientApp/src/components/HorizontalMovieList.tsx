import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { MoviePoster } from './MoviePoster'
import { Movie } from '../interfaces/movieInterfaces';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalMovieList = ({ title, movies }: Props) => {
    return (
        <View style={{ height: 225 }}>
            {
                (title)
                    ? <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 8, paddingBottom: 5 }}>{title}</Text>
                    : <View style={{ height: 20, paddingBottom: 5 }}></View>
            }

            <FlatList
                data={movies}
                renderItem={({ item }) => <MoviePoster movie={item} width={110} height={180} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
