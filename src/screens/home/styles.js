import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  swiper: {
    flexGrow: 1,
  },
  slide: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingBottom: 40,
  },
  slideDescription: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 0,
    flexShrink: 0,
    marginVertical: 20,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  slideDescriptionText: {
    fontFamily: '$globalFontFamily',
    fontWeight: 'normal',
    fontSize: 20,
    textAlign: 'center',
  },
  slideImage: {
    flexGrow: 1,
    width: '100%',
    marginVertical: 20,
  },
  flexEnd: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
