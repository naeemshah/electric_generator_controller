import React from 'react';
import {DrawerTrigger} from './DrawerTrigger';
import {Header} from 'react-native-elements';

export const TopHeader = ({navigation}) => {
  return (
    <Header
      leftComponent={<DrawerTrigger navigation={navigation} />}
      centerComponent={{
        text: 'Genertor Controller',
        style: {color: '#fff', fontWeight: 'bold'},
      }}
      
    />
  );
};
