import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import { setSearchText } from 'src/actions/searchText';

class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.dispatch(setSearchText(value));
  }

  render() {
    return (
      <SearchBar
        onUserInput={this.handleChange}
      />
    );
  }
}

SearchBarContainer.propTypes = {
  dispatch: T.func.isRequired,
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
