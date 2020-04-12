import * as React from 'react';
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
} from 'native-base';

import {TopHeader} from '../components/Header.js';
const startURL = 'http://192.168.4.1/sgen';
const stopURL = 'http://192.168.4.1/getEle';

export const Setting = ({navigation}) => {
  let [auto, autoFun] = React.useState(false);
  let [start, startFun] = React.useState(startURL);
  let [stop, stopFun] = React.useState(stopURL);
  return (
    <Container>
      <TopHeader navigation={navigation} />
      <Grid>
        <Row size={25}>
          <Col size={20}>
            <Content>
              <Form>
                <Item style={{marginTop: 30}}>
                  <Label>Auto Start</Label>
                  <Right>
                    <Switch
                      onValueChange={() => {
                        autoFun(!auto);
                      }}
                      value={auto}
                    />
                  </Right>
                </Item>

                <Item floatingLabel={true}>
                  <Label>Start URL</Label>
                  <Input
                    onChangeText={url => {
                      console.log(url);
                      startFun(url);
                    }}
                    value={start}
                  />
                </Item>
                <Item floatingLabel={true} last={true}>
                  <Label>Stop URL</Label>
                  <Input onChangeText={url => stopFun(url)} value={stop} />
                </Item>
              </Form>
            </Content>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};
