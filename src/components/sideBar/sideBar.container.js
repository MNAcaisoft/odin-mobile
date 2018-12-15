import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SideBar from './sideBar.screen';

class SideBarContainer extends React.Component {
  static propTypes = {
    logout: PropTypes.func,
    setComponentId: PropTypes.func,
    stackComponentId: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { logout, stackComponentId } = this.props;
    return <SideBar onLogout={logout} stackComponentId={stackComponentId} />;
  }
}

const mapStateToProps = state => ({
  stackComponentId: state.app.stackComponentId,
});
const mapDispatchToProps = dispatch => ({
  logout: dispatch.auth.logout,
  setComponentId: dispatch.app.setComponentId,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
