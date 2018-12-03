import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';

import app from './app';
import auth from './auth';

const loading = createLoadingPlugin();

const store = init({
  models: {
    app,
    auth,
  },
  plugins: [loading],
});

store.dispatch.app.init();

export default store;
