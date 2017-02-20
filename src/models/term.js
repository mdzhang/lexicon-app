import { PropTypes as T } from 'react';

const DiatypePropType = T.shape({
  field: T.string.isRequired,
  tenor: T.string,
  mode: T.string,
});

export const DefinitionPropType = T.shape({
  definiens: T.string,
  diatype: DiatypePropType,
  id: T.string.isRequired,
});

export const PropType = T.shape({
  definiendum: T.string.isRequired,
  definitions: T.arrayOf(DefinitionPropType),
  id: T.string.isRequired,
});

export default {
  PropType,
};
