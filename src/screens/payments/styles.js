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
    color: '#7ED322',
    fontSize: 50,
    fontWeight: 'bold',
  },
  summary: {
    flex: 1,
    justifyContent: 'center',
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 2,
  },
  amount: {
    fontWeight: 'bold',
    color: '#0187ed',
    fontSize: 14,
  },
  processed: {
    backgroundColor: '#7ED322',
  },
  processing: {
    backgroundColor: '#0187ed',
  },
  new: {
    backgroundColor: '#F8E71C',
  },
  failed: {
    backgroundColor: '#FA5C5C',
  },
});
export default styles;
