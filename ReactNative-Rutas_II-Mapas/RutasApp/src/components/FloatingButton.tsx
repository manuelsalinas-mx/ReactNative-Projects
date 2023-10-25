import React from 'react'
import { Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'


interface Props {
    iconName: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

export const FloatingButton = ({ iconName, onPress, style = {} }: Props) => {
    return (
        <View style={{ ...style as any }} >
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.blackButton}
            >
                <Image
                    source={{ uri: iconName }}
                    style={{
                        width: 35,
                        height: 35
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    blackButton: {
        zIndex: 9999,
        height: 50,
        width: 50,
        borderRadius: 100,
        backgroundColor: 'black',
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }
});
