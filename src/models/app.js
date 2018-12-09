const app = {
  effects: dispatch => ({
    async setComponentId(componentId) {
      this.setComponent(componentId);
    },
  }),
  reducers: {
    setComponent(state, payload) {
      return {
        ...state,
        stackComponentId: payload,
      };
    },
  },
  state: {
    stackComponentId: null,
  },
};

export default app;
