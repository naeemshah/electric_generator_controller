import React from 'react';
import {Icon} from 'react-native-elements';

export const DrawerTrigger = ({navigation}) => {
  return (
    <Icon
    style={{marginLeft:20}}
      onPress={() => navigation.openDrawer()}
      name="md-menu"
      type="ionicon"
      color="#fff"
    />
  );
};
