import Http from '../services/http';

const payments = {
  effects: dispatch => ({
    async getPayments({ startDate, endDate }) {
      try {
        const response = await Http.get('/contractors/transactions', {
          params: {
            startDate: new Date(startDate.utc()),
            endDate: new Date(endDate.utc()),
            limit: 40,
          },
        });
        this.setPayments(response.data.items);
        return response;
      } catch (err) {
        throw err.response;
      }
    },
  }),
  reducers: {
    setPayments(state, payload) {
      return {
        ...state,
        paymentsList: payload,
      };
    },
  },
  state: {
    paymentsList: [],
  },
};

export default payments;
