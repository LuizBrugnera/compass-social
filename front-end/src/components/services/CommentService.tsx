export const CommentService = {
  getComments: async (token: string, postId: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/${postId}/comments`,
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
  getComment: async (token: string, postId: string, id: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/${postId}/comments${id}`,
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
  createComment: async (token: string, postId: string, comment: any) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify(comment),
      }
    );
    const data = await response.json();
    return data;
  },
  updateComment: async (
    token: string,
    id: string,
    postId: string,
    comment: any
  ) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/${postId}/comments${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify(comment),
      }
    );
    const data = await response.json();
    return data;
  },
  deleteComment: async (token: string, postId: string, id: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/posts/${postId}/comments${id}`,
      {
        method: "DELETE",
        headers: {
          "x-access-token": token,
        },
      }
    );
    const data = await response.json();
    return data;
  },
};
