import * as actionTypes from 'src/constants/terms';

export const setTerms = (terms) => ({
  type: actionTypes.SET_TERMS,
  payload: { terms },
});
