import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationStack } from './NavigationStack';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { useWindowDimensions, View, Image, Text, TouchableOpacity } from 'react-native';
import { Colores, styles } from '../theme/AppTheme';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { width } = useWindowDimensions()
    const isLandscape = width >= 768 ? true : false


    return (
        <Drawer.Navigator
            screenOptions={({ navigation }) => ({
                // drawerPosition: 'right',
                drawerType: isLandscape ? 'permanent' : 'front',
                drawerHideStatusBarOnOpen: true,
                drawerActiveTintColor: 'purple',

                headerLeft: () =>
                    <TouchableOpacity onPress={navigation.toggleDrawer} style={{ paddingLeft: 8 }}>
                        <Text>
                            <Icon name='grid-sharp' size={24} color={Colores.pink} />
                        </Text>
                    </TouchableOpacity >
            })}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            {/* <Drawer.Screen name="NavigationStack" component={NavigationStack} /> */}
            <Drawer.Screen name="Tabs Navigation" component={Tabs} />
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
                    <View style={styles.menuIcon}>
                        <Icon name='home-sharp' size={24} color='#009BE9' />
                    </View>
                    <Text style={styles.menuTexto}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('NotificationsScreen')}
                >
                    <View style={styles.menuIcon}>
                        <Icon name='notifications-sharp' size={24} color='#009BE9' />
                    </View>
                    <Text style={styles.menuTexto}>Notifications</Text>
                </TouchableOpacity>
            </View >
        </DrawerContentScrollView >
    );
}