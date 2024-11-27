import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/bottomTabScreens/LibraryScreen';
import MembersScreen from '../screens/bottomTabScreens/MembersScreen';
import DiscoverScreen from '../screens/bottomTabScreens/DiscoverScreen';
import MyProfileScreen from '../screens/bottomTabScreens/MyProfileScreen';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Icon, useTheme } from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator();

const MainBottomTab = () => {

  const theme = useTheme();

  return (
    <Tab.Navigator keyboardHidesNavigationBar={true} barStyle={{ backgroundColor: theme.colors.surface}} activeIndicatorStyle={{ backgroundColor: theme.colors.transparent}} activeColor={theme.colors.primary}>
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
            <Icon color={color} source={"home"} size={20} />
          ),
      }} 
      name="Home" component={HomeScreen} />
      <Tab.Screen options={{
        tabBarIcon: ({ color }) => (
            <Icon color={color} source={"library"} size={20} />
          ),
      }} 
      name="Library" component={LibraryScreen} />
      <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
            <Icon color={color} source={"account-multiple"} size={20} />
          ),
      }} 
       name="Members" component={MembersScreen} />
      <Tab.Screen 
      options={{
        tabBarIcon: ({ color }) => (
            <Icon color={color} source={"map"} size={20} />
          ),
      }} 
      name="Discover" component={DiscoverScreen} />
      <Tab.Screen 
      options={{
        tabBarIcon: ({ color }) => (
            <Icon color={color} source={"account-circle"} size={20} />
          ),
      }} 
      name="MyProfile" component={MyProfileScreen} />
    </Tab.Navigator>
  )
}

export default MainBottomTab

const styles = StyleSheet.create({})