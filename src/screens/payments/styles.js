import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  summaryContainer: {
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  period: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 20,
  },
  periodText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  balance: {
    flex: 4,
    justifyContent: 'center',
  },
  balanceText: {
    color: '#0187ed',
    fontSize: 50,
    fontWeight: 'bold',
  },
  summary: {
    flex: 1,
    justifyContent: 'center',
  },
  summaryText: {},
  listContainer: {
    flex: 2,
  },
});
export default styles;
