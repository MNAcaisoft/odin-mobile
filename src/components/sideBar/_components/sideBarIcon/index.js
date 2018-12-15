import * as React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import styles from './styles';

class SideBarIcon extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  toggle = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  render() {
    const { sideBarIcon } = styles;
    return (
      <Icon style={sideBarIcon} ios="ios-menu" android="md-menu" onPress={() => this.toggle()} />
    );
  }
}

export default SideBarIcon;
