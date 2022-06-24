import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { IconButton } from 'react-native-paper';
import AchievementsOverview from './AchievementsOverview';
import AchievementsEdit from './AchievementsEdit';
import AchievementsCreate from './AchievementsCreate';
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
        options={({navigation}) => ({
          title: 'Achievements',
          headerRight: () => <IconButton
            icon="plus"
            size={30}
            onPress={() => navigation.navigate('AchievementsCreate')}
          />
        })}
      />
      <Stack.Screen
        name="AchievementsEdit"
        component={AchievementsEdit}
        options={{
          title: 'Edit Achievement'
        }}
      />
        <Stack.Screen
            name="AchievementsCreate"
            component={AchievementsCreate}
            options={{
                title: 'Create Achievement'
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