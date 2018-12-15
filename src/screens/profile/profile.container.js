import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from './profile.screen';

class ProfileContainer extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    console.log('profile', this.props);
    const { navigation } = this.props;
    return <Profile navigation={navigation} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  null
)(ProfileContainer);
