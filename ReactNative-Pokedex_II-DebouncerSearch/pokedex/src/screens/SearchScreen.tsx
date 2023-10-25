import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, Platform } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SearchInput } from '../components/SearchInput'
import { usePokemonSearch } from '../hooks/usePokemonSearch'
import { PokemonCard } from '../components/PokemonCard'
import { styles as globalStyles } from '../theme/apptheme'
import { Loading } from '../components/Loading'
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { EmptySearch } from '../components/EmptySearch'

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets()
    const { isFetching, simplePokemonList } = usePokemonSearch()
    const screenWidth = Dimensions.get('screen').width
    const [term, setTerm] = useState('')
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])

    useEffect(() => {
        // Input vacio retorna arreglo vacio
        if (term.length === 0) {
            return setPokemonFiltered([])
        }

        // Input buscando, hacer filtro 
        // 'includes' es case sensitive
        if (isNaN(Number(term))) {
            // No es numero, busca por nombre
            setPokemonFiltered(simplePokemonList.filter(poke => poke.name.toLowerCase().includes(term.toLowerCase())))
        } else {
            // Es numero, busca por ID
            // 'find' se detiene hasta que encuentra el valor
            const pokemonbyId = simplePokemonList.find(poke => poke.id === term)
            setPokemonFiltered(pokemonbyId ? [pokemonbyId] : [])
        }

    }, [term])


    if (isFetching) {
        return (
            <Loading />
        )
    }

    return (
        <View style={{
            flex: 1,
            marginHorizontal: 8
        }}
        >
            <SearchInput
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 16,
                    top: (Platform.OS === 'ios') ? top : top + 30
                }}
                onDebounce={(text) => setTerm(text)}
            />

            <FlatList
                data={pokemonFiltered}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                // Config
                showsVerticalScrollIndicator={false}
                numColumns={2}

                // Header
                ListHeaderComponent={(
                    <Text style={{
                        ...globalStyles.title,
                        ...globalStyles.globalMargin,
                        paddingBottom: 5,
                        marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80
                    }}>{term}</Text>
                )}
                ListEmptyComponent={<EmptySearch searchTerm={term} />}
            />
        </View>
    )
}