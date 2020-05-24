/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';

import Stories from '../components/Stories';

const story = {
  id: 1,
  image: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-profile.jpg',
  alt: 'yoda-profile',
};

const storyWithHasNew = {
  id: 2,
  image: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/bruce/bruce-profile.jpg',
  alt: 'bruce-profile',
  hasNew: true,
};

const stories = [story, storyWithHasNew];

describe('Stories', () => {
  it('should find alt to properly story', () => {
    const { getByAltText } = render(<Stories stories={stories} />);

    expect(getByAltText(story.alt)).toBeInTheDocument();
    expect(getByAltText(story.alt).src).toEqual(story.image);
  });

  it('should render the same amount of stories', () => {
    const { queryAllByTestId } = render(<Stories stories={stories} />);

    expect(queryAllByTestId('user-thumb')).toHaveLength(stories.length);
  });

  it('should not have "user__thumb--hasNew" when story hasNew prop is false', () => {
    const { getByTestId } = render(<Stories stories={stories} />);

    expect(getByTestId(`user-thumb-${story.id}`)).not.toHaveClass('user__thumb--hasNew');
  });

  it('should have "user__thumb--hasNew" className when story hasNew prop is true', () => {
    const { getByTestId } = render(<Stories stories={stories} />);

    expect(
      getByTestId(`user-thumb-${storyWithHasNew.id}`),
    ).toHaveClass('user__thumb--hasNew');
  });

  it('should not render "user-thumb" when stories prop is empty', () => {
    const { queryByTestId } = render(<Stories />);

    expect(queryByTestId('user-thumb')).not.toBeInTheDocument();
  });
});
