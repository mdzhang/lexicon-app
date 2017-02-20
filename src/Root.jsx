import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import store from 'src/utils/store';
import routes from 'src/routes';

import 'src/global.css';
import 'react-instantsearch-theme-algolia/style.min.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


export default (props) => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Router
          history={browserHistory} {...props}
        >
          {routes(store)}
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
};
