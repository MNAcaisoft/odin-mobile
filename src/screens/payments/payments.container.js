import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Payments from './payments.screen';

class PaymentsContainer extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  static navigationOptions = {
    header: null,
  };

  constructor(props, state) {
    super(props, state);
  }

  render() {
    const { navigation } = this.props;
    return <Payments navigation={navigation} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentsContainer);
