import { useContext } from "react";
import { ThemeContext } from "../../context/theme/ThemeContext";
import React, { useState } from 'react'
import { View, Switch, Text, StyleSheet } from 'react-native'
import { BackButton } from '../../components/BackButton';
import { HeaderTitle } from '../../components/HeaderTitle';
import { CustomSwitch } from '../../components/CustomSwitch';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    const onchangeValue = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View>
            <BackButton />
            <View style={{ marginHorizontal: 15 }}>
                <HeaderTitle title='Switches' />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...styles.switchTextRow, color: colors.text }}>isActive</Text>
                    <CustomSwitch isOn={state.isActive} onChange={(enabled) => onchangeValue(enabled, 'isActive')} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
                    <Text style={{ ...styles.switchTextRow, color: colors.text }}>isHungry</Text>
                    <CustomSwitch isOn={state.isHungry} onChange={(enabled) => onchangeValue(enabled, 'isHungry')} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ ...styles.switchTextRow, color: colors.text }}>isHappy</Text>
                    <CustomSwitch isOn={state.isHappy} onChange={(enabled) => onchangeValue(enabled, 'isHappy')} />
                </View>

                <Text style={styles.json}>
                    {JSON.stringify(state, null, 5)}
                </Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    switchTextRow: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    json: {
        backgroundColor: '#EBEBEB',
        marginTop: 30,
        fontSize: 20,
        paddingLeft: 8
    }
});
