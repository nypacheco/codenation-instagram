/* eslint-disable max-len */
import React from 'react';
import { render, wait } from '@testing-library/react';

import App from '../../components/App';

const mockStory = {
  id: 1,
  image: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-profile.jpg',
  alt: 'yoda-profile',
};

const mockFeed = {
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
};

jest.mock('../../utils/stories', () => ({ getStories: jest.fn(() => [mockStory]) }));
jest.mock('../../utils/feed', () => ({ getFeed: jest.fn(() => [mockFeed]) }));

describe('App', () => {
  it('should find loading text when component is rendered', async () => {
    const { getByText, queryByText } = render(<App />);

    expect(getByText(/loading/i)).toBeInTheDocument();

    await wait();

    expect(queryByText(/loading/i)).not.toBeInTheDocument();
  });

  it('should find instagram-content when component have stories and feed data', async () => {
    const { findByTestId } = render(<App />);

    expect(await findByTestId('instagram-content')).toBeInTheDocument();
  });
});
