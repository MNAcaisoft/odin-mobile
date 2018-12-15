import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { Navigation } from 'react-native-navigation';
import Home from './home.screen';

export default class HomeContainer extends React.Component {
  static propTypes = {
    componentId: PropTypes.string,
  };

  constructor(props, state) {
    super(props, state);
    // Navigation.events().bindComponent(this);
  }

  render() {
    return <View><Text>Helloo</Text></View>;
  }
}

// const mapStateToProps = state => ({});
//
// const mapDispatchToProps = dispatch => ({});
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HomeContainer);
