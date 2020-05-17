import yodaProfile from '../assets/images/yoda-profile.jpg';
import yodaPost from '../assets/images/yoda-1.jpg';
import dominoProfile from '../assets/images/domino-profile.jpg';

const feed = [
  {
    id: 1,
    profile: yodaProfile,
    name: 'Mestre Yoda',
    photo: yodaPost,
    alt: 'Mestre Yoda',
    likes: {
      first: {
        profile: dominoProfile,
        name: 'Domino',
      },
      others: 7,
    },
  },
  {
    id: 2,
    profile: yodaProfile,
    name: 'Mestre Yoda',
    photo: yodaPost,
    alt: 'Mestre Yoda',
    likes: {
      first: {
        profile: dominoProfile,
        name: 'Domino',
      },
      others: 7,
    },
  },
];

export const getFeed = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(feed);
  }, 4000);
});
