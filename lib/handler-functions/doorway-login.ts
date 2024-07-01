import { Api } from "../../api/Api";
import { instance as logger } from "./winston.logger";

export class DoorwayLogin {
  user: string;
  password: string;
  url: string;
  passkey: string;
  constructor() {
    this.user = process.env.DOORWAY_USER!;
    this.password = process.env.DOORWAY_PASSWORD!;
    this.url = process.env.DOORWAY_API!;
    this.passkey = process.env.DOORWAY_PASSKEY!;
    if (
      this.user === undefined ||
      this.password === undefined ||
      this.url === undefined ||
      this.passkey === undefined
    ) {
      throw "Environment Variables Not Set! Check DOORWAY_USER,DOORWAY_PASSWORD,DOORWAY_API and DOORWAY_PASSKEY to see if they are set properly";
    }
  }
  async login(): Promise<object> {
    const api = new Api({
      baseURL: this.url,
      headers: { passkey: this.passkey },
    });
    logger.info(`Logging into ${this.url}`);
    try {
      const login = await api.auth.login({
        email: this.user,
        password: this.password,
      });

      let cookies = login.headers["set-cookie"] as string[];
      if (typeof cookies == "string") {
        cookies = [cookies];
      }

      const accessToken = cookies.find((token) =>
        token.startsWith("access-token")
      );
      return {
        accessToken: accessToken,
        statusCode: login.status,
        statusText: login.statusText,
      };
    } catch (error) {
      logger.error("Error Logging In!");
      logger.error(error);
      throw ` Error Logging into ${this.url}: ${error} check the login secrets to make sure they are set properly`;
    }
  }
}
