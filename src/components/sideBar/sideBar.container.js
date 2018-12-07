import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Navigation } from 'react-native-navigation';
import SideBar from './sideBar.screen';

class SideBarContainer extends React.Component {
  static propTypes = {
    logout: PropTypes.func,
    componentId: PropTypes.string,
  };
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    const { logout, componentId } = this.props;
    return <SideBar onLogout={logout} componentId={componentId} />;
  }
}

const mapDispatchToProps = dispatch => ({
  logout: dispatch.auth.logout,
});

export default connect(
  null,
  mapDispatchToProps
)(SideBarContainer);
