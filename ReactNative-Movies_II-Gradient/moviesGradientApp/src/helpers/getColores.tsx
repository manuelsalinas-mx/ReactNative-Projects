
import { getColors } from 'react-native-image-colors';


export const getImageColors = async (url: string) => {

    let primary;
    let secondary;

    const colores = await getColors(url, {})
    // .then(resp => {
    //     if (resp.platform === 'android') {
    //         primary = resp.dominant
    //         secondary = resp.average
    //     } else if (resp.platform == 'ios') {
    //         primary = resp.primary
    //         secondary = resp.secondary
    //     } else {
    //         primary = resp.dominant
    //         secondary = resp.vibrant
    //     }
    // })

    if (colores.platform === 'android') {
        primary = colores.dominant
        secondary = colores.average
    } else if (colores.platform == 'ios') {
        primary = colores.primary
        secondary = colores.secondary
    } else {
        primary = colores.dominant
        secondary = colores.vibrant
    }

    return [primary, secondary]
}