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
        appId="latency"
        apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
        indexName="bestbuy"
      >
        <SearchBarContainer />
        <TermPaperListContainer />
      </InstantSearch>
    </div>
  );
};

export default AppView;
