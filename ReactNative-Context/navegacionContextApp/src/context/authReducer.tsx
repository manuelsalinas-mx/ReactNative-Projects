import { AuthState } from "./AuthContext";

type AuthAction =
    { type: 'login' }
    | { type: 'logout' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUsername', payload: string, img?: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isLoggedIn: true,
            }

        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined,
                imageUrl: undefined
            }

        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }

        case 'changeUsername':
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload,
                imageUrl: action.img
            }

        default:
            return state;
    }
}