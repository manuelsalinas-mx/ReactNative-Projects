import React, { useContext, useState } from 'react'
import Carousel from 'react-native-snap-carousel';

import { View, SafeAreaView, ImageSourcePropType, Text, Dimensions, Image } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { HeaderTitle } from '../../components/HeaderTitle';
import { Pagination } from 'react-native-snap-carousel';
import { ThemeContext } from '../../context/theme/ThemeContext';


interface Slide {
    title: string;
    desc: string;
    img: string;
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: 'https://uncannycs.com/wp-content/uploads/2022/07/hire-mobile-app-developer.png',
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: 'https://www.multirecruit.com/wp-content/uploads/2022/05/mobiledevelopment-1.png',
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: 'https://static-00.iconduck.com/assets.00/web-developer-illustration-503x512-mega3xxj.png',
    },
];


export const SlideShowScreen = () => {

    const { width, height } = Dimensions.get('window')
    const [activeIndex, setActiveIndex] = useState(0)
    const { theme: { colors } } = useContext(ThemeContext)

    const renderItem = (item: Slide) => {
        return (
            <View
                style={{
                    borderRadius: 5,
                    padding: 49,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Image
                    source={{
                        uri: item.img
                    }}
                    style={{
                        width: 250,
                        height: 250,
                        resizeMode: 'contain'
                    }}
                />

                <Text style={{ fontSize: 30, fontWeight: 'bold', marginVertical: 10, alignSelf: 'flex-start', color: colors.text }}>{item.title}</Text>
                <Text style={{ color: colors.text }}>{item.desc}</Text>

            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >


            <View>
                <HeaderTitle title='Slides' />

                <Carousel
                    data={items}
                    renderItem={({ item }) => renderItem(item)}
                    sliderWidth={width}
                    itemWidth={width}
                    layout='default'
                    onSnapToItem={(index) => {
                        setActiveIndex(index)
                    }}
                />

                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: colors.primary
                    }}
                />

                {
                    activeIndex === 2 && <BackButton />
                }

            </View>

        </SafeAreaView >
    )
}
