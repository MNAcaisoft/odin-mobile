import * as React from 'react';
import PropTypes from 'prop-types';

import { ImageBackground, Image, KeyboardAvoidingView } from 'react-native';

import { Container, Content, Button, Text, Spinner, View } from 'native-base';

import styles from './styles';

class Login extends React.Component {
  static propTypes = {
    onLogin: PropTypes.func,
    loginForm: PropTypes.object,
    loading: PropTypes.bool,
  };

  render() {
    const { onLogin, loginForm, loading } = this.props;
    const {
      formContainer,
      loginButtonContainer,
      loginButton,
      centeredContainer,
      loginFieldsContainer,
      loginLogoContainer,
    } = styles;
    return (
      <Container>
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground
            source={require('../../../assets/images/loginBackground.png')}
            style={centeredContainer}>
            <View style={formContainer}>
              <View style={loginLogoContainer}>
                <Image
                  style={{ height: 30, width: 80, resizeMode: 'contain' }}
                  source={require('../../../assets/images/logoText.png')}
                />
              </View>
              <View style={loginFieldsContainer}>{loginForm}</View>
              <View style={loginButtonContainer}>
                <Button onPress={onLogin} style={loginButton} rounded>
                  {loading ? <Spinner color="white" /> : <Text>LOGIN</Text>}
                </Button>
              </View>
            </View>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

export default Login;
