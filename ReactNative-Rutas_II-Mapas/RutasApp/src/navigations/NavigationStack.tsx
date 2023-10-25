import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "../screens/MapScreen";
import { PermissionsScreen } from "../screens/PermissionsScreen";
import { useContext } from "react";
import { PermissionsContext } from "../context/PermissionsContext";
import { LoadingScreen } from "../screens/LoadingScreen";

const Stack = createStackNavigator();

export const NavigationStack = () => {
    const { permissions } = useContext(PermissionsContext);

    if (permissions.locationStatus === 'unavailable') {
        return <LoadingScreen />

    }

    return (
        <Stack.Navigator
            initialRouteName="PermissionsScreen"
            screenOptions={{
                headerShown: false, // Ocultar el navigation bar
                headerStyle: {
                    elevation: 0, // Android -> Quita la linea separadora del navigation bar
                    shadowColor: 'transparent', // iOS -> Quita la linea separadora del navigation bar
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            {
                (permissions.locationStatus == 'granted')
                    ? <Stack.Screen name="MapScreen" component={MapScreen} />
                    : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
            }
        </Stack.Navigator>
    );
}