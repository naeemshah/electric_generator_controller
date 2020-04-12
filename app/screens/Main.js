import React, {TouchableWithoutFeedback} from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Switch,
  Right,
  Text,
  Button,
} from 'native-base';
import {TopHeader} from '../components/Header.js';

export const HomeScreen = ({navigation}) => {
  let [color, colorFun] = React.useState('green');
  return (
    <Container>
      <TopHeader navigation={navigation} />
      <Grid>
        <Row size={1} />
        <Row size={1}>
          <Col size={8} />
          <Col size={20}>
            <Button
              onPress={() => {
                colorFun('red');
                setTimeout(() => {
                  colorFun('green');
                }, 500);
              }}
              style={{
                backgroundColor: color,
                width: 150,
                height: 150,
                borderRadius: 75,
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col />
          <Col>
            <Button danger={true}>
              <Text>Stop</Text>
            </Button>
          </Col>
          <Col />
        </Row>
      </Grid>
    </Container>
  );
};
