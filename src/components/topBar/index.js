import * as React from 'react';
import { Body, Header, Left, Right, Title } from 'native-base';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';

import styles from './styles';

class TopBar extends React.Component {
  static propTypes = {
    left: PropTypes.object,
    title: PropTypes.string,
    right: PropTypes.object,
  };

  render() {
    const { title, left, right } = this.props;
    const { topBarLeft, topBarCenter, topBarCenterTitle, topBarRight } = styles;
    return (
      <Header>
        <Left style={topBarLeft}>{left}</Left>
        <Body style={topBarCenter}>
          <Title style={topBarCenterTitle}>{title}</Title>
        </Body>
        <Right style={topBarRight}>{right}</Right>
      </Header>
    );
  }
}

export default connect(
  null,
  null
)(TopBar);
