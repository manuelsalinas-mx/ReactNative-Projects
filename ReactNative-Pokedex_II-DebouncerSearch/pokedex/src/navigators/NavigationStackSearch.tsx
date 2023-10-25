import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./NavigationStack";
import { SearchScreen } from "../screens/SearchScreen";
import { PokemonScreen } from "../screens/PokemonScreen";


const Stack = createStackNavigator<RootStackParams>()

export const NavigationStackSearch = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // Ocultar el navigation bar
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
}