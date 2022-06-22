//Imports
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import About from './About';
import React from 'react';

//Maakt stack naviagtion aan
const Stack = createStackNavigator();

//Stack navigation voor het exercises sherm
const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName="About"
            op
        >
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    title: 'About',
                }}
            />
        </Stack.Navigator>
    );
}

//Laat de stacknaviagtion zien
const AboutScreen = () => {
    return (
        <StackNav />
    )
}

export default AboutScreen

const styles = StyleSheet.create({})