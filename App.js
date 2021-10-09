import React, { Fragment, useState } from 'react';
import { StyleSheet, Text, Button, Image, View } from 'react-native';
export default function App() {

    const [isOpen, setOpen] = useState(false);

    const HandleDeploy = () => {
        return (
            <View style={styles.separador} >
                <Text>
                    sdsd
                </Text>
            </View>
        );
    }

    const HandleLeft = (e) => {
        return (
            <View style={styles.sepaLeft} >
                <Text>
                    sdsd
                </Text>
            </View>
        );
    }

    const HandleRight = (e) => {

    }

    return (
        <Fragment>
            
            <Button title="Fffffffffffff" onPress={ HandleLeft } />

            <Button title="Falcon speaks" onPress={ HandleLeft } />

            <Button title="Pie bueno" onPress={ HandleRight } />

            <Button title="Stop" onPress={ HandleRight } />

            <HandleDeploy />
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
        marginTop: 150,
        fontSize: 17
    },
    sepaLeft: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        justifyContent: 'center',
        marginRight: 150,
        fontSize: 17
    },
    btnSepa: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 15,
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
