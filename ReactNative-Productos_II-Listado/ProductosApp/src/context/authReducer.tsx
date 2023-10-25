import { Usuario } from "../interfaces/appInterfaces";

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
}

type AuthAction =
    | { type: 'signUp', payload: { token: string, user: Usuario } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                status: 'not-authenticated',
                user: null,
                token: null,
                errorMessage: action.payload,
            }

        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            }

        case 'signUp':
            return {
                ...state,
                status: 'authenticated',
                user: action.payload.user,
                token: action.payload.token,
                errorMessage: '',
            }

        case 'notAuthenticated':
        case 'logout':
            return {
                ...state,
                status: 'not-authenticated',
                user: null,
                token: null,
            }

        default:
            return state
    }
}
