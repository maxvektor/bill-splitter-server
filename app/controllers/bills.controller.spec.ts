/* eslint import/order: 0 import/first:0 */

/**
 * jest.mock should apear in the top of the file
 * @see https://github.com/kulshekhar/ts-jest/wiki/Troubleshooting
 */
const fireMock = require("../../mocks/firestoreMock");
const MockFirebase = require("mock-cloud-firestore");

jest.mock("../firebase", () => ({
  default: new MockFirebase(fireMock).firestore()
}));

import * as request from "supertest";
import app, { server } from "../server";

describe("bills endpoints", () => {
  afterAll(done => {
    server.close(done);
    jest.resetModules();
  });

  describe("GET /bills", () => {
    test("should return data for bills", done => {
      request(app)
        .get("/bills")
        .expect(200)
        .then(res => {
          expect(JSON.parse(res.text)).toEqual([
            { id: "bills_doc_1", data: { hello: "bills_doc_1" } },
            { id: "bills_doc_2", data: { hello: "bills_doc_2" } },
            { id: "bills_doc_3", data: { hello: "bills_doc_3" } }
          ]);
          done();
        });
    });
  });

  describe("GET /bills/id", () => {
    test("should return data for specific bill", done => {
      request(app)
        .get("/bills/bills_doc_1")
        .expect(200)
        .then(res => {
          expect(JSON.parse(res.text)).toEqual({
            id: "bills_doc_1",
            data: { hello: "bills_doc_1" }
          });
          done();
        });
    });
  });

  describe("POST /bills", () => {
    let res;
    let responseObject: any;

    beforeAll(async () => {
      res = await request(app)
        .post("/bills")
        .send({ value: "value", userId: 2 });

      responseObject = JSON.parse(res.text);
    });

    test("shoud return posted fields", done => {
      expect(responseObject).toMatchObject({
        data: { value: "value", userId: 2 }
      });

      done();
    });

    test("shoud return id for new bill", done => {
      expect(typeof responseObject.id).toBe("string");

      done();
    });
  });
});
