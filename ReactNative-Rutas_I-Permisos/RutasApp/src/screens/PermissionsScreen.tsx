import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ButtonPill } from '../components/ButtonPill'
import { PermissionsContext } from '../context/PermissionsContext'

export const PermissionsScreen = () => {
    const { top } = useSafeAreaInsets()
    const { permissions, checkLocationPermission, askLocationPermission } = useContext(PermissionsContext)

    return (
        <View
            style={{
                ...styles.container,
                top: top
            }}
        >
            <Text style={{ fontSize: 30 }}>PermissionsScreen</Text>
            <ButtonPill
                title='Permisos'
                onAction={askLocationPermission}
            />
            <Text>
                {JSON.stringify(permissions, null, 4)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
