import { Button, Spinner, Text, Container, View } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/topBar';

import styles from './styles';

export default class Home extends React.Component {
  static propTypes = {
    onLogout: PropTypes.func,
    loading: PropTypes.bool,
  };

  render() {
    const { onLogout, loading } = this.props;
    const { container, welcome, logoutButton } = styles;
    return (
      <Container>
        <TopBar title={'Home'} />
        <View style={container}>
          <Text style={welcome}>Welcome to ARNS Home!</Text>
          <Button onPress={onLogout} style={logoutButton}>
            {loading ? <Spinner color="white" /> : <Text>LOGOUT</Text>}
          </Button>
        </View>
      </Container>
    );
  }
}
