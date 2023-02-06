import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Nomeando } from '../components/nomeando';
import { useContext } from 'react';
import { Context } from '../context/stateManager';

export function TelaPrincipal({ navigation }) {
    const { verifyPlayers } = useContext(Context)

    function verify() {
        if (verifyPlayers() === true) {
            return navigation.navigate("Game")
        }

        return Alert.alert('Digite o nome de todos os jogadores primeiro')
    }


    return (
        <View style={styles.container}>
            <View style={styles.ContainerTitulo}>
                <Text style={styles.titulo}>Nome dos Jogadores</Text>
            </View>

            <Nomeando id={1} />
            <Nomeando id={2} />

            <TouchableOpacity onPress={verify}>
                <Text style={styles.ButtonTitulo}>Continuar</Text>
            </TouchableOpacity>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 55,
        flex: 1,
        backgroundColor: '#181313',
        alignItems: 'center',
        justifyContent: 'center',
    },

    ContainerTitulo: {

    },
    titulo: {
        color: "#ffff",
        fontSize: 25
    },
    ButtonTitulo: {
        color: "#ffff",
        fontSize: 25
    }
});
