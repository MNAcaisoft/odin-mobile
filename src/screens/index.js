import { Navigation } from 'react-native-navigation';
import Home from './Home/home.screen';

export function registerScreens() {
  Navigation.registerComponent(`arns.Home`, () => Home);
}
