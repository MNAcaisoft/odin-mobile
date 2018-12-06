import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { Root, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import variables from '../../native-base-theme/variables/material';
import Config from '../services/config';
import HomeContainer from './home/home.container';
import LoginContainer from './login/login.container';

function themeWrap(WrappedComponent) {
  return class theme extends React.Component {
    render() {
      return (
        <StyleProvider style={getTheme(variables)}>
          <Root style={{ backgroundColor: '#fff' }}>
            <WrappedComponent {...this.props} />
          </Root>
        </StyleProvider>
      );
    }
  };
}

export function registerScreens(store, Provider) {
  Navigation.registerComponentWithRedux(
    `${Config.urlPrefix}.Login`,
    () => themeWrap(LoginContainer),
    Provider,
    store
  );
  Navigation.registerComponentWithRedux(
    `${Config.urlPrefix}.Home`,
    () => themeWrap(HomeContainer),
    Provider,
    store
  );
}
