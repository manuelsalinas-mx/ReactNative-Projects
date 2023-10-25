import { useCounter } from "../hooks/useCounter"


export const ContadorConHook = () => {

   const { valor, acumular} = useCounter(100)

  return (
    <>
        <h3>Contador con Hook <small><b> { valor } </b></small> </h3>

        <button 
        className="btn btn-primary"
        //onClick= { () => acumular(1) }
        onClick= { () => acumular(1) }
        >
            Aumentar
        </button>
        &nbsp;
        <button 
        className="btn btn-primary"
        onClick= { () => acumular(-1) }
        >
            Restar
        </button>
    </>
  )
}
