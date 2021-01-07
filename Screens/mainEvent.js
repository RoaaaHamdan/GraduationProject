import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ToDoList from './AddBabyEvent'
import babyEventCalendr from './eventsCalender'
const RootStack = createStackNavigator();

const App2 = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="ToDoList" headerMode="none">
      <RootStack.Screen name="ToDoList" component={ToDoList} />
      <RootStack.Screen name="babyEventCalendr" component={babyEventCalendr} />           
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
//export default RootStackScreen;
export default App2;
