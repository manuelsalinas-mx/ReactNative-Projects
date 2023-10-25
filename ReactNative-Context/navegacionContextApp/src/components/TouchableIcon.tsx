import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { Colores } from '../theme/AppTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface Props {
    icon: string;
}

export const TouchableIcon = ({ icon }: Props) => {
    const { changeIcon } = useContext(AuthContext)


    return (
        <TouchableOpacity
            onPress={() => changeIcon(icon)}
        >
            <Icon name={icon}
                size={50}
                color={Colores.primary} />
        </TouchableOpacity>
    )
}
