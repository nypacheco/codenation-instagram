export const GET_FEED_REQUEST = '@actions/get_feed/request';
export const GET_FEED_SUCCESS = '@actions/get_feed/success';
export const GET_FEED_FAILURE = '@actions/get_feed/failure';

export const getFeed = () => ({
  type: GET_FEED_REQUEST,
});

export const getFeedSuccess = (feed) => ({
  type: GET_FEED_SUCCESS,
  payload: [...feed],
});

export const getFeedError = (error) => ({
  type: GET_FEED_SUCCESS,
  error,
});
