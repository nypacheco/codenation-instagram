/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import * as REACT_REDUX from 'react-redux';

import Home from '../../containers/Home';

const stories = {
  loading: true,
  error: null,
  stories: [
    {
      id: 1,
      image: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-profile.jpg',
      alt: 'yoda-profile',
    },
  ],
};

const feed = {
  loading: true,
  error: null,
  feed: [
    {
      id: 1,
      profile: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-profile.jpg',
      name: 'Mestre Yoda',
      photo: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-1.jpg',
      likes: {
        first: {
          profile: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/domino/domino-profile.jpg',
          name: 'Domino',
        },
        others: 7,
      },
    },
  ],
};

REACT_REDUX.useDispatch = () => jest.fn();

describe('Home', () => {
  it('should find loading text when component is rendered', async () => {
    REACT_REDUX.useSelector = jest.fn()
      .mockReturnValueOnce(stories)
      .mockReturnValueOnce(feed);

    const { getByText } = render(<Home />);

    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  it('should find instagram-content when component have stories and feed data', async () => {
    REACT_REDUX.useSelector = jest.fn()
      .mockReturnValueOnce({ ...stories, loading: false })
      .mockReturnValueOnce({ ...feed, loading: false });

    const { findByTestId, queryByText } = render(<Home />);

    expect(queryByText(/loading/i)).not.toBeInTheDocument();
    expect(await findByTestId('instagram-content')).toBeInTheDocument();
  });
});
