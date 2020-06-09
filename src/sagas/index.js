import {
  all, fork, takeEvery, call, put,
} from 'redux-saga/effects';

import * as storiesActions from '../actions/stories';
import * as feedActions from '../actions/feed';

import * as storiesServices from '../utils/stories';
import * as feedServices from '../utils/feed';

function* getStories() {
  try {
    const stories = yield call(storiesServices.getStories);
    yield put(storiesActions.getStoriesSuccess(stories));
  } catch (error) {
    yield put(storiesActions.getStoriesError(error.message));
  }
}

function* watchGetStories() {
  yield takeEvery(storiesActions.GET_STORIES_REQUEST, getStories);
}

function* getFeed() {
  try {
    const feed = yield call(feedServices.getFeed);
    yield put(feedActions.getFeedSuccess(feed));
  } catch (error) {
    yield put(feedActions.getFeedError(error.message));
  }
}

function* watchGetFeed() {
  yield takeEvery(feedActions.GET_FEED_REQUEST, getFeed);
}

export default function* root() {
  yield all([
    // fork(getStories),
    // fork(getFeed),
    fork(watchGetStories),
    fork(watchGetFeed),
  ]);
}
