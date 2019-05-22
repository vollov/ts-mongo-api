import log from "./logger";
import { authenticate, disconnect, lookup, register } from "./redis";
// test('register', async (done) => {
//     const res = await register('duocun:auth:dustin-id','dummy-value')
//     console.log('reg res=%j', res)
//     done();
//   });

beforeAll(async () => {
  const res = await register("duocun:auth:dustin-id", "dummy-value");
  log.debug("reg res=%j", res);
});

test("authenticate", async (done) => {
  const res = await authenticate("duocun:auth:dustin-id");
  log.debug("auth res=%j", res);
  expect(res).toBeTruthy();
  done();
});

test("lookup", async (done) => {
  const res = await lookup("duocun:auth:dustin-id");
  log.debug("lookup res=%j", res);
  expect(res).toBe("dummy-value");
  done();
});

afterAll(() => {
  disconnect();
});
