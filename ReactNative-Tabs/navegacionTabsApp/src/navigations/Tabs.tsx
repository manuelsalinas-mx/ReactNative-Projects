import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from './Tab1Screen';
import { Tab2Screen } from './Tab2Screen';
import { NavigationStack } from './NavigationStack';
import { Colores } from '../theme/AppTheme';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {
    return Platform.OS == 'ios'
        ? <TabsForiOS />
        : <TabsForAndroid />
}

const TabMaterial = createMaterialBottomTabNavigator();


const TabsForAndroid = () => {
    return (
        <TabMaterial.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: Colores.primary,
                tabBarInactiveTintColor: 'white',
                tabBarActiveBackgroundColor: Colores.activeBackground,

                tabBarStyle: {
                    borderTopColor: Colores.primary,
                    borderTopWidth: 0,
                },

                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 'normal'
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'home-sharp'
                            break;

                        case 'TopTabNavigator':
                            iconName = 'logo-android'
                            break;

                        case 'NavigationStack':
                            iconName = 'planet-sharp'
                            break;
                    }
                    return <Icon name={iconName} size={24} color={Colores.primary} />
                }

            })}
        >
            <TabMaterial.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <TabMaterial.Screen name="TopTabNavigator" options={{ title: 'Top Tab' }} component={TopTabNavigator} />
            <TabMaterial.Screen name="NavigationStack" options={{ title: 'Stack' }} component={NavigationStack} />
        </TabMaterial.Navigator>
    );
}


const TabView = createBottomTabNavigator();

const TabsForiOS = () => {
    return (
        <TabView.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}

            screenOptions={({ route }) => ({
                tabBarActiveTintColor: Colores.primary,
                tabBarInactiveTintColor: 'black',
                tabBarActiveBackgroundColor: Colores.activeBackground,
                // tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    borderTopColor: Colores.primary,
                    borderTopWidth: 0
                },

                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 'normal'
                },

                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'home-sharp'
                            break;

                        case 'TopTabNavigator':
                            iconName = 'logo-apple'
                            break;

                        case 'NavigationStack':
                            iconName = 'planet-sharp'
                            break;
                    }
                    return <Icon name={iconName} size={24} color={Colores.primary} />
                }

            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }} >T1</Text> }} component={ Tab1Screen } /> */}
            <TabView.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <TabView.Screen name="TopTabNavigator" options={{ title: 'Top Tab' }} component={TopTabNavigator} />
            <TabView.Screen name="NavigationStack" options={{ title: 'Stack' }} component={NavigationStack} />
        </TabView.Navigator>
    );
}