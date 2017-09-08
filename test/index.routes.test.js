const server = require("../server/index");
const request = require("supertest");

afterEach(() => {
  server.close();
});

describe("routes: index", () => {
  test("should respond as expected", async () => {
    const response = await request(server).get("/");
    expect(response.status).toEqual(200);
    expect(response.type).toEqual("application/json");
    expect(response.body.data).toEqual("Sending some JSON");
    expect(response.body.person).toHaveProperty("name");
    expect(response.body.person).toHaveProperty("lastname");
    expect(response.body.person).toHaveProperty("role");
    expect(response.body.person).toHaveProperty("age");
  });
});
