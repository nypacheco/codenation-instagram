/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons';

const BLACK = 'black';

class SaveButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      saved: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    const { saved } = this.props;

    if (!saved) return;
    this.setState({ saved });
  }

  handleOnClick() {
    this.setState((state) => ({ saved: !state.saved }));

    this.props.handleOnClick();
  }

  render() {
    const { saved } = this.state;

    const bookmarkProps = {
      icon: saved ? faBookmark : farBookmark,
      color: saved ? BLACK : null,
    };

    return (
      <button
        type="button"
        className="post__control"
        onClick={this.handleOnClick}
      >
        <FontAwesomeIcon {...bookmarkProps} />
      </button>
    );
  }
}

SaveButton.propTypes = {
  saved: PropTypes.bool,
  handleOnClick: PropTypes.func,
};

SaveButton.defaultProps = {
  saved: false,
  handleOnClick: () => { },
};

export default SaveButton;
