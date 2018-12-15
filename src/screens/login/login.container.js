import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Login from './login.screen';

import { showToast } from '../../services/toast';

const t = require('tcomb-form-native');
const stylesheet = _.cloneDeep(t.form.Form.stylesheet);

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1;
stylesheet.textboxView.normal.marginBottom = 5;
stylesheet.textboxView.error.marginBottom = 5;

const Form = t.form.Form;

const LoginForm = t.struct({
  email: t.String,
  password: t.String,
});

const options = {
  stylesheet,
  fields: {
    password: {
      placeholder: 'Provide password',
      secureTextEntry: true,
    },
    email: {
      placeholder: 'Provide email',
    },
  },
};

class LoginContainer extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    componentId: PropTypes.string,
  };
  static contextTypes = {
    store: PropTypes.object,
  };
  static navigationOptions = {
    header: null,
  };

  constructor(props, state) {
    super(props, state);
    this.state = {
      email: null,
      password: null,
    };
  }

  handleLogin = async () => {
    const { login, componentId } = this.props;
    const formValue = this.form.getValue();
    if (formValue) {
      this.setState({ values: formValue });
      try {
        await login({ data: formValue, componentId });
      } catch (err) {
        if (err.status === 401) {
          showToast('error', err.data.error);
        }
      }
    }
  };

  render() {
    const { isLoading } = this.props;
    const { values } = this.state;
    const form = (
      <Form ref={ref => (this.form = ref)} type={LoginForm} options={options} value={values} />
    );
    return <Login loginForm={form} onLogin={this.handleLogin} loading={isLoading} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.loading.effects.auth.login,
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  login: dispatch.auth.login,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
