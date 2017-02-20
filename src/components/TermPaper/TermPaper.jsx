import React from 'react';
import Paper from 'material-ui/Paper';
import TermCard from 'src/components/TermCard';
import { PropType as TermPropType } from 'src/models/term';

import styles from './styles.css';

class TermPaper extends React.Component {
  static propTypes = {
    term: TermPropType.isRequired,
  };

  render() {
    return (
      <Paper className={styles.root}>
        <TermCard term={this.props.term} />
      </Paper>
    );
  }
}

export default TermPaper;
