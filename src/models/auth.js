import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Http, { setAuthHeader, removeAuthHeader } from '../services/http';
import Config from '../services/config';

const auth = {
  effects: dispatch => ({
    async storeToken(token) {
      this.setToken(token);
      try {
        await AsyncStorage.setItem(`@${Config.urlPrefix}:token`, token);
      } catch (error) {
        console.log('Something went wrong!');
      }
    },
    async getToken() {
      try {
        const token = await AsyncStorage.getItem(`@${Config.urlPrefix}:token`);
        if (token !== null) {
          this.setToken(token);
        }
        return token;
      } catch (error) {
        console.log('Something went wrong!');
      }
    },
    async login({ data }) {
      // credentials to ibf.space ->  test@ibf.space/Test123*
      try {
        const response = await Http.post('/auth/login/', data);
        await this.storeToken(response.data.token);
        setAuthHeader(response.data.token);
        this.setUser(response.data.user);
        Navigation.setRoot({
          root: {
            sideMenu: {
              id: 'sideMenu',
              left: {
                component: {
                  id: 'SideBar',
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
        return response;
      } catch (err) {
        throw err.response;
      }
    },
    async logout() {
      try {
        await AsyncStorage.removeItem(`@${Config.urlPrefix}:token`);
        this.setToken(null);
        removeAuthHeader();
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
      } catch (error) {
        console.log('Something went wrong!');
      }
    },
  }),
  reducers: {
    setToken(state, payload) {
      return {
        ...state,
        token: payload,
      };
    },
    setUser(state, payload) {
      return {
        ...state,
        user: payload,
      };
    },
  },
  state: {
    token: null,
    user: null,
  },
};

export default auth;
