/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const RED = 'red';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    const { liked } = this.props;

    if (!liked) return;
    this.setState({ liked });
  }

  handleOnClick() {
    this.setState((state) => ({ liked: !state.liked }));

    this.props.handleOnClick();
  }

  render() {
    const { liked } = this.state;

    const heartProps = {
      icon: liked ? faHeart : farHeart,
      color: liked ? RED : null,
    };

    return (
      <button
        type="button"
        className="post__control"
        onClick={this.handleOnClick}
      >
        <FontAwesomeIcon {...heartProps} />
      </button>
    );
  }
}

LikeButton.propTypes = {
  liked: PropTypes.bool,
  handleOnClick: PropTypes.func,
};

LikeButton.defaultProps = {
  liked: false,
  handleOnClick: () => {},
};

export default LikeButton;
