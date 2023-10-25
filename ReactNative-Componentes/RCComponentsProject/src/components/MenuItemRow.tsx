import React from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { MenuItem } from '../interfaces/MenuItem'
import { Spacer } from './Spacer';
import { useNavigation } from '@react-navigation/native';

interface Props {
    item: MenuItem;
}

export const MenuItemRow = ({ item }: Props) => {

    const navigator = useNavigation<any>()

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigator.navigate(item.component)}
        >
            <View style={styles.container}>
                <Image
                    style={styles.itemIcon}
                    source={{
                        uri: item.icon,
                    }}
                />

                <Text style={styles.itemText}>{item.name}</Text>

                <Spacer />

                <Image
                    style={styles.itemArrow}
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/6701/6701318.png?ga=GA1.1.1965869148.1695848995&track=ais',
                    }}
                />

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50
    },
    itemText: {
        fontSize: 18,
        fontWeight: '400'
    },
    itemIcon: {
        width: 30,
        height: 30,
        marginHorizontal: 5,
        marginVertical: 5
    },
    itemArrow: {
        width: 20,
        height: 20,
    }
});
