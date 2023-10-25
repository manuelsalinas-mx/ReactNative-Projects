import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'

interface Props {
    searchTerm: string;
}

export const EmptySearch = ({ searchTerm }: Props) => {

    const { height } = Dimensions.get('screen')

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: height * 0.7
        }}>
            <Image
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/4068/4068026.png?ga=GA1.1.1965869148.1695848995&track=ais'
                }}
                style={{
                    width: 100,
                    height: 100,
                    marginBottom: 20
                }}
            />
            <Text
                style={{
                    fontSize: 20,
                    color: 'silver',
                    textAlign: 'center'
                }}
            >
                {
                    (searchTerm.length == 0)
                        ? 'No results'
                        : `No results for \n '${searchTerm}'`
                }

            </Text>
        </View>
    )
}
