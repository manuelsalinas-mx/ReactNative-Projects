import React from 'react'

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationStack } from './NavigationStack';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { useWindowDimensions, View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/AppTheme';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions()


    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerPosition: 'right',
                drawerType: width >= 768 ? 'permanent' : 'front',
                drawerHideStatusBarOnOpen: true,
                drawerActiveTintColor: 'purple',

            }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="NavigationStack" component={NavigationStack} />
            <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
        </Drawer.Navigator >
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            {/* Avatar Header */}
            <View style={styles.avatarContainer}>
                <Image source={{
                    uri: 'https://image.winudf.com/v2/image1/bmV0LndsbHBwci5ib3lzX3Byb2ZpbGVfcGljdHVyZXNfc2NyZWVuXzBfMTY2NzUzNzYxN18wOTk/screen-0.webp?fakeurl=1&type=.webp'
                }}
                    style={styles.avatar}
                />
                <Text style={styles.mainTitle}>Manu Salinas</Text>
            </View>

            {/* Opciones de Menu */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('NavigationStack')}
                >
                    <Text style={styles.menuTexto}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('NotificationsScreen')}
                >
                    <Text style={styles.menuTexto}>Notifications</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}