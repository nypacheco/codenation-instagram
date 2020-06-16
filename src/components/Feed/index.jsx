import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

import LikeButton from './LikeButton';
import SaveButton from './SaveButton';

import './styles.css';

const Feed = ({ feed }) => (
  <div className="container">
    <section className="feed">
      {feed.map((post) => (
        <article key={post.id} className="post" data-testid="post">
          <header className="post__header">
            <div className="user">
              <div className="user__thumb">
                <img src={post.profile} alt={`${post.slug}-profile`} />
              </div>

              <div className="user__name">{post.name}</div>
            </div>

            <button type="button" className="post__context">
              <i className="fas fa-ellipsis-h" />
            </button>
          </header>

          <figure className="post__figure">
            <img src={post.photo} alt={`${post.slug}-figure`} />
          </figure>

          <nav className="post__controls">
            <LikeButton />

            <button type="button" className="post__control">
              <FontAwesomeIcon icon={faComment} />
            </button>

            <SaveButton />
          </nav>

          <div className="post__status">
            <div className="user">
              <div className="user__thumb">
                <img src={post.likes.first.profile} alt={`${post.likes.first.slug}-profile`} />
              </div>

              <span>
                curtido por <div>{post.likes.first.name}</div> e outras <div>{post.likes.others} pessoas</div>
              </span>
            </div>
          </div>
        </article>
      ))}
    </section>
  </div>
);

Feed.propTypes = {
  feed: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profile: PropTypes.string,
      name: PropTypes.string,
      photo: PropTypes.string,
      alt: PropTypes.string,
      likes: PropTypes.shape({
        first: PropTypes.shape({
          profile: PropTypes.string,
          name: PropTypes.string,
        }),
        others: PropTypes.number,
      }),
    }),
  ),
};

Feed.defaultProps = {
  feed: [],
};

export default Feed;
