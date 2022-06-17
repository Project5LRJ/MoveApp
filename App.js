import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './components/LoginScreen';
import AchievementsScreen from './components/AchievementsScreen';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabNav}
        options={{
          title: 'SummaMove',
        }}
      />
    </Stack.Navigator>
  );
}

const TabNav = () => {
  return (
    <Tab.Navigator
        initialRouteName="Achievements"
        activeColor="#ffffff"
        barStyle={{ backgroundColor: '#3F3E3E' }}>
        <Tab.Screen 
        name="Achievements" 
        component={AchievementsScreen}
        options={{
          tabBarLabel: 'Achievements',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="medal-outline" color={color} size={24} />
          ),
        }}/>
      </Tab.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
