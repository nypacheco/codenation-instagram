import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';
import {
  faHeart as farHeart,
  faComment,
  faBookmark as farBookmark,
} from '@fortawesome/free-regular-svg-icons';

// import { getFeed } from '../../data/feed';

import './styles.css';

const RED = 'red';
const BLACK = 'black';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      saved: true,
      // feed: [],
      // isLoading: true,
    };

    this.handleHeartClick = this.handleHeartClick.bind(this);
    this.handleBookmarkClick = this.handleBookmarkClick.bind(this);
  }

  // componentDidMount() {
  //   getFeed().then((result) => {
  //     this.setState({
  //       feed: result,
  //       isLoading: false,
  //     });
  //   });
  // }

  handleHeartClick() {
    this.setState((state) => ({ liked: !state.liked }));
  }

  handleBookmarkClick() {
    this.setState((state) => ({ saved: !state.saved }));
  }

  render() {
    const { feed } = this.props;
    const { liked, saved } = this.state;

    const heartProps = {
      icon: liked ? faHeart : farHeart,
      color: liked ? RED : null,
    };

    const bookmarkProps = {
      icon: saved ? faBookmark : farBookmark,
      color: saved ? BLACK : null,
    };

    return (
      <div className="container">
        <section className="feed">
          {feed.map((post) => (
            <article key={post.id} className="post">
              <header className="post__header">
                <div className="user">
                  <a href="#" className="user__thumb">
                    <img src={post.profile} alt={post.alt} />
                  </a>

                  <a href="#" className="user__name">{post.name}</a>
                </div>

                <button type="button" className="post__context">
                  <i className="fas fa-ellipsis-h" />
                </button>
              </header>

              <figure className="post__figure">
                <img src={post.photo} alt="" />
              </figure>

              <nav className="post__controls">
                <button
                  type="button"
                  className="post__control"
                  onClick={this.handleHeartClick}
                >
                  <FontAwesomeIcon {...heartProps} />
                </button>

                <button type="button" className="post__control">
                  <FontAwesomeIcon icon={faComment} />
                </button>

                <button
                  type="button"
                  className="post__control"
                  onClick={this.handleBookmarkClick}
                >
                  <FontAwesomeIcon {...bookmarkProps} />
                </button>
              </nav>

              <div className="post__status">
                <div className="user">
                  <a href="#" className="user__thumb">
                    <img src={post.likes.first.profile} alt="" />
                  </a>

                  <span>
                    curtido por <a href="#">{post.likes.first.name}</a> e outras <a href="#">{post.likes.others} pessoas</a>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    );
  }
}

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
  ).isRequired,
};

// Feed.defaultProps = {
//   feed: [],
// };

// PropTypes.func
// PropTypes.bool
// PropTypes.node
// PropTypes.element ..

export default Feed;
