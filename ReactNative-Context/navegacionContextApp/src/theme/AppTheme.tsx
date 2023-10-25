import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
        marginVertical: 8
    },
    mainTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10
    },
    botonGrande: {
        width: 150,
        height: 50,
        backgroundColor: '#0433FF',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 15

    },
    textoBotonGrande: {
        fontSize: 20,
        color: 'white'
    },
    avatarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 15,
    },
    menuContainer: {
        marginHorizontal: 30,
        marginVertical: 30
    },
    menuTexto: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    menuBoton: {
        flexDirection: 'row',
        marginVertical: 10
    },
    menuIcon: {
        paddingRight: 8
    }
});

export const Colores = {
    primary: '#0433FF',
    activeBackground: '#F5F5F5',
    pink: '#FF0085'
}