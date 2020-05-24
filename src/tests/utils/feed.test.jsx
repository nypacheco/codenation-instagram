/* eslint-disable max-len */
import { enableFetchMocks } from 'jest-fetch-mock';

import { getFeed } from '../../utils/feed';

enableFetchMocks();

describe('feed', () => {
  it('should json() data that was received when getFeed is called', async () => {
    const post = {
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

    fetch.mockResponseOnce(JSON.stringify([post]));

    const data = await getFeed();
    expect(data).toEqual([post]);
  });
});
