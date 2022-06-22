import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './components/LoginScreen';
import AchievementsScreen from './components/AchievementsScreen';
import ExercisesScreen from './components/ExercisesScreen';
import QrScreen from './components/QrScreen';
import AppStateContextProvider from "./AppStateContext";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

//Main stack die het loginscherm en de tabnavigator bevat
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
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
          title: 'Tab Navigator',
        }}
      />
    </Stack.Navigator>
  );
}

//Tabnavigator die de verschillende schermen bevat
//TODO: extra screens toevoegen voor exercises en about
const TabNav = () => {
  return (
    <Tab.Navigator
        initialRouteName="Exercises"
        activeColor="#ffffff"
        barStyle={{ backgroundColor: '#3F3E3E' }}>
        <Tab.Screen
            name="Exercises"
            component={ExercisesScreen}
            options={{
                tabBarLabel: 'Exercises',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="arm-flex-outline" color={color} size={24} />
                ),
            }}/>
        <Tab.Screen 
        name="Achievements" 
        component={AchievementsScreen}
        options={{
          tabBarLabel: 'Achievements',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="medal-outline" color={color} size={24} />
          ),
        }}/>
        <Tab.Screen
            name="QrScanner"
            component={QrScreen}
            options={{
                tabBarLabel: 'Qr-Scanner',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="barcode-scan" color={color} size={24} />
                ),
            }}/>
      </Tab.Navigator>
  )
}



const App = () => {
  return (
      <NavigationContainer>
        <AppStateContextProvider>
          <StackNav/>
        </AppStateContextProvider>
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
