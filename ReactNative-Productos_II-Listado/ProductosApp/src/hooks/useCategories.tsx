import { useEffect, useState } from "react"
import { CagetoriesResponse, Categoria } from '../interfaces/appInterfaces';
import cafeAPI from "../api/cafeAPI";


export const useCategories = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [categories, setCategories] = useState<Categoria[]>([]);

    useEffect(() => {
        getCategories();
    }, [])


    const getCategories = async () => {
        const resp = await cafeAPI.get<CagetoriesResponse>('/categorias');
        setCategories(resp.data.categorias);
        setIsLoading(false);

        console.log(JSON.stringify(resp.data.categorias, null, 5))
    }

    return {
        isLoading,
        categories
    }
}