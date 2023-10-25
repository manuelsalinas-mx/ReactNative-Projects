import React from 'react'
import { Text, View } from 'react-native'
import { MovieFull } from '../interfaces/movieDetailsInterfaces'
import { Cast } from '../interfaces/movieCreditsInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from "currency-formatter";
import { FlatList } from 'react-native-gesture-handler';
import { ActorItem } from './ActorItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieInfo = ({ movieFull, cast }: Props) => {
    return (
        <View style={{ marginHorizontal: 20, marginVertical: 5 }}>

            <View style={{ flexDirection: 'row' }}>
                <Icon
                    name='star-sharp'
                    color='orange'
                    size={16}
                />
                <Text style={{ marginLeft: 4 }}>{movieFull.vote_average} </Text>
                <Text style={{ marginLeft: 4 }}>- {movieFull.genres.map(g => g.name).join(', ')} </Text>
            </View>

            {/* Sinopsis */}
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>Sinopsis</Text>
            <Text>{movieFull.overview}</Text>

            {/* Presupuesto */}
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>Presupuesto</Text>
            <Text>{currencyFormatter.format(movieFull.budget, { code: 'USD' })}</Text>

            {/* Cssting */}
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 15 }}>Casting</Text>
            <FlatList
                data={cast}
                renderItem={({ item }) => <ActorItem actor={item} />}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}
