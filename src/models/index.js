import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';

import app from './app';
import auth from './auth';
import payments from './payments';

const loading = createLoadingPlugin();

const store = init({
  models: {
    app,
    auth,
    payments,
  },
  plugins: [loading],
});

export default store;
