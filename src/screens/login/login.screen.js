import * as React from 'react';
import PropTypes from 'prop-types';

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
    const { logoContainer, formContainer, loginButtonContainer, loginButton } = styles;
    return (
      <Container>
        <Content>
          <View style={logoContainer} />
          <View style={formContainer}>{loginForm}</View>
          <View style={loginButtonContainer}>
            <Button onPress={onLogin} style={loginButton}>
              {loading ? <Spinner color="white" /> : <Text>LOGIN</Text>}
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Login;
