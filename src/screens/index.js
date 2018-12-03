import { Navigation } from 'react-native-navigation';
import Home from './home/home.screen';
import Login from './login/login.screen';

export function registerScreens(store, Provider) {
  Navigation.registerComponentWithRedux('arns.Login', () => Login, Provider, store);
  Navigation.registerComponentWithRedux('arns.Home', () => Home, Provider, store);
}
