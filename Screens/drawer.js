import * as React from 'react';
import { Button, View } from 'react-native';
import adminProfile from '../Screens/adimProfile'
import getAllUsers from '../Screens/getAllUsers'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import req from '../Screens/getRequests'

const Drawer = createDrawerNavigator();


export default function Draweradmin(props) {
  return (

      <Drawer.Navigator initialRouteName="Profile"   drawerContentOptions={{
           activeBackgroundColor:'lightblue',
           
           itemStyle:{
             marginTop:20,
            
           },
           style:{
                marginTop:170
           }
      

      }} >
        <Drawer.Screen name="Profile" component={adminProfile} />
        <Drawer.Screen name="Show Users" component={getAllUsers} />
        <Drawer.Screen name="get Requests" component={req} />

      </Drawer.Navigator>
  );
}