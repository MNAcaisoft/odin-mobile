import { Text, Container, View } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/topBar';

import styles from './styles';
import SideBarIcon from '../../components/sideBar/_components/sideBarIcon';

export default class Home extends React.Component {
  static propTypes = {};

  render() {
    const { container, welcome } = styles;
    return (
      <Container>
        <TopBar title={'Home'} left={<SideBarIcon />} />
        <View style={container}>
          <Text style={welcome}>Welcome to ARNS Home!</Text>
        </View>
      </Container>
    );
  }
}
