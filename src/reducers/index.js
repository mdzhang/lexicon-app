import { combineReducers } from 'redux';

import termReducer, { STATE_KEY as TERM_STATE_KEY } from 'src/reducers/terms';

const rootReducer = combineReducers({
  [TERM_STATE_KEY]: termReducer,
});

export default rootReducer;
