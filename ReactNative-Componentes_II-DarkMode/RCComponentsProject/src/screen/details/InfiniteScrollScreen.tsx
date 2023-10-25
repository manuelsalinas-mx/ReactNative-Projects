import React, { useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { HeaderTitle } from '../../components/HeaderTitle'
import { styles } from '../../theme/appTheme'
import { FlatList } from 'react-native-gesture-handler'
import { MenuItemSeparator } from '../../components/MenuItemSeparator'
import { FadeInImage } from '../../components/FadeInImage'

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5])

    const loadMore = () => {
        const newArray: number[] = []

        for (let index = 0; index < numbers.length; index++) {
            newArray[index] = numbers.length + index
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray])
        }, 1500)

    }
    return (
        <View style={{ flex: 1 }}>
            <BackButton />
            <View style={{ ...styles.globalMargin, flex: 1 }}>
                <FlatList
                    data={numbers}
                    renderItem={({ item }) => <FadeInImage imgUrl={`https://picsum.photos/id/1${item}/400/200`} style={{ width: 400, height: 200 }} />}
                    keyExtractor={(item) => item.toString()}
                    ItemSeparatorComponent={() => <MenuItemSeparator />}
                    ListHeaderComponent={() => <HeaderTitle title='Infinite Scroll' />}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={() => (
                        <View>
                            <ActivityIndicator
                                size={30}
                            />
                        </View>
                    )}
                />
            </View>
        </View>
    )
}