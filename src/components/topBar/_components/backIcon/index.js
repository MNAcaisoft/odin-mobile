import * as React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import connect from 'react-redux/es/connect/connect';
import styles from './styles';

class BackIcon extends React.Component {
  static propTypes = {
    stackComponentId: PropTypes.string,
  };

  goBack = async componentId => {
  };

  render() {
    const { stackComponentId } = this.props;
    const { goBackIcon } = styles;
    return (
      <Icon
        style={goBackIcon}
        type="MaterialIcons"
        name="arrow-back"
        onPress={() => this.goBack('AppRoot')}
      />
    );
  }
}

const mapStateToProps = state => ({
  stackComponentId: state.app.stackComponentId,
});

export default connect(
  mapStateToProps,
  null
)(BackIcon);
