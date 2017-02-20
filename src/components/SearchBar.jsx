import React, { PropTypes as T } from 'react';
import TextField from 'material-ui/TextField';
import _noop from 'lodash/noop';

class SearchBar extends React.Component {
  static propTypes = {
    inputStyle: T.object,
    onUserInput: T.func,
  };

  static defaultProps = {
    inputStyle: {
      color: '#FFF'
    },
    onUserInput: _noop,
  };

  handleChange(value) {
    this.props.onUserInput(value);
  }

  render() {
    return (
      <TextField
        hintText="Term to lookup"
        onChange={(e, v) => this.handleChange(v)}
        inputStyle={this.props.inputStyle}
      />
    );
  }
}

export default SearchBar;
