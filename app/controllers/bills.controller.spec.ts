import * as request from "supertest";
import app, { server } from "../server";

xdescribe("GET /bills", () => {
  afterAll(done => {
    server.close(done);
  });

  test("should data for bills", done =>
    request(app)
      .get("/bills")
      .expect(200)
      .then(res => {
        expect(res.text).toBe("Hello, World!");
        done();
      }));
});
