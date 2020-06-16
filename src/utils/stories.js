export const getStories = () => fetch(`${process.env.REACT_APP_API}/stories`)
  .then((response) => response.json())
  .then((data) => data);
