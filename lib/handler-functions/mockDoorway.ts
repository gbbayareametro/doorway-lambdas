import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import mockSuccessfulLogin from "./mockSuccessfulLogin.json";
import mockFailedLogin from "./mockFailedLogin.json";
import { Headers } from "headers-polyfill";
import mockListings from "./mockListings.json";
export const handlers = [
  http.post("https://doorway/auth/login", async ({ request }) => {
    const requestjson = (await request.json())!;
    const userid = requestjson["email"];
    const password = requestjson["password"];

    if (userid == "good.user@gooduser.com" && password == "goodpassword") {
      let h = new Headers();
      h.append("Set-Cookie", "access-token=thisismyaccesstoken");
      h.append("Set-Cookie", "refresh-token=thisismyrefreshtoken");
      let res = HttpResponse.json(mockSuccessfulLogin, {
        status: 200,
        headers: h,
      });
      return res;
    } else {
      let res = HttpResponse.json(mockFailedLogin, {
        status: 401,
      });

      return res;
    }
  }),
  http.get("http://doorway/listings", () => {
    return HttpResponse.json(mockListings);
  }),
];
export const server = setupServer(...handlers);
