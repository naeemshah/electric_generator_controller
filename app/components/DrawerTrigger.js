import React from 'react';
import {Icon} from 'react-native-elements';

export const DrawerTrigger = ({navigation}) => {
  return (
    <Icon
      onPress={() => navigation.openDrawer()}
      name="md-menu"
      type="ionicon"
      color="#fff"
    />
  );
};
