import React from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';

class Splash extends React.Component {
  static propTypes = {
    getToken: PropTypes.func,
    getUser: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.bootstrapApp();
  }

  bootstrapApp = async () => {
    const { getToken, getUser, navigation } = this.props;
    const token = await getToken();
    const user = await getUser();
    navigation.navigate(token && user ? 'App' : 'Auth');
    SplashScreen.hide();
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getToken: dispatch.auth.getToken,
  getUser: dispatch.auth.getUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
