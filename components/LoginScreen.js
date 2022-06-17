import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';

const LoginScreen = ({ navigation }) => {
    //Statefull variabelen voor login credentials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
        //10.0.2.2 is localhost van je PC in android emulator
            //Doe login API call
            const response = await fetch('http://10.0.2.2:8000/api/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            //Haal json op
            const json = await response.json();

            //Als json access token bevat
            if(json.access_token) {
                //Navigeer naar tab screen
                navigation.navigate('Tabs', {
                    access_token: json.access_token
                })
            }
        }
        catch(error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={email} onChangeText={(value) => { setEmail(value) }} />
            <TextInput secureTextEntry={true} style={styles.input} value={password} onChangeText={(value) => { setPassword(value) }} />
            <Button mode="contained" style={styles.button} onPress={() => login()}>
                Login
            </Button>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: 45,
        marginBottom: 30,
    },
    button: {
        width: '80%'
    }
})