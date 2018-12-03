import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';

const loading = createLoadingPlugin();

const store = init({
  models: {},
  plugins: [loading],
});

// store.dispatch.app.init();

export default store;
