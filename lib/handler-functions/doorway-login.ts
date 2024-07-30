import axios from "axios";
import { instance as logger } from "./winston.logger";

export class DoorwayLogin {
  user: string;
  password: string;
  url: string;
  constructor(user: string, password: string, url: string) {
    this.user = user;
    this.password = password;
    this.url = url;
  }
  async login(): Promise<object> {
    const loginurl = `${this.url}/auth/login`;
    logger.info(`Logging into ${loginurl}`);
    try {
      const login = await axios.post(loginurl, {
        email: this.user,
        password: this.password,
      });
      logger.debug(login);

      let cookies: string[] = login.headers["set-cookie"]!;

      logger.info(`cookies type: ${typeof cookies}`);
      logger.debug(`${cookies}`);

      const accessToken = cookies!.find((token) =>
        token.startsWith("access-token"),
      );
      logger.debug(`Access Token: ${accessToken}`);
      const refreshToken = cookies!.find((token) =>
        token.startsWith("refresh-token"),
      );
      logger.debug(`RefreshToken: ${refreshToken}`);

      return { accessToken: accessToken!, refreshToken: refreshToken! };
    } catch (error) {
      logger.error("Error Logging In!");
      if (axios.isAxiosError(error)) {
        logger.error(`${error.code} attempting to login! ${error.message}`);
      } else {
        logger.error(`Unexpected Error!!!! ${error.message}`);
      }
      throw error;
    }
  }
}
