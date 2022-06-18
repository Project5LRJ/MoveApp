//Imports
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ExercisesOverview from './ExercisesOverview';
import React from 'react'
import ExercisesDetails from "./ExercisesDetails";

//Maakt stack naviagtion aan
const Stack = createStackNavigator();

//Stack navigation voor het exercises sherm
const StackNav = () => {
    return (
        <Stack.Navigator
            initialRouteName="ExercisesOverview"
            op
        >
            <Stack.Screen
                name="ExercisesOverview"
                component={ExercisesOverview}
                options={{
                    title: 'Exercises',
                }}
            />
            <Stack.Screen
                name="ExercisesDetails"
                component={ExercisesDetails}
                options={{
                    title: 'Exercises Details'
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