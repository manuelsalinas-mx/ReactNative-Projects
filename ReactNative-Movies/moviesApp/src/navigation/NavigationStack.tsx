import { createStackNavigator } from '@react-navigation/stack';
import { MoviesScreen } from '../screens/MoviesScreen';
import { MovieDetailScreen } from '../screens/MovieDetailScreen';
import { Movie } from '../interfaces/movieInterfaces';

export type RootStackParams = {
    MoviesScreen: undefined,
    MovieDetailScreen: Movie,
}

const Stack = createStackNavigator<RootStackParams>();

export const NavigationStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
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
        </Stack.Navigator>
    );
}