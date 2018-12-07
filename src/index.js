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
      let token = null;
      try {
        token = await store.dispatch.auth.getToken(`${Config.urlPrefix}:token`);
      } catch (err) {
        console.log(err);
      }
      if (token) {
        Navigation.setRoot({
          root: {
            sideMenu: {
              id: 'sideMenu',
              left: {
                component: {
                  id: 'Drawer',
                  name: `${Config.urlPrefix}.SideBar`,
                },
              },
              center: {
                stack: {
                  id: 'AppRoot',
                  children: [
                    {
                      component: {
                        id: 'Home',
                        name: `${Config.urlPrefix}.Home`,
                      },
                    },
                  ],
                },
              },
            },
          },
        });
      } else {
        Navigation.setRoot({
          root: {
            sideMenu: {
              id: 'sideMenu',
              left: {
                component: {
                  id: 'Drawer',
                  name: `${Config.urlPrefix}.SideBar`,
                },
                visible: false,
                enabled: false,
              },
              center: {
                stack: {
                  id: 'AppRoot',
                  children: [
                    {
                      component: {
                        id: 'Login',
                        name: `${Config.urlPrefix}.Login`,
                        options: {
                          sideMenu: {
                            left: {
                              component: {
                                name: 'sideMenu',
                              },
                              visible: false,
                              enabled: false,
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        });
      }
    });
  }
}
