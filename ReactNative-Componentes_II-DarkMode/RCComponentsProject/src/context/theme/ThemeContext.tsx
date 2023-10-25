import { createContext, useEffect, useReducer } from "react";
import { themeReducer, ThemeState, lightTheme } from "./themeReducer";
import { AppState, Appearance, useColorScheme } from "react-native";


interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({ children }: any) => {

    // * * * * Obtener el tema del sistema * * * *
    const systemSchemeColor = useColorScheme()

    // Forma 1
    // useEffect(() => {
    //     (systemSchemeColor === 'light')
    //         ? setLightTheme()
    //         : setDarkTheme()

    // }, [systemSchemeColor])

    // Forma 2
    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme()
            }
        })
    }, [])
    // * * * * * * * * * * * * * * * * * 

    const [theme, dispatch] = useReducer(themeReducer, lightTheme);

    const setDarkTheme = () => {
        dispatch({ type: 'dark_theme_on' })
        console.log("se pone negro")
    }

    const setLightTheme = () => {
        dispatch({ type: 'light_theme_on' })
        console.log("se pone claro")
    }


    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}