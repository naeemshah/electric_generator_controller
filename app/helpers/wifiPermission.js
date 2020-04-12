import {PermissionsAndroid} from 'react-native';
import WifiManager from 'react-native-wifi-reborn';

export const WiFiPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location permission is required for WiFi connections',
      message:
        'This app needs location permission as this is required  ' +
        'to scan for wifi networks.',
      buttonNegative: 'DENY',
      buttonPositive: 'ALLOW',
    },
  );

  return granted;
};

export const connectedToWifi = async () => {
  try {
    let info = await WifiManager.getCurrentWifiSSID();
    console.log(info);
  } catch (err) {
    console.log('eroro');
  }
};

export const isEbabled = callback => {
  WifiManager.isEnabled(isEnabled => {
    callback(isEnabled);
  });
};

export const setEnabledWiFi = callback => {
  WifiManager.setEnabled(true);
};

export const listWifi = callback => {
  WifiManager.loadWifiList(
    wifiList => {
      console.log(wifiList);
      callback(wifiList);
    },
    error => console.log(error),
  );
};
