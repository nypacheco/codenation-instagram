export const getStories = () => fetch('http://localhost:3001/stories')
  .then((response) => response.json())
  .then((data) => data);
