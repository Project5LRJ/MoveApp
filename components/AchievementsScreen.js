import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import AchievementsOverview from './AchievementsOverview';
import React from 'react'

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    //TODO: extra screens toevoegen voor toevoegen en bewerken
    <Stack.Navigator
      initialRouteName="AchievementsOverview"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AchievementsOverview"
        component={AchievementsOverview}
        />
    </Stack.Navigator>
  );
}

const AchievementsScreen = () => {
  return (
    <StackNav/>
  )
}

export default AchievementsScreen

const styles = StyleSheet.create({})