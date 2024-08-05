import nock from "nock";
import mockSuccessfulLogin from "./mockSuccessfulLogin.json";
import mockFailedLogin from "./mockFailedLogin.json";
import mockAppsForListing from "./getApplicationsForListingMockResponse.json";

import mockListings from "./mockListings.json";
export const startDoorway = () => {
  const doorwayServer = nock("https://doorway");
  doorwayServer
    .post("/auth/login", {
      email: "good.user@gooduser.com",
      password: "goodpassword",
    })
    .reply(200, mockSuccessfulLogin, {
      "Set-Cookie": [
        "access-token=thisismyaccesstoken",
        "refresh-token=thisismyrefreshtoken",
      ],
    });
  doorwayServer
    .post("/auth/login", {
      email: "bad.user@gooduser.com",
      password: "badpassword",
    })
    .reply(401, mockFailedLogin);
  doorwayServer.get("/listings").reply(200, mockListings);
  doorwayServer.get("/applications").reply(200, mockAppsForListing);
  doorwayServer.persist();
};
