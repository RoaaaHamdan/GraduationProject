import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import EditDocInf from './EditInformation'
import contactList from './ContactList'
import MainUserHome from './MainUserHome'
const Drawer = createDrawerNavigator();


export default function DrawerUser(props) {
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
              <Drawer.Screen name="Home Page" component={MainUserHome} />

        <Drawer.Screen name="edit infromation" component={EditDocInf} />
        <Drawer.Screen name="Show contact list" component={contactList} />

        
      </Drawer.Navigator>
  );
}