//Imports
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ExercisesOverview from './ExercisesOverview';
import React from 'react'
import ExercisesDetails from "./ExercisesDetails";
import {useTranslation} from 'react-i18next';


//Maakt stack naviagtion aan
const Stack = createStackNavigator();

//Stack navigation voor het exercises sherm
const StackNav = () => {
    const { t } = useTranslation();

    return (
        <Stack.Navigator
            initialRouteName="ExercisesOverview">
            <Stack.Screen
                name="ExercisesOverview"
                component={ExercisesOverview}
                options={{
                    title: t('exercises'),
                }}
            />
            <Stack.Screen
                name="ExercisesDetails"
                component={ExercisesDetails}
                options={{
                    title: t('exercise details')
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