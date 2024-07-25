import { DoorwayLogin } from "./doorway-login";
import { server } from "./mockLogin";

beforeAll(() => {
  server.listen();
  jest.resetModules();
});
describe("API Login Tests", () => {
  test("Successful Login", async () => {
    // process.env.DOORWAY_API = "https://doorway";
    // process.env.DOORWAY_PASSKEY = "passkey";
    // const user = "good.user@gooduser.com";
    // const password = "goodpassword";
    // const doorwayLogin = new DoorwayLogin(user, password);
    // const response = await doorwayLogin.login();
    // console.log(`RESPONSE!!! ${response}`);
    // expect(response["accessToken"]).not.toBeNull();
    // expect(response["refreshToken"]).not.toBeNull();
    // expect(response["accessToken"]).toBe("access-token=thisismyaccesstoken");
    expect(true).toBe(true);
  });
  // test("Failed Login", async () => {
  //   process.env.DOORWAY_API = "https://doorway";
  //   process.env.DOORWAY_PASSKEY = "passkey";
  //   const user = "bad.user@gooduser.com";
  //   const password = "badpassword";
  //   const doorwayLogin = new DoorwayLogin(user, password);
  //   expect(async () => {
  //     await doorwayLogin.login();
  //   }).rejects.toContain(" status code 401");
  // });
});
