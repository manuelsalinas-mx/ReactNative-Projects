import { useEffect, useRef, useState } from "react"
import { User, UserListResponse } from '../interfaces/ReqRes';
import { reqResApi } from "../api/RequestResponse";

export const useUsuarios = () => {

    const [users, setUsers] = useState<User[]>([]);
    const paginaRef = useRef(1);
    const totalPaginasRef = useRef(0);

    useEffect(() => {
        // API call
        loadUsers();   
    }, []) 

    const loadUsers = async() => {
        const response = await reqResApi.get<UserListResponse>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        totalPaginasRef.current = response.data.total_pages;

        if (response.data.data.length > 0) {
            setUsers(response.data.data);
            
            console.log('Pagina %d', paginaRef.current);
            console.log(response.data.data );
        } else {
            alert('No hay mas registros');
        }
    }

    const loadNextPage = () => {
        if (paginaRef.current < totalPaginasRef.current) {
            paginaRef.current ++;
            loadUsers()
        } else {
            console.log('Ya no puedes cargar mas');
        }
    }

    const loadPreviousPage = () => {
        if (paginaRef.current > 1) {
            paginaRef.current --;
            loadUsers()
        } else {
            console.log('Ya no puedes cargar menos');
        }
    }

    return {
        users,
        loadPreviousPage,
        loadNextPage
    }
}
