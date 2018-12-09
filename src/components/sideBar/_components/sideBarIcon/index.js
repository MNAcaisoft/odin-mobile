import * as React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import { Navigation } from 'react-native-navigation';

import styles from './styles';

class SideBarIcon extends React.Component {
  static propTypes = {};

  toggle = async componentId => {
    await Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  };

  render() {
    const { sideBarIcon } = styles;
    return (
      <Icon
        style={sideBarIcon}
        ios="ios-menu"
        android="md-menu"
        onPress={() => this.toggle('SideBar')}
      />
    );
  }
}

export default SideBarIcon;
