import React, { useEffect, useState } from 'react'
import { Image, StyleProp, StyleSheet, TextInput, TextStyle, View } from 'react-native'
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    style?: StyleProp<TextStyle>
    onDebounce: (text: string) => void;
}

export const SearchInput = ({ style, onDebounce }: Props) => {
    const [text, setText] = useState('')
    const { debouncedValue } = useDebouncedValue(text, 1500)

    useEffect(() => {
        console.log(debouncedValue)
        onDebounce(debouncedValue)

    }, [debouncedValue])


    return (
        <View style={{
            ...styles.container,
            ...style as any
        }}
        >
            <View style={styles.textBackground}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Search Pokemon'
                    keyboardType='default'
                    autoCorrect={false}
                    autoCapitalize='none'
                    value={text}
                    onChangeText={(text: string) => setText(text)}
                />

                <Image style={{ height: 30, width: 30 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/8915/8915520.png?ga=GA1.1.1965869148.1695848995&track=ais' }} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
    },
    textBackground: {
        backgroundColor: '#FCFCFC',
        borderColor: 'silver',
        borderRadius: 100,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18
    }

});
