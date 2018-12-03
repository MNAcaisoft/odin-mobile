import { Navigation } from 'react-native-navigation';
import React from 'react';
import { registerScreens } from './screens';
import { Provider } from 'react-redux';
import store from '@models';

registerScreens(store, Provider);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    this.rootScreen = {
      view: '',
    };
  }

  onStoreUpdate() {
    const { root } = store.getState().app;
    if (root && this.rootScreen.view !== root.view) {
      this.rootScreen = root;
      this.switchRoot(root.view);
    }
  }

  switchRoot(view) {
    Navigation.events().registerAppLaunchedListener(async () => {
      Navigation.setDefaultOptions({});

      Navigation.setRoot({
        root: {
          stack: {
            options: {
              topBar: {
                visible: false,
              },
            },
            id: 'login',
            children: [
              {
                component: {
                  name: `arns.${view}`,
                },
              },
            ],
          },
        },
      });
    });
  }
}
