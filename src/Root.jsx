import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import store from 'src/utils/store';
import routes from 'src/routes';

export default (props) => {
  return (
    <Provider store={store}>
      <Router
        history={browserHistory} {...props}
      >
        {routes(store)}
      </Router>
    </Provider>
  );
};
