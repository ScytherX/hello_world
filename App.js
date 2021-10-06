import React, { Fragment } from 'react';
import { StyleSheet, Text, Button, Image } from 'react-native';
export default function App() {

    const handleDeploy = (e) => {
        return (
            <Fragment style={styles.separador}>
                <Image source={require('./UPENLOGO.png')} style={styles.imge} />
                <Text style={styles.separador}>Universidad Politécnica del Estado de Nayarit</Text>
            </Fragment>
        );
    }

    const handleLeft = (e) => {

    }

    const handleRight = (e) => {

    }

    return (
        <Fragment style={styles.container}>


            <Button title="Boom baby" onPress={handleDeploy} />

            <Button title="Falcon speaks" onPress={handleLeft} />

            <Button title="Pie bueno" onPress={handleRight} />

        </Fragment>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    separador: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        justifyContent: 'center',
        margin: 30,
        fontSize: 17
    },
    imge: {
        alignItems: 'center',
        alignSelf: 'center',
        width: 200,
        height: 200,
        margin: 20
    }
})
