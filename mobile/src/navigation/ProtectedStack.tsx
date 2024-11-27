import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MainBottomTab from './MainBottomTab';
import MyBooksScreen from '../screens/MyBooksScreen';

const Stack = createStackNavigator();

const ProtectedStack = ():React.JSX.Element => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
        <Stack.Screen 
        name="MainTab" component={MainBottomTab} />
        <Stack.Screen
        name="MyBooksScreen" component={MyBooksScreen} />
    </Stack.Navigator>
  )
}

export default ProtectedStack

const styles = StyleSheet.create({})