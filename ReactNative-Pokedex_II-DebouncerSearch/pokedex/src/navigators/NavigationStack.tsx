import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { PokemonScreen } from "../screens/PokemonScreen";
import { SimplePokemon } from "../interfaces/pokemonInterfaces";

export type RootStackParams = {
    HomeScreen: undefined;
    PokemonScreen: SimplePokemon;
    SearchScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false, // Ocultar el navigation bar
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}

        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
}