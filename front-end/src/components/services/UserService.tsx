import defaultPhoto from "../../assets/default_photo.png";

export const UserService = {
  getUsers: async (token: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/users/`,
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
  getUser: async (token: string, id: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/users/${id}`,
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
  createUser: async (user: any) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/users/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    return data;
  },
  updateUser: async (token: string, id: string, user: any) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    return data;
  },
  deleteUser: async (token: string, id: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/users/${id}`,
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
  getUserAndFillPhoto: async (token: string, id: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/users/${id}`,
      {
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      }
    );
    const data = await response.json();
    const user = data.response;

    if (user.profile_photo === "") user.profile_photo = defaultPhoto;
     
    return user;
  },
  getUsersAndFillPhoto : async (token: string) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/users/`,
      {
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      }
    );

    const data = await response.json();
    let users = data.response;
    return users.map((user: any) => {
      if (user.profile_photo === "") user.profile_photo = defaultPhoto;
      return user;
    });

  }

};
