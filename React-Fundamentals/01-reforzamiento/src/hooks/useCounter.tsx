import { useState } from "react"

export const useCounter = (valorInicial: number = 10) => {

    const [valor, setValor] = useState(valorInicial)

    // Option 1 as constant 
    const acumular = (numero: number) => {
        setValor(valor + numero);
    }

    return {
        valor,
        acumular
    }
}
