import { StyleSheet, View, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { AppStateContext } from "../AppStateContext";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginUnsuccessfull, setLoginUnsuccessfull] = useState(false);

  const context = useContext(AppStateContext);

  const validate = () => {
    let success = true;

    if (!email || !email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i) || email.length > 255) {
      success = false;
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if(!password || password.length < 8) {
      success = false;
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    return success;
  }

  const login = async () => {
    if (validate()) {
      try {
        //login API call
        //10.0.2.2 is localhost van je PC in android emulator
        const response = await fetch('http://summamove.laurenskosters.nl/api/login', {
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
          setLoginUnsuccessfull(false);
          //Verander access token in global state
          context.actions.changeToken("Bearer " + json.access_token);

          //Navigeer naar tab screen
          navigation.navigate('Tabs');
        }
        if (json.message) {
          setEmailError(true);
          setPasswordError(true)
          setLoginUnsuccessfull(true);
        }
      }
      catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email address" value={email} onChangeText={(value) => { setEmail(value) }} error={emailError} />
      <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" value={password} onChangeText={(value) => { setPassword(value) }} error={passwordError} />
      <HelperText style={[styles.error, loginUnsuccessfull ? null : { display: 'none' }]} type='error'>Invalid credentials!</HelperText>
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
    marginBottom: 20
  },
  button: {
    width: '80%'
  },
  error: {
    fontSize: 15,
    marginBottom: 20
  }
})