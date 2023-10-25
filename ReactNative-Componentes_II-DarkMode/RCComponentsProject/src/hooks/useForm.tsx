import React, { useState } from 'react'
import { Inputform } from '../interfaces/InputForm'

export const useForm = (initialForm: Inputform) => {
    const [form, setForm] = useState(initialForm)

    const setvalue = <M extends Object>(value: M, key: string) => {
        setForm({
            ...form,
            [key]: value
        })
    }

    return {
        ...form,
        form,
        setvalue
    }
}
