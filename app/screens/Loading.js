import React from 'react';
import {Text} from 'react-native';
import {Spinner} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

export const Loader = () => {
  return (
    <Grid>
      <Row size={20} />
      <Row size={25}>
        <Col>
          <Spinner color="green" />
          <Text style={{marginLeft: 120}}>Lag Sabr Oka. Load kege.</Text>
        </Col>
      </Row>
    </Grid>
  );
};

