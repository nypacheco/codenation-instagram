import React, { Component } from 'react';

import { getStories } from '../../data/stories';
import { getFeed } from '../../data/feed';

import './styles.css';

import Header from '../Header';
import Stories from '../Stories';
import Feed from '../Feed';
import ErrorBoundary from '../ErrorBoundary';
import ControlledForm from '../ControlledForm';
import UncontrolledForm from '../UncontrolledForm';

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
      <div>
        <Header />
        {/* <UncontrolledForm /> */}
        {/* <ControlledForm /> */}
        { isLoading
          ? <span>Loading ...</span>
          : (
            <>
              <ErrorBoundary>
                <Stories stories={stories} />
                <Feed feed={feed} />
              </ErrorBoundary>
            </>
          )}
      </div>
    );
  }
}

// <> = React.Fragment

export default App;
