import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import Profile from './profile.screen';

class ProfileContainer extends React.Component {
  static propTypes = {
    componentId: PropTypes.string,
  };
  static contextTypes = {};

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    return <Profile />;
  }
}

// const mapStateToProps = state => ({
//   isLoading: state.loading.effects.auth.logout,
// });
//
// const mapDispatchToProps = dispatch => ({
// });

export default connect(
  null,
  null
)(ProfileContainer);
