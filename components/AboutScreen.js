//Imports
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import About from './About';
import React from 'react';
import {useTranslation} from 'react-i18next';

//Maakt stack naviagtion aan
const Stack = createStackNavigator();

//Stack navigation voor het exercises sherm
const StackNav = () => {
    const { t } = useTranslation();

    return (
        <Stack.Navigator
            initialRouteName="AboutScreen">
            <Stack.Screen
                name="AboutScreen"
                component={About}
                options={{
                    title: t('about'),
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