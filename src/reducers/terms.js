// constants
const SET_TERMS = 'SET_TERMS';

const INITIAL_STATE = {
  termsByDefiniendum: {},
};

export const STATE_KEY = 'terms';

// reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_TERMS: {
      const { terms } = action.payload;
      const newTermsByDefiniendum = terms.reduce((termsMap, term) => {
        termsMap[term.definiendum] = { ...term };
        return termsMap;
      }, {});

      return {
        ...state,
        termsByDefiniendum: {
          ...state.termsByDefiniendum,
          ...newTermsByDefiniendum,
        },
      };
    }
    default: {
      return state;
    }
  }
};

// actions
const setTerms = (terms) => ({
  type: SET_TERMS,
  payload: { terms },
});
