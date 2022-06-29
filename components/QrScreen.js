//Imports
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import QrScanner from './QrScanner';
import React from 'react'
import QrDetails from "./QrDetails";
import { useTranslation } from 'react-i18next';

//Maakt stack naviagtion aan
const Stack = createStackNavigator();

//Stack navigation voor het exercises sherm
const StackNav = () => {
    const { t } = useTranslation();

    return (
        <Stack.Navigator
            initialRouteName="QrScanner">
            <Stack.Screen
                name="QrScanner"
                component={QrScanner}
                options={{
                    title: t('qr scanner'),
                }}
            />
            <Stack.Screen
                name="QrDetails"
                component={QrDetails}
                options={{
                    title: 'QR details'
                }}
            />
        </Stack.Navigator>
    );
}

//Laat de stacknaviagtion zien
const QrScreen = () => {
    return (
        <StackNav />
    )
}

export default QrScreen

const styles = StyleSheet.create({})