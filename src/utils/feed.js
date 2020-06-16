export const getFeed = () => fetch(`${process.env.REACT_APP_API}/posts`)
  .then((response) => response.json())
  .then((data) => data);
