import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    position?: 'bottomLeft' | 'bottomRight';
}

export const FloatingButton = ({ title, onPress, position = 'bottomRight' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.8}
                style={[
                    style.floatingButtonLocation,
                    (position === 'bottomLeft') ? style.left : style.right
                ]
                }
            >
                <View style={style.floatingActionButton}>
                    <Text style={style.floatingButtonText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={[
                    style.floatingButtonLocation,
                    (position === 'bottomLeft') ? style.left : style.right
                ]
                }
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#ff7e79', false, 30)}
                >
                    <View style={style.floatingActionButton}>
                        <Text style={style.floatingButtonText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();
}

const style = StyleSheet.create({
    floatingActionButton: {
        backgroundColor: '#E74C3C',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8
    },
    floatingButtonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    floatingButtonLocation: {
        position: 'absolute',
        bottom: 25,
    },
    left: {
        left: 25
    },
    right: {
        right: 25
    }
})
