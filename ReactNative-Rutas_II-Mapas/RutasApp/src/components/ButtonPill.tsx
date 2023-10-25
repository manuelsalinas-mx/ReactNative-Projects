import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
    title: string;
    onAction?: () => void;
}

export const ButtonPill = ({ title, onAction }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.container}
            onPress={() => (onAction) && onAction()}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: 44,
        justifyContent: 'center',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        paddingHorizontal: 20
    }
});
