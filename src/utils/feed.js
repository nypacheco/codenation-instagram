export const getFeed = () => fetch('http://localhost:3001/posts')
  .then((response) => response.json())
  .then((data) => data);
