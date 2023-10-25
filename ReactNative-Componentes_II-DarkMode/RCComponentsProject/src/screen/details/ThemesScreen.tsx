import React, { useContext } from 'react'
import { HeaderTitle } from '../../components/HeaderTitle'
import { BackButton } from '../../components/BackButton'
import { View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { CapsuleButton, CapsuleType } from '../../components/CapsuleButton'
import { ThemeContext } from '../../context/theme/ThemeContext';

export const ThemesScreen = () => {
    const { setDarkTheme, setLightTheme } = useContext(ThemeContext)

    return (
        <View style={{ flex: 1 }}>
            <BackButton />
            <View style={styles.globalMargin}>
                <HeaderTitle title='Themes' />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly'
                }}
                >
                    <CapsuleButton title='Light' mode={CapsuleType.light} onAction={setLightTheme} />
                    <CapsuleButton title='Dark' mode={CapsuleType.dark} onAction={setDarkTheme} />
                </View>
            </View>

        </View>
    )
}
