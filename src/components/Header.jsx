import React from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBarContainer from 'src/containers/SearchBarContainer';

class Header extends React.Component {
  render() {
    return (
      <AppBar
        title="Lexicon"
        iconElementRight={<SearchBarContainer />}
      />
    );
  }
}

export default Header;
