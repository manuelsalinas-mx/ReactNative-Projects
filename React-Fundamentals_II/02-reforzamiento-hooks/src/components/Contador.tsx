import { useState } from "react"

export const Contador = () => {

    const [valor, setValor] = useState(0)

    // Option 1 as constant 
    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    // Option 2 as function
    function sumar(numero:number) {
        setValor(valor + numero);
    }

  return (
    <>
        <h3>Contador <small><b> { valor } </b></small> </h3>

        <button 
        className="btn btn-primary"
        //onClick= { () => acumular(1) }
        onClick= { () => sumar(1) }
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
