import * as React from 'react';
import {Button, Text, Spinner} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {setEnabledWiFi} from './../helpers/wifiPermission';

export const WifiScreen = ({checkWifiStatus}) => {
  let [enablingWifi, wifiFun] = React.useState(false);
  return (
    <Grid>
      <Row size={20} />
      <Row size={25}>
        <Col size={20}>
          <Button
            onPress={() => {
              setEnabledWiFi();
              wifiFun(true);
              setInterval(() => {
                checkWifiStatus();
              }, 500);
            }}
            disabled={enablingWifi}
            style={{width: 150, marginLeft: 100}}>
            <Text style={{textAlign: 'center'}}>
              {enablingWifi ? 'Turning on WiFi' : 'Turn On WiFi'}
            </Text>
          </Button>
          {enablingWifi && <Spinner />}
        </Col>
      </Row>
    </Grid>
  );
};
