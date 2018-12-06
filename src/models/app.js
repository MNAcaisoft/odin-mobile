import { Navigation } from 'react-native-navigation';
import Config from '../services/config';

const app = {
  effects: dispatch => ({
    async init() {
      const token = await dispatch.auth.getToken(`${Config.urlPrefix}:token`);
      if (token) {
        Navigation.setRoot({
          root: {
            stack: {
              id: 'Home',
              children: [
                {
                  component: {
                    name: `${Config.urlPrefix}.Home`,
                  },
                },
              ],
            },
          },
        });
      } else {
        Navigation.setRoot({
          root: {
            stack: {
              id: 'Login',
              children: [
                {
                  component: {
                    name: `${Config.urlPrefix}.Login`,
                  },
                },
              ],
            },
          },
        });
      }
    },
  }),
  reducers: {
    setRoot(state, payload) {
      return {
        ...state,
        root: payload,
      };
    },
  },
  state: {
    root: null,
  },
};

export default app;
