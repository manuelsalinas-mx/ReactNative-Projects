import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme';
import { BotonCalc } from '../components/BotonCalc';
import { Operadores, useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const { numero, numeroAnterior, limpiar, del, positivoNegativo, armarNumero, calcular, realizarOperacion } = useCalculadora()

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}> {numeroAnterior} </Text>
            <Text
                style={styles.resultado}
                numberOfLines={2}
                adjustsFontSizeToFit
            >
                {numero}
            </Text>

            <View style={styles.fila}>
                <BotonCalc texto='C' color='gray' accion={limpiar} />
                <BotonCalc texto='+/-' color='gray' accion={positivoNegativo} />
                <BotonCalc texto='del' color='gray' accion={del} />
                <BotonCalc texto='/' color='orange' accion={() => realizarOperacion(Operadores.dividir)} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto='7' accion={armarNumero} />
                <BotonCalc texto='8' accion={armarNumero} />
                <BotonCalc texto='9' accion={armarNumero} />
                <BotonCalc texto='x' color='orange' accion={() => realizarOperacion(Operadores.multiplicar)} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto='4' accion={armarNumero} />
                <BotonCalc texto='5' accion={armarNumero} />
                <BotonCalc texto='6' accion={armarNumero} />
                <BotonCalc texto='-' color='orange' accion={() => realizarOperacion(Operadores.restar)} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto='1' accion={armarNumero} />
                <BotonCalc texto='2' accion={armarNumero} />
                <BotonCalc texto='3' accion={armarNumero} />
                <BotonCalc texto='+' color='orange' accion={() => realizarOperacion(Operadores.sumar)} />
            </View>

            <View style={styles.fila}>
                <BotonCalc texto='0' ancho accion={armarNumero} />
                <BotonCalc texto='.' accion={armarNumero} />
                <BotonCalc texto='=' color='orange' accion={calcular} />
            </View>
        </View>
    )
}