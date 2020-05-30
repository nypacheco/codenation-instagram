import React, { Component } from 'react';

import { getStories } from '../../utils/stories';
import { getFeed } from '../../utils/feed';

import './styles.css';

import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';
import Stories from '../Stories';
import Feed from '../Feed';
// import { ControlledForm, UncontrolledForm } from '../Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stories: [],
      feed: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    Promise.all([getStories(), getFeed()])
      .then((values) => {
        this.setState({
          stories: values[0],
          feed: values[1],
          isLoading: false,
        });
      });
  }

  render() {
    const { stories, feed, isLoading } = this.state;

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
  }
}

export default App;
