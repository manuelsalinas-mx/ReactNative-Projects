import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { Text, View, ScrollView } from 'react-native'
import { styles } from '../theme/AppTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext'


export const NotificationsScreen = () => {

    const { top, bottom, left, right } = useSafeAreaInsets()
    const { authState } = useContext(AuthContext);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        >
            <View style={{ marginTop: top }}>
                <Text style={{
                    ...styles.mainTitle,
                    color: authState.isLoggedIn === false ? 'red' : 'green'
                }}
                >
                    {
                        authState.isLoggedIn === false
                            ? 'Offline'
                            : 'Online'
                    }
                </Text>
                <Text style={{ paddingLeft: 20, fontSize: 20 }}>
                    {
                        JSON.stringify(authState, null, 4)
                    }
                </Text>

                <View style={{ alignItems: 'center', marginTop: 50 }}>
                    <Icon name={authState.favoriteIcon} size={200} color='gray' />
                </View>
            </View>
        </ScrollView>
    );
}
