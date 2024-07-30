import axios from "axios";
import { DoorwayLogin } from "./doorway-login";
import { instance } from "./winston.logger";

export class DoorwayInterface {
  url: string;
  passkey: string;
  user: string;
  password: string;
  logger: typeof instance;
  doorwayLogin: DoorwayLogin;
  constructor(user: string, password: string, url: string, passkey: string) {
    this.url = `${url}/applications`;
    this.passkey = passkey;
    this.user = user;
    this.password = password;
    this.logger = instance;
    this.doorwayLogin = new DoorwayLogin(user, password, url);
  }
  async get<T = any>(endpoint: string, query?: object): Promise<T> {
    this.logger.info("Logging into Doorway");
    let data: T;
    try {
      const tokens = await this.doorwayLogin.login();
      const getURL = `${this.url}${endpoint}`;
      axios.defaults.withCredentials = true;
      try {
        const response = await axios.get(getURL, {
          headers: {
            Cookie: `${tokens["accessToken"]};${tokens["refreshToken"]}`,
          },
          params: query != undefined ? query : "",
        });
        if (response.data.items != undefined) {
          data = response.data.items;
        } else {
          data = response.data;
        }
      } catch (getError) {
        if (axios.isAxiosError(getError)) {
          this.logger.error(
            `Get from ${getURL} failed with an error code of ${getError.code}`,
          );
          this.logger.error(getError.message);
          throw getError;
        }
      }
    } catch (error) {
      this.logger.error("Problems logging into Doorway!");
      this.logger.error(error);
      throw error;
    }
    return data!;
  }
}
