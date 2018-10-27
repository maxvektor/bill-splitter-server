import * as request from "supertest";
import app from "../server";

describe("GET /welcome", () => {
  test("should return 200 OK", () => request(app)
      .get("/welcome")
      .expect(200)
      .then(res => expect(res.text).toBe("Hello, World!")));

  test("should return 200 OK", () => request(app)
      .get("/welcome/drug")
      .expect(200)
      .then(res => expect(res.text).toBe("Hello, drug")));
});
