import * as React from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { Navigation } from 'react-native-navigation';

import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Config from './../../services/config';

const routes = [
  {
    route: 'Profile',
    caption: 'Profile',
  },
  {
    route: '',
    caption: 'Logout',
  },
];

class SideBar extends React.Component {
  static propTypes = {
    onLogout: PropTypes.func,
    onToggleSideBar: PropTypes.func,
    componentId: PropTypes.string,
  };

  async goTo(route, caption, logout) {
    const { onLogout, componentId } = this.props;
    if (logout) {
      await onLogout();
    } else {
      Navigation.push(componentId, {
        component: {
          name: `${Config.urlPrefix}.${route}`,
        },
      });
    }

    this.toggle(componentId);
  }

  toggle = componentId => {
    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });
  };

  isLogout(caption) {
    return caption === 'Logout';
  }

  render() {
    const { container, linkWrapper, activeLink, versionContainer, versionText } = styles;
    let visibleScreenInstanceId = '';
    return (
      <Container>
        <Content style={container}>
          <List
            dataArray={routes}
            renderRow={route => (
              <ListItem
                style={[
                  linkWrapper,
                  visibleScreenInstanceId === 'profileStack' ? activeLink : undefined,
                ]}
                onPress={() => {
                  this.goTo(route.route, route.caption, this.isLogout(route.caption));
                }}>
                <Text style={{ color: '#fff' }}>{route.caption}</Text>
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
