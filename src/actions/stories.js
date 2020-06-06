export const GET_STORIES_REQUEST = '@actions/get_stories/request';
export const GET_STORIES_SUCCESS = '@actions/get_stories/success';
export const GET_STORIES_FAILURE = '@actions/get_stories/failure';

export const getStories = () => ({
  type: GET_STORIES_REQUEST,
});

export const getStoriesSuccess = (stories) => ({
  type: GET_STORIES_SUCCESS,
  payload: [...stories],
});

export const getStoriesError = (error) => ({
  type: GET_STORIES_SUCCESS,
  error,
});
