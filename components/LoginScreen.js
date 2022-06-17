import { StyleSheet, View } from 'react-native';
import React, { useState, useContext } from 'react';
import { TextInput, Button } from 'react-native-paper';
import { AppStateContext } from "../AppStateContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(AppStateContext);

  const login = async () => {
    try {
      //login API call
      //10.0.2.2 is localhost van je PC in android emulator
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
      if (json.access_token) {
        //Verander access token in global state
        context.actions.changeToken("Bearer " + json.access_token);

        //Navigeer naar tab screen
        navigation.navigate('Tabs');
      }
    }
    catch (error) {
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