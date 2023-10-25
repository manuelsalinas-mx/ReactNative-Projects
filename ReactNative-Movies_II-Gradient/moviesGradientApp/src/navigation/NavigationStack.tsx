import { createStackNavigator } from '@react-navigation/stack';
import { MoviesScreen } from '../screens/MoviesScreen';
import { MovieDetailScreen } from '../screens/MovieDetailScreen';
import { Movie } from '../interfaces/movieInterfaces';
import { CastScreen } from '../screens/CastScreen';
import { Cast } from '../interfaces/movieCreditsInterfaces';

export type RootStackParams = {
    MoviesScreen: undefined,
    MovieDetailScreen: Movie,
    CastScreen: Cast
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    elevation: 0, // Android -> Quita la linea separadora del navigation bar
                    shadowColor: 'transparent', // iOS  -> Quita la linea separadora del navigation bar
                },
                cardStyle: {
                    backgroundColor: "white",
                },
            }}
        >
            <Stack.Screen name="MoviesScreen" options={{ title: 'Movies' }} component={MoviesScreen} />
            <Stack.Screen name="MovieDetailScreen" options={{ title: 'Movie Detail' }} component={MovieDetailScreen} />
            <Stack.Screen name="CastScreen" options={{ title: 'Person Detail' }} component={CastScreen} />
        </Stack.Navigator>
    );
}