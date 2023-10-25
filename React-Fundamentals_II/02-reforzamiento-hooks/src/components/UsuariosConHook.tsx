
import { useUsuarios } from '../hooks/useUsuarios';
import { User } from '../interfaces/ReqRes';

export const UsuariosConHook = () => {

    const { users, loadPreviousPage, loadNextPage } = useUsuarios();

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
                onClick={ loadPreviousPage }
                >
                    Anterior
             </button>
           
           &nbsp;
            <button 
                className="btn btn-primary"
                onClick={ loadNextPage }
                >
                    Siguiente
             </button>
        </>
    )
}
