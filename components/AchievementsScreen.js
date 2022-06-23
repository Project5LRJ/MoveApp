import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import AchievementsOverview from './AchievementsOverview';
import AchievementsEdit from './AchievementsEdit';
import React from 'react'

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    //TODO: extra screen toevoegen voor toevoegen
    <Stack.Navigator
      initialRouteName="AchievementsOverview">
      <Stack.Screen
        name="AchievementsOverview"
        component={AchievementsOverview}
        options={{
          title: 'Achievements',
          headerRight: () => <IconButton
            icon="plus"
            size={30}
            onPress={() => console.log('add')}
          />
        }}
      />
      <Stack.Screen
        name="AchievementsEdit"
        component={AchievementsEdit}
        options={{
          title: 'Edit Achievement'
        }}
      />
    </Stack.Navigator>
  );
}

const AchievementsScreen = () => {
  return (
    <StackNav />
  )
}

export default AchievementsScreen

const styles = StyleSheet.create({})