//Imports
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import QrScanner from './QrScanner';
import React from 'react'
import QrDetails from "./ExercisesDetails";

//Maakt stack naviagtion aan
const Stack = createStackNavigator();

//Stack navigation voor het exercises sherm
const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName="QrScanner"
            op
        >
            <Stack.Screen
                name="QrScanner"
                component={QrScanner}
                options={{
                    title: 'QrScanner',
                }}
            />
            <Stack.Screen
                name="QrDetails"
                component={QrDetails}
                options={{
                    title: 'QrDetails'
                }}
            />
        </Stack.Navigator>
    );
}

//Laat de stacknaviagtion zien
const ExercisesScreen = () => {
    return (
        <StackNav />
    )
}

export default ExercisesScreen

const styles = StyleSheet.create({})