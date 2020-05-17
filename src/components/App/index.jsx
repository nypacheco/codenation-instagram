import React, { Component } from 'react';

import './styles.css';

import Header from '../Header';
import Stories from '../Stories';
import Feed from '../Feed';

import { getStories } from '../../data/stories';
import { getFeed } from '../../data/feed';

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
        {isLoading
          ? <span>Loading ...</span>
          : (
            <>
              <Stories stories={stories} />
              <Feed feed={feed} />
            </>
          )}

      </div>
    );
  }
}

// <> = React.Fragment

export default App;
