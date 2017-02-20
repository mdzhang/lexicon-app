import React from 'react';
import { InstantSearch } from 'react-instantsearch/dom';
import Header from 'src/components/Header';
import SearchBarContainer from 'src/containers/SearchBarContainer';
import TermPaperListContainer from 'src/containers/TermPaperListContainer';

const AppView = () => {
  return (
    <div>
      <Header />

      <InstantSearch
        appId={AppConfig.algolia.appId}
        apiKey={AppConfig.algolia.apiKey}
        indexName={AppConfig.algolia.indexName}
      >
        <SearchBarContainer />
        <TermPaperListContainer />
      </InstantSearch>
    </div>
  );
};

export default AppView;
