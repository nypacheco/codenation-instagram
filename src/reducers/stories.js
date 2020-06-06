import {
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
  GET_STORIES_FAILURE,
} from '../actions/stories';

const initialState = {
  loading: false,
  error: null,
  stories: [],
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_STORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        stories: [...state.stories, ...action.payload],
      };
    case GET_STORIES_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default storiesReducer;
