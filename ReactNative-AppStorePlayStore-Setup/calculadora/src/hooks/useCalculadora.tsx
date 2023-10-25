import { useRef, useState } from "react"

export enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [numeroAnterior, setNumeroanterior] = useState('0')
    const [numero, setNumero] = useState('0')
    const refOperacion = useRef<Operadores>()

    // Funciones
    const limpiar = () => {
        setNumero('0')
        setNumeroanterior('')
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const del = () => {
        let negativo = '';
        let numeroTemp = numero;

        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1));
        } else {
            setNumero('0');
        }
    }

    const cambiarNumeroPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroanterior(numero.slice(0, -1));
        } else {
            setNumeroanterior(numero);
        }

        setNumero('0');
    }

    const armarNumero = (numeroTexto: string) => {
        // no acpetar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // Evaluar si es otro cero y aun un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                // Evaluar si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0 ' && !numero.includes('.')) {
                setNumero(numeroTexto);

                // Evitar 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            } else {
                setNumero(numero + numeroTexto);
            }

        } else {
            setNumero(numero + numeroTexto);
        }
    }

    const realizarOperacion = (tipo: Operadores) => {
        cambiarNumeroPorAnterior();
        refOperacion.current = tipo;
    }

    const calcular = () => {
        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch (refOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num2 + num1}`);
                break;

            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;

            case Operadores.multiplicar:
                setNumero(`${num2 * num1}`);
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;

            default:
                break;
        }

        setNumeroanterior('')
    }

    // Exponer
    return {
        numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        del,
        armarNumero,
        calcular,
        realizarOperacion
    }
}
