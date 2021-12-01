const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2108-LSU-RM-WEB-PT";

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  const data = await response.json();
  return data;
};
