import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

export function start() {
  registerScreens();
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
          id: 'TEST',
          children: [
            {
              component: {
                name: 'arns.Home',
              },
            },
          ],
        },
      },
    });
  });
}
