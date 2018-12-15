import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '90%',
    paddingLeft: 35,
    paddingRight: 35,
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#0187ed',
    alignItems: 'stretch',
  },
  loginFieldsContainer: {
    paddingBottom: 60,
  },
  loginLogoContainer: {
    paddingBottom: 60,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
export default styles;
