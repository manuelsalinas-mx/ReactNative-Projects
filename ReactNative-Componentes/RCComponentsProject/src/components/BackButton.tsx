import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


export const BackButton = () => {
    const navigator = useNavigation()
    const { top } = useSafeAreaInsets()

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigator.goBack()}
        >
            <View style={{ marginTop: top + 15 }}>
                <Image
                    source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/507/507257.png?ga=GA1.1.1965869148.1695848995&track=ais'
                    }}
                    style={styles.back}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    back: {
        width: 25,
        height: 25,
        marginHorizontal: 15,
    }
});
