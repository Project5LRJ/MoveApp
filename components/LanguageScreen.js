//Imports
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import LanguageSelection from "./LanguageSelection";
import {useTranslation} from 'react-i18next';

//Maakt stack naviagtion aan
const Stack = createStackNavigator();

//Stack navigation voor het language sherm
const StackNav = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      initialRouteName="LanguageSelection"
      op
    >
      <Stack.Screen
        name="LanguageSelection"
        component={LanguageSelection}
        options={{
          title: t('language choice'),
        }}
      />
    </Stack.Navigator>
  );
}

//Laat de stacknaviagtion zien
const LanguageScreen = () => {
  return (
    <StackNav />
  )
}

export default LanguageScreen

const styles = StyleSheet.create({})