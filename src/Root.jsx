import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from 'src/routes';

export default () => {
  return (
    <Router
      history={browserHistory}
    >
      {routes}
    </Router>
  );
};
