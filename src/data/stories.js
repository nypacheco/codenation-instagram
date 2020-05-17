import yodaProfile from '../assets/images/yoda-profile.jpg';
import gamoraProfile from '../assets/images/gamora-profile.jpg';
import blackPantherProfile from '../assets/images/black-panther-profile.jpg';

const stories = [
  {
    id: 1,
    image: yodaProfile,
    alt: 'yodaProfile',
  },
  {
    id: 2,
    image: gamoraProfile,
    alt: 'gamoraProfile',
    hasNew: true,
  },
  {
    id: 3,
    image: blackPantherProfile,
    alt: 'blackPantherProfile',
  },
];

export const getStories = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(stories);
  }, 2000);
});
