import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getStories } from '../../actions/stories';
import { getFeed } from '../../actions/feed';

import './styles.css';

import Header from '../../components/Header';
import ErrorBoundary from '../../components/ErrorBoundary';
import Stories from '../../components/Stories';
import Feed from '../../components/Feed';

const Home = () => {
  const { loading: loadingStories, stories } = useSelector((state) => state.stories);
  const { loading: loadingFeed, feed } = useSelector((state) => state.feed);

  const dispatch = useDispatch();
  const getStoriesAction = bindActionCreators(getStories, dispatch);
  const getFeedAction = bindActionCreators(getFeed, dispatch);

  useEffect(() => {
    getStoriesAction();
    getFeedAction();
  }, []);

  const loading = loadingStories && loadingFeed;

  return (
    <>
      <Header />
      {loading
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


export default Home;
