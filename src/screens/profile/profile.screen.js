import { Text, Container, View, Content } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/topBar';

import styles from './styles';

import SideBarIcon from '../../components/sideBar/_components/sideBarIcon';

export default class Profile extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const { navigation } = this.props;
    const { container, welcome } = styles;
    return (
      <Container>
        <TopBar title={'Profile'} left={<SideBarIcon navigation={navigation} />} />
        <Content>
          <View style={container}>
            <Text style={welcome}>Welcome to ODIN Profile!</Text>
          </View>
        </Content>
      </Container>
    );
  }
}
