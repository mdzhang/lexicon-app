import * as actionTypes from 'src/constants/searchText';

const INITIAL_STATE = '';

export const STATE_KEY = 'searchText';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_TEXT: {
      const { searchText } = action.payload;
      return searchText;
    }
    default: {
      return state;
    }
  }
};
