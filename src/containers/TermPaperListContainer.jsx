import React, { PropTypes as T } from 'react';
import {
  connectInfiniteHits,
} from 'react-instantsearch/connectors';
import TermPaper from 'src/components/TermPaper';

const TermPaperListContainer = (props) => {
  const termPapers = props.hits.map((hit) => {
    return (
      <TermPaper
        key={hit.id}
        term={hit}
      />
    );
  });

  return (
    <div>
      {termPapers}
      {/* TODO: handle has more */}
    </div>
  );
};

TermPaperListContainer.propTypes = {
  hits: T.array,
};

TermPaperListContainer.defaultProps = {
  hits: [],
};

export default connectInfiniteHits(TermPaperListContainer);
