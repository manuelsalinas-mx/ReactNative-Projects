import { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { Poke, PokemonPaginatedResponse, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const loadPokemon = async () => {
        setIsLoading(true)
        const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current)
        nextPageUrl.current = resp.data.next

        mapPokemonList(resp.data.results)
    }

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };

    const mapPokemonList = (pokemonList: Poke[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
            const urlParts = url.split('/')
            const id = urlParts[urlParts.length - 2]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            const color = generateColor()

            return { id, name, picture, color }

        })

        setIsLoading(false)
        setSimplePokemonList([
            ...simplePokemonList,
            ...newPokemonList
        ])
    }

    useEffect(() => {
        loadPokemon()
    }, [])

    return {
        isLoading,
        simplePokemonList,
        loadPokemon
    }
}
