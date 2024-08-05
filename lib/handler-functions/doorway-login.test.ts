import { DoorwayLogin } from "./doorway-login";
import { startDoorway } from "./mockDoorway";

beforeAll(() => {
  startDoorway();
});
describe("API Login Tests", () => {
  test("Successful Login", async () => {
    const login = new DoorwayLogin(
      "good.user@gooduser.com",
      "goodpassword",
      "https://doorway"
    );
    const tokens = await login.login();
    expect(tokens["accessToken"]).toBe("access-token=thisismyaccesstoken");
  });
  test("Failed Login", async () => {
    const url = "https://doorway";
    const passkey = "passkey";
    const user = "bad.user@gooduser.com";
    const password = "badpassword";
    const doorwayLogin = new DoorwayLogin(user, password, url);
    expect(async () => {
      await doorwayLogin.login();
    }).rejects.toContain(" status code 401");
  });
});
