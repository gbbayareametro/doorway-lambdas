import { DoorwayPaperApplications } from "./paper-applications";
import application from "./mockPaperAppMessage.json";

describe("Validation of Input", () => {
  test("successful validation", () => {
    const apps = new DoorwayPaperApplications(
      "myuser",
      "mypassword",
      "myurl",
      "mypasskey"
    );
    const appIsValid = apps.isValid(application);
    expect(appIsValid).toBeTruthy();
  });
  test("failed validation", () => {
    const apps = new DoorwayPaperApplications(
      "myuser",
      "mypassword",
      "myurl",
      "mypasskey"
    );
    expect(() => {
      apps.isValid({ "message:": "this is a bad message" });
    }).toThrow();
  });
});
describe("Transform input from paper application", () => {
  test("Successful Transformation", () => {
    const apps = new DoorwayPaperApplications(
      "myuser",
      "mypassword",
      "myurl",
      "mypasskey"
    );
    const transformed = apps.transform(application);
    expect(typeof transformed).toBe("object");
  });
});
