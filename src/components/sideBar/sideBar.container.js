import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SideBar from './sideBar.screen';

class SideBarContainer extends React.Component {
  static propTypes = {
    logout: PropTypes.func,
    navigation: PropTypes.object,
    user: PropTypes.object,
  };

  render() {
    const { logout, navigation, user } = this.props;
    return <SideBar onLogout={logout} navigation={navigation} user={user} />;
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});
const mapDispatchToProps = dispatch => ({
  logout: dispatch.auth.logout,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
