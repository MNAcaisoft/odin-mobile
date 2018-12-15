import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeContainer from './home/home.container';
import ProfileContainer from './profile/profile.container';
import LoginContainer from './login/login.container';
import Splash from './splash/splash.screen';

const AppStack = createStackNavigator({ Home: HomeContainer, Profile: ProfileContainer });
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
