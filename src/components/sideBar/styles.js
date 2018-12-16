import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  activeLink: {
    backgroundColor: '#FFFFFF2A',
  },
  activeLinkMarker: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    bottom: -2,
    position: 'absolute',
    top: -2,
    width: 7,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: 200,
    backgroundColor: '#0187ed',
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  avatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    marginTop: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#000',
    fontSize: 16,
  },
  linkWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingVertical: 14,
  },
  versionContainer: {
    width: null,
    height: 15,
    justifyContent: 'center',
  },
  versionText: {
    fontSize: 14,
    color: '#ccc',
    alignSelf: 'center',
    paddingRight: 10,
  },
  paymentIcon: {
    fontSize: 30,
  }
});

export default styles;
