import React from 'react';
import {
  Card,
  CardTitle,
} from 'material-ui/Card';
import { PropType as TermPropType } from 'src/models/term';
import DefinitionCard from 'src/components/DefinitionCard';

class TermCard extends React.Component {
  static propTypes = {
    term: TermPropType.isRequired,
  };

  render() {
    const definitionCards = this.props.term.definitions.map((definition) => {
      return (
        <DefinitionCard
          key={definition.id}
          definition={definition}
        />
      );
    });

    return (
      <Card>
        <CardTitle title={this.props.term.definiendum} />
        {definitionCards}
      </Card>
    );
  }
}

export default TermCard;
