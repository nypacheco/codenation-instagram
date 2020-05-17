/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';

class Stories extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     isLoading: true,
  //     stories: [],
  //   };
  // }

  // componentDidMount() {
  //   getStories().then((result) => {
  //     this.setState({
  //       stories: result,
  //       isLoading: false,
  //     });
  //   });
  // }

  render() {
    const { stories } = this.props;

    return (
      <div className="container">
        <section className="stories">
          <div className="stories__container">
            {stories.map((story) => (
              <a
                key={story.id}
                href="#"
                className={classnames(
                  'user__thumb', {
                    'user__thumb--hasNew': story.hasNew,
                  },
                )}
              >
                <span className="user__thumb__wrapper">
                  <img src={story.image} alt={story.alt} />
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>
    );
  }
}

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    alt: PropTypes.string,
  })).isRequired,
};

export default Stories;
