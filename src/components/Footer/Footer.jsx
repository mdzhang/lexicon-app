import React from 'react';
import {
  BottomNavigation,
} from 'material-ui/BottomNavigation';
import AlgoliaIcon from 'src/components/AlgoliaIcon';

import styles from './styles.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.root}>
        <BottomNavigation>
          <AlgoliaIcon />
        </BottomNavigation>
      </footer>
    );
  }
}

export default Footer;
