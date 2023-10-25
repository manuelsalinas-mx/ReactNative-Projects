import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export enum CapsuleType {
    dark, light
}

interface Props {
    title: string;
    mode?: CapsuleType;
    onAction: () => void;
}


export const CapsuleButton = ({ title, mode = CapsuleType.light, onAction }: Props) => {
    return (
        <TouchableOpacity
            onPress={onAction}
            activeOpacity={0.5}
            style={{
                height: 45,
                width: 100,
                backgroundColor: mode === CapsuleType.light ? '#EBEBEB' : '#282A36',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: mode === CapsuleType.light ? '#C0C0C0' : '#000000',
                borderWidth: 1

            }}
        >
            <Text
                style={{
                    color: mode === CapsuleType.light ? 'black' : 'white',
                    fontWeight: 'bold'
                }}
            >{title}</Text>

        </TouchableOpacity >
    )
}
