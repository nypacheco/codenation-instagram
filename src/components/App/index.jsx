import React, { useReducer, useEffect } from 'react';

import { getStories } from '../../utils/stories';
import { getFeed } from '../../utils/feed';

import './styles.css';

import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';
import Stories from '../Stories';
import Feed from '../Feed';

const initialState = {
  stories: [],
  feed: [],
  isLoading: true,
};

const reducer = (state, action) => {
  if (action.type === 'getData') {
    return {
      stories: action.payload.stories,
      feed: action.payload.feed,
      isLoading: action.payload.isLoading,
    };
  }
  return initialState;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    Promise.all([getStories(), getFeed()])
      .then((values) => {
        dispatch({
          type: 'getData',
          payload: {
            stories: values[0],
            feed: values[1],
            isLoading: false,
          },
        });
      });
  }, []);

  const { isLoading, stories, feed } = state;

  return (
    <>
      <Header />
      {/* <UncontrolledForm />
          <ControlledForm /> */}
      { isLoading
        ? <span>Loading ...</span>
        : (
          <div data-testid="instagram-content">
            <ErrorBoundary>
              <Stories stories={stories} />
              <Feed feed={feed} />
            </ErrorBoundary>
          </div>
        )}
    </>


  );
};


export default App;
