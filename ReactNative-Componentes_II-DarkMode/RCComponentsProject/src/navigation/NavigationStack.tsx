import React, { useContext } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screen/HomeScreen";
import { Animation101Screen } from '../screen/details/Animation101Screen';
import { Animation102Screen } from '../screen/details/Animation102Screen';
import { SwitchScreen } from '../screen/details/SwitchScreen';
import { AlertScreen } from '../screen/details/AlertScreen';
import { TextInputScreen } from '../screen/details/TextInputScreen';
import { PullToRefreshScreen } from '../screen/details/PullToRefreshScreen';
import { SectionListScreen } from '../screen/details/SectionListScreen';
import { ModalScreen } from '../screen/details/ModalScreen';
import { InfiniteScrollScreen } from '../screen/details/InfiniteScrollScreen';
import { SlideShowScreen } from '../screen/details/SlideShowScreen';
import { ThemesScreen } from '../screen/details/ThemesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/theme/ThemeContext';

const Stack = createStackNavigator();

export const NavigationStack = () => {
    const { theme } = useContext(ThemeContext)
    return (
        < NavigationContainer
            theme={theme}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        // backgroundColor: 'white'
                    }
                }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />

                <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
                <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
                <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                <Stack.Screen name="AlertScreen" component={AlertScreen} />
                <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
                <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
                <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
                <Stack.Screen name="ModalScreen" component={ModalScreen} />
                <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
                <Stack.Screen name="SlideShowScreen" component={SlideShowScreen} />
                <Stack.Screen name="ThemesScreen" component={ThemesScreen} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}