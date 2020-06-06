import {
  all, fork, takeEvery, call, put,
} from 'redux-saga/effects';

import * as storiesActions from '../actions/stories';
import * as storiesServices from '../utils/stories';

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

export default function* root() {
  yield all([
    fork(watchGetStories),
  ]);
}
