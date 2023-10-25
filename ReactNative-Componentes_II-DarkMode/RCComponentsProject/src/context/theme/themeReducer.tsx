export type ThemeAction =
    | { type: 'dark_theme_on' }
    | { type: 'light_theme_on' }


export interface ThemeState {
    currentTheme: 'light' | 'dark',
    dividerColor: string;
    dark: boolean;
    colors: {
        primary: string;
        background: string;
        card: string;
        text: string;
        border: string;
        notification: string;
    }
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'gray',
    dark: false,
    colors: {
        primary: 'gray',
        background: 'white',
        card: 'white',
        text: 'black',
        border: '#EBEBEB',
        notification: 'red',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'silver',
    dark: true,
    colors: {
        primary: 'gray',
        background: '#282A36',
        card: '#191A21',
        text: 'white',
        border: 'red',
        notification: 'yellow',
    }
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'light_theme_on':
            return lightTheme


        case 'dark_theme_on':
            return darkTheme

        default:
            return state
    }
}