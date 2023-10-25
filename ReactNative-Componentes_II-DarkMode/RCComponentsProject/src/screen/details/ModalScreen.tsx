import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { HeaderTitle } from '../../components/HeaderTitle'
import { styles } from '../../theme/appTheme'

export const ModalScreen = () => {

    const [visible, setVisible] = useState(false)


    const showModal = () => {
        setVisible(!visible)
    }

    return (
        <View style={{ flex: 1 }}>
            <BackButton />
            <View style={styles.globalMargin}>
                <HeaderTitle title='Modal' />

                <Button
                    title='Abrir Modal'
                    onPress={() => showModal()}
                />

                <Modal
                    animationType='slide'
                    visible={visible}
                    transparent={true}

                >
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            height: 300,
                            width: 300,
                            backgroundColor: 'white',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderRadius: 10
                        }}
                        >
                            <HeaderTitle title='Modal' />
                            <Text>Cuerpo del modal</Text>
                            <Button
                                title='Cerrar Modal'
                                onPress={() => showModal()}
                            />
                        </View>
                    </View>

                </Modal>
            </View>
        </View>
    )
}