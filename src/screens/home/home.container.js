import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './home.screen';

class HomeContainer extends React.Component {
  static propTypes = {};
  static navigationOptions = {
    header: null,
  };

  constructor(props, state) {
    super(props, state);
  }

  logout = async () => {
    const { logout } = this.props;
    await logout();
  };

  render() {
    return <Home onLogout={this.logout} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: dispatch.auth.logout,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
