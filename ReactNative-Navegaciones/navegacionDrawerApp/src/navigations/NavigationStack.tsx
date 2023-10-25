import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';


export type ProfileInfo = { // tambien puede ser una interface
    id: number,
    nombre: string,
    imagenPerfil: string
}

export type RootStackParams = {
    HomeScreen: undefined,
    DetailScreen: undefined,
    ProfileScreen: ProfileInfo,
    SettingsScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export function NavigationStack() {
    return (
        <Stack.Navigator
            // initialRouteName='HomeScreen' // Definimos la pantalla que queremos como Root
            screenOptions={{
                // headerShown: false, // Ocultar el navigation bar
                headerStyle: {
                    elevation: 0, // Android -> Quita la linea separadora del navigation bar
                    shadowColor: 'transparent', // iOSte -> Quita la linea separadora del navigation bar
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            {/* // Suscribe todas las pantallas disponibles para navegar */}
            <Stack.Screen name="HomeScreen" options={{ title: 'Home' }} component={HomeScreen} />
            <Stack.Screen name="DetailScreen" options={{ title: 'Detail' }} component={DetailScreen} />
            <Stack.Screen name="ProfileScreen" options={{ title: 'Profile' }} component={ProfileScreen} />
            <Stack.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Stack.Navigator >
    );
}