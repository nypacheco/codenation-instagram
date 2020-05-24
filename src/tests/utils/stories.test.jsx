/* eslint-disable max-len */
import { enableFetchMocks } from 'jest-fetch-mock';

import { getStories } from '../../utils/stories';

enableFetchMocks();

describe('stories', () => {
  it('should json() data that was received when getStories is called', async () => {
    const story = {
      id: 1,
      image: 'https://viniciusvinna.netlify.app/assets//api-instagram/profiles/yoda/yoda-profile.jpg',
      alt: 'yoda-profile',
    };

    fetch.mockResponseOnce(JSON.stringify([story]));

    const data = await getStories();
    expect(data).toEqual([story]);
  });
});
