import * as actionTypes from 'src/constants/searchText';

export const setSearchText = (searchText) => ({
  type: actionTypes.SET_SEARCH_TEXT,
  payload: { searchText },
});
