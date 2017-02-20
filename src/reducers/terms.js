import * as actionTypes from 'src/constants/terms';

const INITIAL_STATE = {
  termsById: {},
};

export const STATE_KEY = 'terms';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_TERMS: {
      const { terms } = action.payload;
      const newTermsById = terms.reduce((termsMap, term) => {
        termsMap[term.id] = { ...term };
        return termsMap;
      }, {});

      return {
        ...state,
        termsById: {
          ...state.termsById,
          ...newTermsById,
        },
      };
    }
    default: {
      return state;
    }
  }
};
