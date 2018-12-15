import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeContainer from './home/home.container';
import ProfileContainer from './profile/profile.container';
import LoginContainer from './login/login.container';
import Splash from './splash/splash.screen';
import SideBarContainer from '../components/sideBar/sideBar.container';

const AppStack = createDrawerNavigator(
  {
    Home: { screen: HomeContainer },
    Profile: { screen: ProfileContainer },
  },
  {
    contentComponent: SideBarContainer,
  }
);
const AuthStack = createStackNavigator({ Login: LoginContainer });

export default createAppContainer(
  createSwitchNavigator(
    {
      Splash,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Splash',
    }
  )
);
