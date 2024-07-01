import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import mockListings from "./mockListings.json";
export const handlers = [
  http.get("http://doorway/listings", () => {
    return HttpResponse.json(mockListings);
  }),
];
export const server = setupServer(...handlers);
