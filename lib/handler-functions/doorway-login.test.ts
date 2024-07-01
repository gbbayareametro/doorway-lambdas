import { DoorwayLogin } from "./doorway-login";
import { server } from "./mockLogin";

beforeAll(() => {
  server.listen();
  jest.resetModules();
});
describe("API Login Tests", () => {
  test("Successful Login", async () => {
    process.env.DOORWAY_API = "https://doorway";
    process.env.DOORWAY_USER = "good.user@gooduser.com";
    process.env.DOORWAY_PASSWORD = "goodpassword";
    process.env.DOORWAY_PASSKEY = "passkey";
    const doorwayLogin = new DoorwayLogin();
    const response = await doorwayLogin.login();

    expect(response["accessToken"]).not.toBeNull();
    expect(response["refreshToken"]).not.toBeNull;
  });
  test("Failed Login", async () => {
    process.env.DOORWAY_API = "https://doorway";
    process.env.DOORWAY_USER = "bad.user@baduser.com";
    process.env.DOORWAY_PASSWORD = "badpassword";
    process.env.DOORWAY_PASSKEY = "passkey";
    const doorwayLogin = new DoorwayLogin();
    expect(async () => {
      await doorwayLogin.login();
    }).rejects.toContain("status code 401");
  });
});
