import React from 'react';
import {Text} from 'react-native';

// pull in header with DrawerTrigger
import {TopHeader} from '../components/Header.js';
import {connectedToWifi} from "./../helpers/wifiPermission"

export const HomeScreen =  ({navigation}) => {
  
  return (
    <React.Fragment>
      <TopHeader navigation={navigation} />
      <Text>asdsad</Text>
    </React.Fragment>
  );
};
