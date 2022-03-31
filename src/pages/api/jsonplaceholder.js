export const getPosts = async () => {
  try {
    const res = await fetch(
      "http://jsonplaceholder.typicode.com/posts?_limit=4"
    ).then((r) => r.json());
    return res;
  } catch (error) {
    console.warn(error);
  }
};

export const getPostById = async (params) => {
  try {
    const res = await fetch(
      `http://jsonplaceholder.typicode.com/posts/${params}`
    ).then((r) => r.json());
    return res;
  } catch (error) {
    console.warn(error);
  }
};
