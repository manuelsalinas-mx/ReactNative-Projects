import React, { useState } from 'react'
import { Switch } from 'react-native'

interface Props {
    isOn: boolean;
    onChange: (enabled: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)

    }

    return (
        <Switch
            trackColor={{ false: 'orange', true: 'green' }}
            thumbColor={isEnabled ? 'cyan' : 'white'}
            ios_backgroundColor="purple"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
