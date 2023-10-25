import { createContext, useEffect, useState } from "react";
import { AppState, Platform } from "react-native";
import { PERMISSIONS, PermissionStatus, check, openSettings, request } from "react-native-permissions";
import { StackAnimationTypes } from "react-native-screens";

export interface PermissionsState {
    locationStatus: PermissionStatus;
}

export const permissionsInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionsContextProps = {
    permissions: PermissionsState;
    askLocationPermission: () => void;
    checkLocationPermission: () => void;
}

export const PermissionsContext = createContext({} as PermissionsContextProps)

export const PermissionsProvider = ({ children }: any) => {

    const [permissions, setPermissions] = useState(permissionsInitState)

    useEffect(() => {
        checkLocationPermission()

        AppState.addEventListener('change', state => {
            console.log(state)

            if (state !== 'active') return
            checkLocationPermission()
        })
    }, [])

    const askLocationPermission = async () => {
        let permissionsStatus: PermissionStatus

        if (Platform.OS == 'ios') {
            permissionsStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionsStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }

        console.log(permissionsStatus)

        if (permissions.locationStatus === 'blocked' || permissions.locationStatus === 'denied') {
            openSettings()
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionsStatus
        })
    }

    const checkLocationPermission = async () => {
        let permissionsStatus: PermissionStatus

        if (Platform.OS == 'ios') {
            permissionsStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
        } else {
            permissionsStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }

        console.log(permissionsStatus)
        setPermissions({
            ...permissions,
            locationStatus: permissionsStatus
        })
    }

    return (
        <PermissionsContext.Provider
            value={{
                permissions,
                askLocationPermission,
                checkLocationPermission
            }}
        >
            {children}
        </PermissionsContext.Provider >
    )
}