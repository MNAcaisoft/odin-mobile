import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Payments from './payments.screen';
import { getCurrentTwoWeeksPeriod } from '../../services/time';

class PaymentsContainer extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    user: PropTypes.object,
    getPayments: PropTypes.func,
    isLoading: PropTypes.bool,
  };
  static navigationOptions = {
    header: null,
  };

  constructor(props, state) {
    super(props, state);
    this.getTransactions();
  }

  getTransactions = async () => {
    this.props.getPayments({ userId: this.props.user.id, ...getCurrentTwoWeeksPeriod() });
  };

  render() {
    const { navigation, isLoading } = this.props;
    return <Payments navigation={navigation} isLoading={isLoading} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.loading.effects.payments.getPayments,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  getPayments: dispatch.payments.getPayments,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentsContainer);
