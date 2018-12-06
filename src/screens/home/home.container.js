import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import Home from './home.screen';

class LoginContainer extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    componentId: PropTypes.string,
  };
  static contextTypes = {
    store: PropTypes.object,
  };

  constructor(props, state) {
    super(props, state);
    Navigation.events().bindComponent(this);
  }

  handleLogout = async () => {
    const { logout, componentId } = this.props;
    try {
      await logout({ componentId });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { isLoading } = this.props;
    return <Home onLogout={this.handleLogout} loading={isLoading} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.loading.effects.auth.logout,
});

const mapDispatchToProps = dispatch => ({
  logout: dispatch.auth.logout,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
