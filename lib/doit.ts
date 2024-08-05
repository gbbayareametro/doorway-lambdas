import { object } from "joi";
import { json } from "stream/consumers";

const applicant = {
  accessibility: null,
  name: "glenn",
};
if (JSON.stringify(applicant.accessibility) == "null") {
  console.log("I GOT HERE");
} else {
  console.log("OOPS!");
  console.log(applicant.accessibility);
}
