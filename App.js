import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import './assets/lang/i18n';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './components/LoginScreen';
import AchievementsScreen from './components/AchievementsScreen';
import ExercisesScreen from './components/ExercisesScreen';
import QrScreen from './components/QrScreen';
import AboutScreen from './components/AboutScreen';
import LanguageScreen from './components/LanguageScreen';
import AppStateContextProvider from "./AppStateContext";
import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

//Main stack die het loginscherm en de tabnavigator bevat
const StackNav = () => {
  const { t } = useTranslation();

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
const TabNav = () => {
  const { t } = useTranslation();

  return (
    <Tab.Navigator
        initialRouteName="Exercises"
        activeColor="#ffffff"
        barStyle={{ backgroundColor: '#3F3E3E' }}>
        <Tab.Screen
            name="Exercises"
            component={ExercisesScreen}
            options={{
                tabBarLabel: t('exercises'),
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="arm-flex-outline" color={color} size={24} />
                ),
            }}/>
            
        <Tab.Screen 
        name="Achievements" 
        component={AchievementsScreen}
        options={{
          tabBarLabel: t('achievements'),
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="medal-outline" color={color} size={24} />
          ),
        }}/>
        <Tab.Screen
            name="QrScreen"
            component={QrScreen}
            options={{
                tabBarLabel: t('qr scanner'),
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="barcode-scan" color={color} size={24} />
                ),
            }}/>
            <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{
                tabBarLabel: t('about'),
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="alpha-i-box-outline" color={color} size={24} />
                ),
            }}/>
            <Tab.Screen
            name="Language"
            component={LanguageScreen}
            options={{
                tabBarLabel: t('language'),
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="translate" color={color} size={24} />
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
