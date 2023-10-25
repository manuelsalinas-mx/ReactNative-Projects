
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const PlaygroundScreen = () => {
    const { opacity, fadeIn, fadeOut } = useFade()

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#0433FF'
            }}
        >
            <Animated.View
                style={{
                    marginBottom: 50,
                    width: 150,
                    height: 150,
                    backgroundColor: '#FFFBBC',
                    borderColor: '#FF40FF',
                    borderWidth: 10,
                    opacity: opacity
                }}
            />

            <Button
                title='Comenzar Fade In'
                onPress={fadeIn}
            />
            <View style={{ height: 18 }} />
            <Button
                title='Comenzar Fade OUt'
                onPress={fadeOut}
            />

        </View>
    )
}
