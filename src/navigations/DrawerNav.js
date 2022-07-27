import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home/Home';
import Setting from '../screens/setting/Setting';
import Message from '../screens/message/Message';
import Historic from '../screens/historic/Historic';
import Profile from '../screens/profile/Profile';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" 
      drawerContent={props => <CustomDrawer {...props} />} 
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: '800'
        }
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{drawerIcon: ({color}) => <Ionicons name="home-outline" size={20} color={color} />}} />
      <Drawer.Screen name="Profile" component={Profile} options={{drawerIcon: ({color}) => <Entypo name="user" size={20} color={color} />}}  />
      <Drawer.Screen name="Messages" component={Message} options={{drawerIcon: ({color}) => <MaterialIcons name="message" size={20} color={color} />}}  />
      <Drawer.Screen name="History" component={Historic} options={{drawerIcon: ({color}) => <Icon name="history" size={23} color={color} />}}  />
      <Drawer.Screen name="Settings" component={Setting} options={{drawerIcon: ({color}) => <Ionicons name="cog" size={24} color={color} />}}  />
    </Drawer.Navigator>
  )
}

export default DrawerNav

const styles = StyleSheet.create({})