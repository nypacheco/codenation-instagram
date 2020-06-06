import { combineReducers } from 'redux';
import stories from './stories';

const rootReducer = combineReducers({
  stories,
});

export default rootReducer;

// store: {
//   stories: {
//     loading: false,
//     error: null,
//     stories: [],
//   }
// }
