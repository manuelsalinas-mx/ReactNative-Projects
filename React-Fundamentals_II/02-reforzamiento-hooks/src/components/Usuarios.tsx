import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/RequestResponse"
import { User, UserListResponse } from "../interfaces/ReqRes";
import { config } from "process";

export const Usuarios = () => {

    const [users, setUsers] = useState<User[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        // API call
        loadUsers();   
    }, [])  
    
    // Function to load users from endpoint
    const loadUsers = async() => {
        const response = await reqResApi.get<UserListResponse>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (response.data.data.length > 0) {
            setUsers(response.data.data);
            console.log( response.data.data );
            paginaRef.current ++;

        } else {
            alert('No hay mas registros');
        }
    }
    

    // Function to Render users 
    const renderUser = ({ id, avatar, first_name, last_name, email }: User) => {
        return(
            <tr key={ id.toString() }>
                <td>
                    <img
                     src= { avatar }
                     alt= { first_name } 
                     style={{
                        width: 60,
                        borderRadius: 30
                     }}
                      />
                </td>
                <td><b>{ first_name }</b> { last_name}</td>
                <td>{ email }</td>
            </tr>
        )
    }

  return (
    <>
        <h3>Usuarios Remotos:</h3>
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
              {
                users.map( renderUser )
              }  
            </tbody>           
        </table>
       
        <button 
            className="btn btn-primary"
            onClick={ loadUsers }
            >
                Siguiente
         </button>
    </>
  )
}
