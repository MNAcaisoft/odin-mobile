import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SideBar from './sideBar.screen';

class SideBarContainer extends React.Component {
  static propTypes = {
    logout: PropTypes.func,
    navigation: PropTypes.object,
  };

  render() {
    const { logout, navigation } = this.props;
    return <SideBar onLogout={logout} navigation={navigation} />;
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  logout: dispatch.auth.logout,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
