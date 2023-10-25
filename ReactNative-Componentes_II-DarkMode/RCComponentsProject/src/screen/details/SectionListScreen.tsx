import React, { useContext } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { HeaderTitle } from '../../components/HeaderTitle'
import { styles } from '../../theme/appTheme'
import { MenuItemSeparator } from '../../components/MenuItemSeparator';
import { ThemeContext } from '../../context/theme/ThemeContext'

interface CasaProductora {
    franquicia: string;
    data: string[];
}

const casas: CasaProductora[] = [
    {
        franquicia: "DC Comics",
        data: ["Batman", "Superman", "Flash", 'Wonder Woman', 'Aquaman']
    },
    {
        franquicia: "Marvel Comics",
        data: ["Ironman", "Thor", "Spiderman", 'X-Men']
    },
    {
        franquicia: "Anime",
        data: ["Saint Seiya", "Dragon Ball"]
    }
];

export const SectionListScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={{ flex: 1 }}>
            <BackButton />
            <View style={styles.globalMargin}>
                <HeaderTitle title='Section List' />
                <MenuItemSeparator />
                <SectionList
                    sections={casas}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => (
                        <View style={myStyles.item}>
                            <Text style={{ ...myStyles.title, color: colors.text }}>{item}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section }) => (
                        <View style={{ ...myStyles.headerView, backgroundColor: colors.card }}>
                            <Text style={{ ...myStyles.header, color: colors.text }}>{section.franquicia}</Text>
                        </View>
                    )}
                    stickySectionHeadersEnabled={true}
                    ListFooterComponent={() => (
                        <View style={{ ...myStyles.footer, backgroundColor: colors.card }}>
                            <Text style={{ fontWeight: 'bold', alignSelf: 'center', color: colors.text }}>{'Total de casas: ' + casas.length}</Text>
                        </View>
                    )}
                    renderSectionFooter={({ section }) => (
                        <View style={{ backgroundColor: colors.notification, alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{'Data count: ' + section.data.length}</Text>
                        </View>
                    )}
                    ItemSeparatorComponent={() => <MenuItemSeparator />}
                />
            </View>
        </View>
    )
}

const myStyles = StyleSheet.create({
    item: {
        // backgroundColor: 'gray'
        height: 34,
        justifyContent: 'center'
    },
    title: {
        fontSize: 14,
        paddingLeft: 10
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    headerView: {
        borderRadius: 3,
        height: 30,
        marginBottom: 15
    },
    footer: {
        borderRadius: 10
    }
});