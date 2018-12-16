import {
  Text,
  Container,
  View,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Icon,
  Button,
} from 'native-base';
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedCurrency } from 'react-native-globalize';
import TopBar from '../../components/topBar';

import styles from './styles';
import SideBarIcon from '../../components/sideBar/_components/sideBarIcon';

export default class Payments extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    period: PropTypes.object,
    payments: PropTypes.arrayOf(PropTypes.object),
    balance: PropTypes.number,
  };

  render() {
    const { navigation, period, payments, balance } = this.props;
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
              <FormattedCurrency value={balance} currency="USD" style={styles.balanceText} />
            </View>
            <View style={styles.summary}>
              <Text style={styles.summaryText}>Your payments from current period.</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <List
              dataArray={payments}
              renderRow={payment => (
                <ListItem avatar>
                  <Left>
                    <Button
                      style={[
                        payment.status === 'processed' ? styles.processed : null,
                        payment.status === 'new' ? styles.new : null,
                        payment.status === 'failed' ? styles.failed : null,
                        payment.status === 'processing' ? styles.processing : null,
                      ]}>
                      <Icon name="md-card" />
                    </Button>
                  </Left>
                  <Body>
                    <Text>{payment.job.name || ''}</Text>
                    <Text note>{payment.job.description || ''}</Text>
                  </Body>
                  <Right>
                    <FormattedCurrency
                      value={payment.job.value}
                      currency="USD"
                      style={styles.amount}
                    />
                    <Text note>{payment.status || ''}</Text>
                  </Right>
                </ListItem>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
