import { Text, Container, View } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/topBar';

import styles from './styles';
import SideBarIcon from '../../components/sideBar/_components/sideBarIcon';

export default class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const { navigation } = this.props;
    const { container, welcome } = styles;
    return (
      <Container>
        <TopBar title={'Home'} left={<SideBarIcon navigation={navigation} />} />
        <View style={container}>
          <Text style={welcome}>Welcome to ODIN Home!</Text>
        </View>
      </Container>
    );
  }
}
