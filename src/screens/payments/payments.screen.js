import { Text, Container, View, Content } from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../../components/topBar';

import styles from './styles';
import SideBarIcon from '../../components/sideBar/_components/sideBarIcon';

export default class Payments extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    period: PropTypes.object,
  };

  render() {
    const { navigation, period } = this.props;
    const start = period.startDate.format('MMM DD');
    const end = period.endDate.format('MMM DD');
    return (
      <Container>
        <TopBar title={'Payments'} left={<SideBarIcon navigation={navigation} />} />
        <Content>
          <View style={styles.summaryContainer}>
            <View style={styles.period}>
              <Text style={styles.periodText}>
                {start} - {end}
              </Text>
            </View>
            <View style={styles.balance}>
              <Text style={styles.balanceText}>$10</Text>
            </View>
            <View style={styles.summary}>
              <Text style={styles.summaryText}>Your balance from current period.</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
