import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import Login from './login.screen';

const t = require('tcomb-form-native');

const Form = t.form.Form;

const LoginForm = t.struct({
  email: t.String,
  password: t.String,
});

const options = {
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

  constructor(props, state) {
    super(props, state);
    Navigation.events().bindComponent(this);
    // Navigation.mergeOptions(props.componentId, {
    //   sideMenu: {
    //     visible: false,
    //   },
    // });
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
        if (err.status === 400) {
          console.log('wrong credentials');
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
