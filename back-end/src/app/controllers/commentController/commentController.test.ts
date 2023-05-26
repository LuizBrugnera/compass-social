import request from "supertest";
import mongoose from "mongoose";

import app from "../../../../testServer";

import { postModel } from "../../models/Post";
import { commentModel } from "../../models/Comment";
import { userModel } from "../../models/User";

import dotenv from "dotenv";
dotenv.config();

beforeAll(async () => {
  const url = process.env.MONGODB_URL_TEST_2!;
  await mongoose.connect(url);

  app.listen(process.env.PORT || 3075, () => {
    console.log("TEST API server running....");
  });
});

afterAll(async () => {
  await postModel.deleteMany();
  await userModel.deleteMany();
  await commentModel.deleteMany();
  await mongoose.connection.close();
});

describe("Comment Controller", () => {
  let commentId: string;
  let postId: string;

  test("should create a new user, a new post and a new comment", async () => {
    const responseUser = await request(app).post("/api/test/users").send({
      name: "testUserPostComment",
      user: "testUserPostComment",
      birthdate: new Date(),
      email: "testuserpostcomment@testuserpostcomment.com",
      password: "password",
      profile_photo: "https://www.test.url.1024x431.png",
    });

    const responsePost = await request(app).post("/api/test/posts").send({
      user: responseUser.body.response._id,
      post_date: new Date(),
      description: "test description post comment",
      likes: 0,
      url_imagem: "https://www.test.url.1024x431.png",
      comments: [],
    });

    postId = responsePost.body.response._id;

    const response = await request(app)
      .post(`/api/test/posts/${postId}/comments`)
      .send({
        user: responseUser.body.response._id,
        comment: "test comment",
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.msg).toBe("Comment created successfully");

    commentId = response.body.response._id;
  });

  test("should update an existing comment", async () => {
    const response = await request(app)
      .put(`/api/test/posts/${postId}/comments/${commentId}`)
      .send({
        comment: "test comment updated",
      });
    console.log(response.body);
    expect(response.statusCode).toBe(200);
  });

  test("should get all comments of a post", async () => {
    const response = await request(app).get(
      `/api/test/posts/${postId}/comments`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe("Comments found successfully");
    expect(Array.isArray(response.body.response)).toBeTruthy();
    expect(response.body.response.length).toBeGreaterThanOrEqual(1);
    console.log(response.body);
  });

  test("should get a comment of a post by id", async () => {
    const response = await request(app).get(
      `/api/test/posts/${postId}/comments/${commentId}`
    );

    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe("Comment found successfully");
    expect(response.body.response._id).toBe(commentId);
    console.log(response.body);
  });

  test("should delete a comment", async () => {
    const response = await request(app).delete(
      `/api/test/posts/${postId}/comments/${commentId}`
    );

    expect(response.statusCode).toBe(204);
    console.log(response.body);
  });
});
