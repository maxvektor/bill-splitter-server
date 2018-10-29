import * as request from "supertest";
import app, {server} from "../server";

describe("GET /welcome", () => {
    afterAll(done => {
        server.close(done);
    });
    
  test("should return 200 OK", done =>
    request(app)
      .get("/welcome")
      .expect(200)
      .then(res => {
        expect(res.text).toBe("Hello, World!");
        done();
      }));

  test("should return 200 OK", done =>
    request(app)
      .get("/welcome/drug")
      .expect(200)
      .then(res =>{
        expect(res.text).toBe("Hello, drug");
        done();
      }));
});
