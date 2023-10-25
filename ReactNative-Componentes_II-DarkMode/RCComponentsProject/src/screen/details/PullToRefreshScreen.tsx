import React, { useContext } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { HeaderTitle } from '../../components/HeaderTitle'
import { styles } from '../../theme/appTheme'
import { useRefresh } from '../../hooks/useRefresh'
import { ThemeContext } from '../../context/theme/ThemeContext'

export const PullToRefreshScreen = () => {
    const { refreshing, onRefresh } = useRefresh()
    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={{ flex: 1 }}>
            <BackButton />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        progressBackgroundColor={'silver'}
                        tintColor={colors.text}
                        style={{
                            // backgroundColor: 'yellow'
                        }}
                    />
                }
            >
                <View style={styles.globalMargin}>
                    <HeaderTitle title='Pull to Refresh' />
                </View>
            </ScrollView>
        </View>

    )
}