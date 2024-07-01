import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import mockSuccessfulLogin from "./mockSuccessfulLogin.json";
import mockFailedLogin from "./mockFailedLogin.json";
import { Headers } from "headers-polyfill";
export const handlers = [
  http.post("https://doorway/auth/login", async ({ request }) => {
    const requestjson = (await request.json())!;
    const userid = requestjson["email"];
    const password = requestjson["password"];
    if (userid == "good.user@gooduser.com" && password == "goodpassword") {
      let res = HttpResponse.json(mockSuccessfulLogin, {
        status: 200,
        headers: {
          "Set-Cookie": "access-token=thisismyaccesstoken",
        },
      });
      return res;
    } else {
      let res = HttpResponse.json(mockFailedLogin, {
        status: 401,
      });

      return res;
    }
  }),
];
export const server = setupServer(...handlers);
