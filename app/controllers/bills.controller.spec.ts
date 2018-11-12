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

describe("GET /bills", () => {
  afterAll(done => {
    server.close(done);
  });

  test("should data for bills", done =>
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
      }));
});
