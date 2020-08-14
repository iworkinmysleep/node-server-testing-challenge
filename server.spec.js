const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
	test("that the env is set up right", () => {
		expect(process.env.DB_ENV).toBe("testing");
	});

	describe("get /", () => {
		test("should return 200 ok", () => {
			return request(server)
				.get("/")
				.then((res) => {
					expect(res.status).toBe(200);
				});
		});
	});
});
