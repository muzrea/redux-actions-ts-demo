import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import store from './configureStore';
import { isDev } from './utils';

const Page = lazy(() => import('./pages'));

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Page/>
      </Suspense>
    </Router>
  </Provider>
);

export default isDev() ? hot(module)(App) : App;
