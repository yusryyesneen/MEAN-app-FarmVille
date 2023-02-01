//testing for register
const request = require("supertest");
const app = require("../app");
const User = require("../models/user");
const CryptoJS = require("crypto-js");

describe("POST /register", () => {
  afterEach(async () => {
    await User.deleteMany({});
  });

  it("should register a new user", async () => {
    const response = await request(app)
      .post("/register")
      .send({
        username: "testuser",
        email: "test@email.com",
        password: "password123",
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("username", "testuser");
    expect(response.body).toHaveProperty("email", "test@email.com");
    const decrypted = CryptoJS.AES.decrypt(
      response.body.password,
      process.env.PASS_SEC
    ).toString(CryptoJS.enc.Utf8);
    expect(decrypted).toBe("password123");
  });

  it("should return an error if required fields are missing", async () => {
    const response = await request(app)
      .post("/register")
      .send({
        username: "testuser",
      });
    expect(response.statusCode).toBe(500);
    expect(response.body).toHaveProperty("message");
  });
});

//testing for login
const request = require("supertest");
const app = require("../app");
const User = require("../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

describe("POST /login", () => {
  let user;

  beforeEach(async () => {
    user = new User({
      username: "testuser",
      email: "test@email.com",
      password: CryptoJS.AES.encrypt("password123", process.env.PASS_SEC).toString(),
    });
    await user.save();
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it("should log in a user", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        user_name: "testuser",
        password: "password123",
      });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("username", "testuser");
    expect(response.body).toHaveProperty("email", "test@email.com");
    expect(response.body).toHaveProperty("accessToken");
  });

  it("should return an error if user name is wrong", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        user_name: "nonexistent",
        password: "password123",
      });
    expect(response.statusCode).toBe(401);
    expect(response.body).toBe("Wrong User Name");
  });

  it("should return an error if password is wrong", async () => {
    const response = await request(app)
      .post("/login")
      .send({
        user_name: "testuser",
        password:
