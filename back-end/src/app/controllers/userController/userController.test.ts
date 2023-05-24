import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../../../testServer';
import { userModel } from '../../models/User';
import dotenv from "dotenv"; 
dotenv.config();

beforeAll(async () => {
  const url = process.env.MONGODB_URL_TEST!;
  await mongoose.connect(url);

  app.listen(process.env.PORT || 3055, () => {
    console.log('Servidor da API rodando....');
})
});

afterAll(async () => {
  await userModel.deleteMany();
  await mongoose.connection.close();
});

describe('User Controller', () => {
  let userId : string;

  test('should create a new user', async () => {
    const response = await request(app)
      .post('/api/test/user')
      .send({
        name: 'test',
        user: 'testuser',
        birthdate: new Date(),
        email: 'test@test.com',
        password: 'password',
        profile_photo: 'https://www.test.url.1024x431.png',
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.msg).toBe('User created successfully');

    userId = response.body.response._id;
  });

  test('should update an existing user', async () => {
    const response = await request(app)
      .put(`/api/test/user/${userId}`)
      .send({
        name: 'updatedName',
        user: 'updatedUser',
        birthdate: new Date(),
        email: 'updatedEmail@test.com',
        password: 'updatedPassword',
        profile_photo: 'https://www.updated.jpg',
      });

    expect(response.statusCode).toBe(200);
  });

  test('should get all users', async () => {
    const response = await request(app).get('/api/test/user');

    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe('Users found successfully');
    expect(Array.isArray(response.body.response)).toBeTruthy();
    expect(response.body.response.length).toBeGreaterThanOrEqual(1);
  });

  test('should get a user by id', async () => {
    const response = await request(app).get(`/api/test/user/${userId}`);

    expect(response.statusCode).toBe(201);
    expect(response.body.msg).toBe('User found successfully');
    expect(response.body.response._id).toBe(userId);
  });

  test('should delete a user', async () => {
    const response = await request(app).delete(`/api/test/user/${userId}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe('User deleted successfully');
    expect(response.body.deleteUser._id).toBe(userId);
  });
});