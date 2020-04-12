import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/Main';
import {Setting} from '../screens/Setting';

const Drawer = createDrawerNavigator();


export const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Setting" component={Setting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
