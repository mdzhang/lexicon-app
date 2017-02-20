import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from 'src/reducers';

const store = createStore(rootReducer, {}, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
