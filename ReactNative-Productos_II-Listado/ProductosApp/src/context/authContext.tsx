import React, { createContext, useEffect, useReducer } from "react";
import { LoginData, LoginResponse, RegisterData, Usuario } from "../interfaces/appInterfaces";
import { AuthState, authReducer } from "./authReducer";
import cafeAPI from "../api/cafeAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (info: RegisterData) => void;
    signIn: (info: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
    // Reducer
    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        checkToken()

    }, [])

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token')

        // No token, no autenticado
        if (!token) return dispatch({ type: "notAuthenticated" })

        // Hay token, autenticado
        const resp = await cafeAPI.get('/auth')

        if (resp.status !== 200) {
            return dispatch({ type: "notAuthenticated" })
        }

        await AsyncStorage.setItem('token', resp.data.token)
        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        })
    }

    // Implementar funnciones
    const signUp = async (info: RegisterData) => {

        try {

            const { data } = await cafeAPI.post<LoginResponse>('/usuarios', info);
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token);

        } catch (error: any) {
            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'Revise la información'
            });
        }
    }

    const signIn = async (info: LoginData) => {
        try {
            const { data } = await cafeAPI.post<LoginResponse>('/auth/login', info)
            console.log(JSON.stringify(data, null, 5))
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            })

            // Pesist token
            await AsyncStorage.setItem('token', data.token)

        } catch (error: any) {
            console.log(error.response.data.msg)
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Informacion Incorrecta'
            })
        }
    }

    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    }

    const removeError = () => {
        dispatch({
            type: 'removeError',
        })

        console.log("se limpio el error")
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}