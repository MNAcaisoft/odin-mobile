import * as React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class SideBarIcon extends React.Component {
  static propTypes = {};

  toggle = async componentId => {

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
