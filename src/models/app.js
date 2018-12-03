const app = {
  effects: dispatch => ({
    async init() {
      dispatch.auth.getToken();
      this.setRoot({
        view: 'Login',
      });
    },
  }),
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
