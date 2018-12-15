import React from 'react';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';

class Splash extends React.Component {
  static propTypes = {
    getToken: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.bootstrapApp();
  }

  bootstrapApp = async () => {
    const { getToken, navigation } = this.props;
    const token = await getToken();
    navigation.navigate(token ? 'App' : 'Auth');
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

const mapStateToProps = state => ({
  isLoading: state.loading.effects.auth.login,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  getToken: dispatch.auth.getToken,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
