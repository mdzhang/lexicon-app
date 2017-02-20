import { combineReducers } from 'redux';

import searchTextReducer, {
  STATE_KEY as SEARCH_TEXT_STATE_KEY,
} from 'src/reducers/searchText';
import termReducer, { STATE_KEY as TERM_STATE_KEY } from 'src/reducers/terms';

const rootReducer = combineReducers({
  [SEARCH_TEXT_STATE_KEY]: searchTextReducer,
  [TERM_STATE_KEY]: termReducer,
});

export default rootReducer;
