import React, { PropTypes as T } from 'react';
import {
  connectSearchBox,
} from 'react-instantsearch/connectors';
import SearchBar from 'src/components/SearchBar';

const SearchBarContainer = (props) => {
  return (
    <SearchBar
      onUserInput={(value) => props.refine(value)}
    />
  );
};

SearchBarContainer.propTypes = {
  refine: T.func.isRequired,
};

export default connectSearchBox(SearchBarContainer);
