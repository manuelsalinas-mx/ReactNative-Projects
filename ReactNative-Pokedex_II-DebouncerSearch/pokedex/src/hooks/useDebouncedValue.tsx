import React, { useEffect, useState } from 'react'

export const useDebouncedValue = (input: string = '', delay: number = 500) => {

    const [debouncedValue, setDebouncedValue] = useState(input)

    useEffect(() => {

        // cada medio segundo envia el textop
        const timeout = setTimeout(() => {
            setDebouncedValue(input)
        }, delay);


        // Limpia le timeout
        return () => {
            clearTimeout(timeout)
        }
        // cada que el input cambie se dispara el useEffect
    }, [input])



    return {
        debouncedValue
    }
}
