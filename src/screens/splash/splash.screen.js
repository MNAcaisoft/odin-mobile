import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
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
