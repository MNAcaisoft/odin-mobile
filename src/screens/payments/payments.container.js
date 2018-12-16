import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Payments from './payments.screen';
import { getCurrentTwoWeeksPeriod } from '../../services/time';

class PaymentsContainer extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    paymentsList: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object,
    getPayments: PropTypes.func,
    isLoading: PropTypes.bool,
  };
  static navigationOptions = {
    header: null,
  };

  constructor(props, state) {
    super(props, state);
    this.state = { period: getCurrentTwoWeeksPeriod(), paymentsList: [], balance: 0 };
    this.getTransactions();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.paymentsList.length !== prevState.paymentsList.length) {
      const balance = nextProps.paymentsList
        .filter(entry => {
          return entry.status === 'processed';
        })
        .reduce((prev, curr) => {
          return prev + curr.value;
        }, 0);
      return {
        paymentsList: nextProps.paymentsList,
        balance,
      };
    }
    return null;
  }

  getTransactions = async () => {
    this.props.getPayments({ userId: this.props.user.id, ...this.state.period });
  };

  render() {
    const { navigation, isLoading } = this.props;
    const { period, paymentsList, balance } = this.state;
    return (
      <Payments
        navigation={navigation}
        isLoading={isLoading}
        period={period}
        payments={paymentsList}
        balance={balance}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.loading.effects.payments.getPayments,
  user: state.auth.user,
  paymentsList: state.payments.paymentsList,
});

const mapDispatchToProps = dispatch => ({
  getPayments: dispatch.payments.getPayments,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentsContainer);
