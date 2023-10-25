import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationStack } from './NavigationStack';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { width } = useWindowDimensions()


    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerPosition: 'right',
                drawerType: width >= 768 ? 'permanent' : 'front',
                drawerHideStatusBarOnOpen: true,
                drawerActiveTintColor: 'green',

            }}
        >
            <Drawer.Screen name="NavigationStack" options={{ title: 'Home' }} component={NavigationStack} />
            <Drawer.Screen name="NotificationsScreen" options={{ title: 'Notifications' }} component={NotificationsScreen} />
        </Drawer.Navigator >
    );
}