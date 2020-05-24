/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './styles.css';

class Stories extends Component {
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
                data-testid={`user-thumb-${story.id}`}
              >
                <span className="user__thumb__wrapper" data-testid="user-thumb">
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
  })),
};

Stories.defaultProps = {
  stories: [],
};

export default Stories;
