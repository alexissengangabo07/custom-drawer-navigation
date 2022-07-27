import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home/Home';
import Setting from '../screens/setting/Setting';
import Message from '../screens/message/Message';
import Historic from '../screens/historic/Historic';
import Profile from '../screens/profile/Profile';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Message" component={Message} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="History" component={Historic} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})