import React from 'react';
import {
  Card,
  CardText,
} from 'material-ui/Card';
import { DefinitionPropType } from 'src/models/term';

class TermCard extends React.Component {
  static propTypes = {
    definition: DefinitionPropType.isRequired,
  };

  render() {
    return (
      <Card>
        <CardText>
          {this.props.definition.definiens}
        </CardText>
      </Card>
    );
  }
}

export default TermCard;
