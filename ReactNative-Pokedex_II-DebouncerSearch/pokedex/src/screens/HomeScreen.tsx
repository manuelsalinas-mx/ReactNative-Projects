import React from 'react'
import { Image, Text, FlatList, ActivityIndicator, View } from 'react-native'
import { styles } from '../theme/apptheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const { isLoading, simplePokemonList, loadPokemon } = usePokemonPaginated()

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View style={{ alignItems: 'center' }}  >
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    // Config
                    showsVerticalScrollIndicator={false}
                    numColumns={2}

                    // Infinite scroll
                    onEndReached={loadPokemon}
                    onEndReachedThreshold={0.4}

                    // Header
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10
                        }}>Pokedex</Text>
                    )}

                    // Footer
                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{ height: 100 }}
                            color={'gray'}
                            size={20}
                        />
                    )}
                />
            </View>
        </>
    )
}
