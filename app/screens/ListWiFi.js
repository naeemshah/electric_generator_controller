import * as React from 'react';
import {Button, Text, Spinner} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {listWifi} from './../helpers/wifiPermission';

export const ListWifi = () => {
  let [connectingToWif, connectFun] = React.useState(false);
  let [wifiList, listFun] = React.useState([]);

  console.log(listWifi(listFun));
  console.log(wifiList);
  return (
    <Grid>
      <Row size={20} />
      <Row size={25}>
        <Col size={20} />
      </Row>
    </Grid>
  );
};
