import React, { useContext, useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, RefreshControl, Image } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack';
import { ProductsContext } from '../context/ProductsContext';
import { ProductsStackParams } from '../navigation/ProductsNavigator';
import { ProductRow } from '../components/ProductRow';
import { AuthContext } from '../context/authContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { };

export const ProductsScreen = ({ navigation }: Props) => {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const { products, loadProducts } = useContext(ProductsContext);
    const { logOut } = useContext(AuthContext);

    useEffect(() => {

        navigation.setOptions({
            headerRight: () => (
                // Add and Logout buttons
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ marginRight: 10 }}
                        onPress={() => navigation.navigate('ProductScreen', {})}
                    >
                        <Image
                            source={{ uri: 'https://www.iconarchive.com/download/i103469/paomedia/small-n-flat/sign-add.1024.png' }}
                            style={{ width: 30, height: 30, right: 8 }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ marginRight: 10 }}
                        onPress={logOut}
                    >
                        {/* <Text>Agregar 2</Text> */}
                        <Image
                            source={{ uri: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/5628149/exit-icon-md.png' }}
                            style={{ width: 30, height: 30, right: 8 }}
                        />
                    </TouchableOpacity>
                </View>
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
    productName: {
        fontSize: 20,
        paddingLeft: 20
    },
    itemSeparator: {
        borderBottomWidth: 2,
        marginVertical: 5,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    }
});