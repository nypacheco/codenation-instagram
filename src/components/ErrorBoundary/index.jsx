import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    if (error) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error.toString()}
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
