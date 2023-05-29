export const PostService = {
  getPosts: async (token: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/`,
      {
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      }
    );

    const data = await response.json();
    return data;
  },
  getPost: async (token: string, id: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/${id}`,
      {
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      }
    );
    const data = await response.json();
    return data;
  },
  createPost: async (token: string, post: any) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify(post),
      }
    );
    console.log(post)
    const data = await response.json();
    return data;
  },
  updatePost: async (token: string, id: string, post: any) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify(post),
      }
    );
    const data = await response.json();
    return data;
  },
  deletePost: async (token: string, id: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          "x-access-token": token,
        },
      }
    );
    const data = await response.json();
    return data;
  }
};
