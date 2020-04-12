import React from 'react';
import {Text} from 'react-native';

import {TopHeader} from '../components/Header.js';

export const Setting = ({navigation}) => {
  return (
    <React.Fragment>
      <TopHeader navigation={navigation} />
      <Text>Setting</Text>
    </React.Fragment>
  );
};
