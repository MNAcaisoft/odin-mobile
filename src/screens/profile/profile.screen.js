import { Text, Container, View } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/topBar';

import styles from './styles';

import BackIcon from '../../components/topBar/_components/backIcon';

export default class Profile extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const { navigation } = this.props;
    const { container, welcome } = styles;
    return (
      <Container>
        <TopBar title={'Profile'} left={<BackIcon navigation={navigation} />} />
        <View style={container}>
          <Text style={welcome}>Welcome to ODIN Profile!</Text>
        </View>
      </Container>
    );
  }
}
