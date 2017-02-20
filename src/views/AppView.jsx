import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { InstantSearch } from 'react-instantsearch/dom';
import Header from 'src/components/Header';
import TermPaperListContainer from 'src/containers/TermPaperListContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'src/global.css';
import 'react-instantsearch-theme-algolia/style.min.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const AppView = (props) => {
  return (
    <MuiThemeProvider>
      <InstantSearch
        appId={AppConfig.algolia.appId}
        apiKey={AppConfig.algolia.apiKey}
        indexName={AppConfig.algolia.indexName}
      >
        <Header />
        <TermPaperListContainer />
      </InstantSearch>
    </MuiThemeProvider>
  );
};

export default AppView;
