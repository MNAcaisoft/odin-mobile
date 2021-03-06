import * as React from 'react';
import { Root, StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { FormattedProvider } from 'react-native-globalize';
import NavigationService from './services/navigation';
import store from './models';
import getTheme from '../native-base-theme/components';
import variables from '../native-base-theme/variables/material';

import AppScreens from './screens';

const AppContainer = createAppContainer(AppScreens);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(variables)}>
          <Root style={{ backgroundColor: '#fff' }}>
            <FormattedProvider locale="en" currency="USD">
              <AppContainer
                ref={navigatorRef => {
                  NavigationService.setTopLevelNavigator(navigatorRef);
                }}
              />
            </FormattedProvider>
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}
