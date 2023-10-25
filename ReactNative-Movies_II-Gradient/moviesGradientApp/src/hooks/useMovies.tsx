import { useEffect, useState } from "react";
import moviesAPI from "../api/moviesAPI";
import { Movie, MovieDBResponse } from "../interfaces/movieInterfaces";

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    // const [moviesNow, setMoviewsNow] = useState<Movie[]>([])
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })

    const getMovies = async () => {
        const nowPlayiingPromise = moviesAPI.get<MovieDBResponse>('/now_playing');
        const popularPromise = moviesAPI.get<MovieDBResponse>('/popular');
        const topRatedPromise = moviesAPI.get<MovieDBResponse>('/top_rated');
        const upcomingPromise = moviesAPI.get<MovieDBResponse>('/upcoming');

        const resp = await Promise.all([
            nowPlayiingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results
        })

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoading
    }
}
