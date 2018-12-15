import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './home.screen';

class HomeContainer extends React.Component {
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
    return <Home navigation={navigation} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
