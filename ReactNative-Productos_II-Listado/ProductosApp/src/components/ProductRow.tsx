import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Producto } from '../interfaces/appInterfaces'

interface Props {
    producto: Producto;
    onTap: () => void;
}

export const ProductRow = ({ producto, onTap }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={onTap}
        >
            <View style={styles.rowContainer}>
                <Text style={styles.itemText}>{producto.nombre}</Text>
                {
                    (producto.img) && (
                        <Image
                            source={{ uri: producto.img! }}
                            style={styles.productIcon}
                        />
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        // justifyContent: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'space-between'
    },
    itemText: {
        fontSize: 18,
        color: 'black',
    },
    productIcon: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderColor: 'silver',
        borderWidth: 0.5
    }
});
