import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import AchievementsOverview from './AchievementsOverview';
import React from 'react'

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    //TODO: extra screens toevoegen voor toevoegen en bewerken
    <Stack.Navigator
      initialRouteName="AchievementsOverview"
      op
    >
      <Stack.Screen
        name="AchievementsOverview"
        component={AchievementsOverview}
        options={{
          title: 'SummaMove',
          headerRight: () => <IconButton
            icon="plus"
            size={30}
            onPress={() => console.log('add')}
          />
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