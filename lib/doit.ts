import { HttpResponse } from "msw";
import { Api, Listing, PaginatedListingDto } from "../api/Api";
import axios, { AxiosResponse } from "axios";

const api = new Api({
  baseURL: "https://backend.staging.housingbayarea.mtc.ca.gov",
  headers: { passkey: "staging-key" },
});

api.listings
  .list({ page: 1, limit: 10000 })
  .then((response: AxiosResponse<PaginatedListingDto, any>) => {
    response.data.items.forEach((listing: Listing) => {
      console.log(listing);
    });
  });
// import {
//   Listing,
//   PaginatedListingDto,
//   ServerConfiguration,
//   configureAuthMethods,
//   createConfiguration,
// } from "doorway-api";
// import { ListingsApi } from "../swagger/api";
// import { ListingsApiRequestFactory } from "../swagger/api/apis/ListingsApi";

// const listingInterface = new ListingsApi(
//   createConfiguration({
//     baseServer: new ServerConfiguration(
//       "https://backend.staging.housingbayarea.mtc.ca.gov",
//       {}
//     ),
//   })
// );

// listingInterface.list(1, 10000).then((listingDto: PaginatedListingDto) => {
//   listingDto.items.forEach((listing: Listing) => {
//     console.log(listing);
//   });
// });
