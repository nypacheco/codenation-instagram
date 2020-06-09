import {
  GET_FEED_REQUEST,
  GET_FEED_SUCCESS,
  GET_FEED_FAILURE,
} from '../actions/feed';

const initialState = {
  loading: false,
  error: null,
  feed: [],
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FEED_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        feed: [...state.feed, ...action.payload],
      };
    case GET_FEED_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default feedReducer;
