import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginBackground: {
    backgroundColor: '#fff',
    background: require('../../../assets/images/loginBackground.svg'),
    backgroundSize: '800px 800px',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'block',
  },
  logoContainer: {
    flex: 1,
    height: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  formContainer: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 180,
  },
  loginButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#0d4364',
    paddingVertical: 15,
    width: '80%',
  },
  loginButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
  },
});
export default styles;
