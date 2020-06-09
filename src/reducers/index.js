import { combineReducers } from 'redux';

import stories from './stories';
import feed from './feed';

const rootReducer = combineReducers({
  stories,
  feed,
});

export default rootReducer;

// store: {
//   stories: {
//     loading: false,
//     error: null,
//     stories: [],
//   }
//   feed: {
//     loading: false,
//     error: null,
//     feed: [],
//   }
// }
