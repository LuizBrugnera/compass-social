import request from "supertest";
import mongoose from "mongoose";
import app from "../../../../testServer";
import { postModel } from "../../models/Post";
import dotenv from "dotenv";
import { userModel } from "../../models/User";
dotenv.config();

beforeAll(async () => {
  const url = process.env.MONGODB_URL_TEST!;
  await mongoose.connect(url);

  app.listen(process.env.PORT || 3065, () => {
    console.log("TEST API server running....");
  });
});

afterAll(async () => {
  await postModel.deleteMany();
  await userModel.deleteMany();
  await mongoose.connection.close();
});

describe("Post Controller", () => {
  let postId: string;

  test("should create a new user and a new post", async () => {
    const responseUser = await request(app).post("/api/test/users").send({
      name: "testUserPost",
      user: "testUserPost",
      birthdate: new Date(),
      email: "testuserpost@testuserpost.com",
      password: "password",
      profile_photo: "https://www.test.url.1024x431.png",
    });

    const response = await request(app).post("/api/test/posts").send({
      _id: new mongoose.Types.ObjectId(),
      user: responseUser.body.response._id,
      post_date: new Date(),
      description: "test description",
      likes: 0,
      url_imagem: "https://www.test.url.1024x431.png",
      comments: [],
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.msg).toBe("Post created successfully");

    postId = response.body.response._id;
  });

  test("should update an existing post", async () => {
    const response = await request(app).put(`/api/test/posts/${postId}`).send({
      post_date: new Date(),
      description: "updated description",
      likes: 55,
      url_imagem: "https://www.test.url.updated.test2.testes.1024x431.png",
    });

    expect(response.statusCode).toBe(200);
  });

  test("should get all posts", async () => {
    const response = await request(app).get("/api/test/posts");

    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe("Posts found successfully");
    expect(Array.isArray(response.body.response)).toBeTruthy();
    expect(response.body.response.length).toBeGreaterThanOrEqual(1);
  });

  test("should get a post by id", async () => {
    const response = await request(app).get(`/api/test/posts/${postId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe("Post found successfully");
    expect(response.body.response._id).toBe(postId);
  });

  test("should delete a post", async () => {
    const response = await request(app).delete(`/api/test/posts/${postId}`);

    expect(response.statusCode).toBe(204);
  });
});
