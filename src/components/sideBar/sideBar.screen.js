import * as React from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Button,
  Icon,
} from 'native-base';

import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Config from './../../services/config';

const userIconUri = require('../../../assets/images/user-icon-small.png');

const routes = [
  {
    route: 'Home',
    caption: 'Payments',
    iconName: 'md-card',
  },
  {
    route: 'Profile',
    caption: 'Profile',
    iconName: 'md-person',
  },
  {
    route: '',
    caption: 'Logout',
    iconName: 'md-log-out',
  },
];

class SideBar extends React.Component {
  static propTypes = {
    onLogout: PropTypes.func,
    navigation: PropTypes.object,
    user: PropTypes.object,
  };

  goTo(route, caption, logout) {
    const { onLogout, navigation } = this.props;
    this.toggle();
    if (logout) {
      onLogout();
    } else {
      navigation.navigate(route);
    }
  }

  toggle = () => {
    const { navigation } = this.props;
    navigation.closeDrawer();
  };

  isLogout(caption) {
    return caption === 'Logout';
  }

  render() {
    const { user } = this.props;
    const {
      container,
      linkWrapper,
      activeLink,
      versionContainer,
      versionText,
      avatar,
      avatarContainer,
      avatarText,
    } = styles;
    let visibleScreenInstanceId = '';
    return (
      <Container>
        <Content style={container}>
          <View style={avatarContainer} elevation={5}>
            <View style={avatar}>
              <Thumbnail large source={userIconUri} />
              <Text style={avatarText}>Hello, {user.firstName}!</Text>
            </View>
          </View>
          <List
            dataArray={routes}
            renderRow={route => (
              <ListItem
                icon
                style={[
                  linkWrapper,
                  visibleScreenInstanceId === 'profileStack' ? activeLink : undefined,
                ]}
                onPress={() => {
                  this.goTo(route.route, route.caption, this.isLogout(route.caption));
                }}>
                <Left>
                  <Button style={{ backgroundColor: '#0187ed' }}>
                    <Icon name={route.iconName} />
                  </Button>
                </Left>
                <Body>
                  <Text>{route.caption}</Text>
                </Body>
              </ListItem>
            )}
          />
          <View style={versionContainer}>
            <Text style={versionText}>{Config.appVersion}</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SideBar;
