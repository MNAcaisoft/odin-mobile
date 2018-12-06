import { Navigation } from 'react-native-navigation';
import React from 'react';
import { Provider } from 'react-redux';
import store from './models';
import Config from './services/config';
import { registerScreens } from './screens';

registerScreens(store, Provider);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Navigation.events().registerAppLaunchedListener(async () => {
      Navigation.setDefaultOptions({
        topBar: {
          visible: false,
          drawBehind: true,
          height: 0,
        },
      });
    });
  }
}
