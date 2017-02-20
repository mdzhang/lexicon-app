import React from 'react';
import { Router, browserHistory } from 'react-router';

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
      <Router
        history={browserHistory} {...props}
      >
        {routes}
      </Router>
    </MuiThemeProvider>
  );
};
