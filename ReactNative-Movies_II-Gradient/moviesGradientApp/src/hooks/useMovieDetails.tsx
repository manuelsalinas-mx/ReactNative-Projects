import { useEffect, useState } from "react";
import { Cast, MovieCredits } from "../interfaces/movieCreditsInterfaces";
import moviesAPI from "../api/moviesAPI";
import { MovieFull } from '../interfaces/movieDetailsInterfaces';

interface MovieDetails {
    isLoading: boolean;
    movieInfo?: MovieFull;
    cast: Cast[];
}

export default function useMovieDetails(movieId: number) {
    const [details, setDetails] = useState<MovieDetails>({
        isLoading: true,
        movieInfo: undefined,
        cast: []
    })

    const getDetails = async () => {

        const promiseMovie = moviesAPI.get<MovieFull>(`/${movieId}`)
        const promiseCasting = moviesAPI.get<MovieCredits>(`/${movieId}/credits`)

        const [respMovie, respCasting] = await Promise.all([promiseMovie, promiseCasting])

        setDetails({
            isLoading: false,
            movieInfo: respMovie.data,
            cast: respCasting.data.cast
        })
    }

    useEffect(() => {
        getDetails()
    }, [])


    return {
        ...details
    }
}
