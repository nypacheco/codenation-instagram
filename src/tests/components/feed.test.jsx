/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';

import Feed from '../../components/Feed';

const post = {
  id: 1,
  profile: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-profile.jpg',
  name: 'Mestre Yoda',
  slug: 'mestre-yoda',
  photo: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-1.jpg',
  likes: {
    first: {
      profile: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/domino/domino-profile.jpg',
      name: 'Domino',
      slug: 'domino',
    },
    others: 7,
  },
};

const feed = [post];

describe('Feed', () => {
  it('should render profile image correctly when feed prop has some post', () => {
    const { getByAltText } = render(<Feed feed={feed} />);

    expect(getByAltText(`${post.slug}-profile`)).toBeInTheDocument();
    expect(getByAltText(`${post.slug}-profile`).src).toEqual(post.profile);
  });

  it('should render profile image of first follower that have liked post', () => {
    const { getByAltText } = render(<Feed feed={feed} />);

    expect(getByAltText(`${post.likes.first.slug}-profile`)).toBeInTheDocument();
    expect(getByAltText(`${post.likes.first.slug}-profile`).src).toEqual(post.likes.first.profile);
  });

  it('should render post photo correctly', () => {
    const { getByText, getByAltText } = render(<Feed feed={feed} />);

    expect(getByText(post.likes.first.name)).toBeInTheDocument();
    expect(getByAltText(`${post.slug}-figure`)).toBeInTheDocument();
    expect(getByAltText(`${post.slug}`).src).toEqual(post.photo);
  });

  it('should render the amount of likes correctly', () => {
    const { getByText } = render(<Feed feed={feed} />);

    expect(getByText(`${post.likes.others} pessoas`)).toBeInTheDocument();
  });

  it('should render the same amount of feed', () => {
    const { queryAllByTestId } = render(<Feed feed={feed} />);

    expect(queryAllByTestId('post')).toHaveLength(feed.length);
  });
});
