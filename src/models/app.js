const app = {
  effects: dispatch => ({}),
  reducers: {
    setRoot(state, payload) {
      return {
        ...state,
        root: payload,
      };
    },
  },
  state: {
    root: null,
  },
};

export default app;
