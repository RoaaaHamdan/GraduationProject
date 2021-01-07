import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import doctorProfile from '../Screens/DoctorProfile'
import doctorCalender from './doctorCaalender'
import EditDocInf from './EditInformation'
import contactListDoctor from './ContactListDoctor'
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
        <Drawer.Screen name="Profile" component={doctorProfile}  />
        <Drawer.Screen name="edit infromation" component={EditDocInf} />
        <Drawer.Screen name="Show calender" component={doctorCalender} />
        <Drawer.Screen name="Show contact list" component={contactListDoctor} />

        
      </Drawer.Navigator>
  );
}