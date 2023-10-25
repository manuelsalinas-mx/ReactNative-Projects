import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { ChatScreen } from "./ChatScreen";
import { ContactsScreen } from "./ContactsScreen";
import { AlbumScreen } from "./AlbumScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colores } from "../theme/AppTheme";

const TopTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets()
    return (
        <TopTab.Navigator
            style={{
                paddingTop: top
            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: '#FED4FB',
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: Colores.pink,

                },
                tabBarStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'ChatScreen':
                            iconName = 'chatbubble-ellipses-sharp';
                            break;

                        case 'ContactsScreen':
                            iconName = 'people-sharp';
                            break;

                        case 'AlbumScreen':
                            iconName = 'albums-sharp';
                            break;
                    }
                    return <Icon name={iconName} size={24} color={Colores.pink} />
                },
            })}
        >
            <TopTab.Screen name="ChatScreen" options={{ title: 'Chat' }} component={ChatScreen} />
            <TopTab.Screen name="ContactsScreen" options={{ title: 'Contacts' }} component={ContactsScreen} />
            <TopTab.Screen name="AlbumScreen" options={{ title: 'Album' }} component={AlbumScreen} />
        </TopTab.Navigator >
    );
}