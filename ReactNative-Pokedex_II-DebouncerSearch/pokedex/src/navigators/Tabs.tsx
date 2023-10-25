import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationStack } from './NavigationStack';
import { Platform, Text } from 'react-native';
import { NavigationStackSearch } from './NavigationStackSearch';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'blue',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 80 : 60
                }
            }}

        >
            <Tab.Screen
                name="NavigationStack"
                component={NavigationStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => <Text>🏠</Text>
                }}
            />
            <Tab.Screen
                name="NavigationStackSearch"
                component={NavigationStackSearch}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => <Text>🔍</Text>
                }}
            />
        </Tab.Navigator>
    );
}