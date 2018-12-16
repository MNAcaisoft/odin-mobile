import { Text, Container, View, Content } from 'native-base';
import { Image } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';
import TopBar from '../../components/topBar';

import styles from './styles';
import SideBarIcon from '../../components/sideBar/_components/sideBarIcon';

const pushNotification = require('../../../assets/images/onboard_push.png');
const debitCard = require('../../../assets/images/onboard_debit_card.png');
const transfer = require('../../../assets/images/onboard_transfer.png');

export default class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <TopBar title={'Home'} left={<SideBarIcon navigation={navigation} />} />
        <Content contentContainerStyle={{ flex: 1 }}>
          <View style={styles.swiper}>
            <Swiper loop={false} showButtons horizontal>
              <View style={styles.slide}>
                <View style={[styles.slideImage, styles.flexCenter]}>
                  <Image source={pushNotification} />
                  <View style={styles.slideDescription}>
                    <Text style={styles.slideDescriptionText}>
                      Get paid Faster with our On Demand Company Partners
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.slide}>
                <View style={[styles.slideImage, styles.flexCenter]}>
                  <Image source={debitCard} />
                  <View style={styles.slideDescription}>
                    <Text style={styles.slideDescriptionText}>
                      Spend Instantly from your THOR debit card
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.slide}>
                <View style={[styles.slideImage, styles.flexCenter]}>
                  <Image source={transfer} />
                  <View style={styles.slideDescription}>
                    <Text style={styles.slideDescriptionText}>Send money to your bank</Text>
                  </View>
                </View>
              </View>
            </Swiper>
          </View>
        </Content>
      </Container>
    );
  }
}
