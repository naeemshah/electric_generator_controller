import * as React from 'react';
import {MyDrawer} from './app/navigation/AppNavigator';

import {
  WiFiPermission,
  isEbabled,
  connectedToWifi,
} from './app/helpers/wifiPermission';
import {Loader} from './app/screens/Loading';
import {WifiScreen} from './app/screens/WiFi';
import {ListWifi} from './app/screens/ListWiFi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {WifiEnabled: null, checkingWifi: true, WiFiPer: null};
  }

  wifiStatus = async status => {
    if (status !== this.state.WifiEnabled) {
      this.setState({WifiEnabled: status, checkingWifi: false});
    }
    if (status) {
      let info = await connectedToWifi();
      console.log(info);
    }
  };

  checkWifiStatus = () => {
    isEbabled(this.wifiStatus);
  };

  componentDidMount = async () => {
    let wifiPer = await WiFiPermission();
    if (wifiPer === 'granted') {
      console.log(wifiPer);
      this.checkWifiStatus();
    }
  };

  render = () => {
    // return <ListWifi />;

    if (this.state.checkingWifi) {
      return <Loader />;
    }

    if (!this.state.WifiEnabled) {
      return <WifiScreen checkWifiStatus={this.checkWifiStatus} />;
    }

    return <MyDrawer />;
  };
}

// let permission =  await WiFiPermission();
// console.log(permission);

export default App;
