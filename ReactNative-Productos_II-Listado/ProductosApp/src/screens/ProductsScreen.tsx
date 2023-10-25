import React, { useContext, useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack';

import { ProductsContext } from '../context/ProductsContext';
import { ProductsStackParams } from '../navigation/ProductsNavigator';
import { ProductRow } from '../components/ProductRow';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { };

export const ProductsScreen = ({ navigation }: Props) => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const { products, loadProducts } = useContext(ProductsContext);

    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.navigate('ProductScreen', {})}
                >
                    <Text>Agregar </Text>
                </TouchableOpacity>
            )
        })

    }, [])

    const loadProductsFromBackend = async () => {
        setIsRefreshing(true);
        await loadProducts();
        setIsRefreshing(false);
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>

            <FlatList
                data={products}
                keyExtractor={(p) => p._id}
                renderItem={({ item }) => <ProductRow producto={item} onTap={() =>
                    navigation.navigate('ProductScreen', {
                        id: item._id,
                        name: item.nombre
                    })
                } />}

                ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                )}

                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={loadProductsFromBackend}
                    />
                }

            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemSeparator: {
        borderBottomWidth: 2,
        marginVertical: 5,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    }
});