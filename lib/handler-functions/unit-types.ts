import axios from "axios";
import { UnitType } from "../../api/Api";
import { DoorwayLogin } from "./doorway-login";
import { instance } from "./winston.logger";

export class UnitTypeService {
  url: string;
  user: string;
  password: string;
  logger = instance;
  constructor(url: string, user: string, password: string) {
    this.url = url;
    this.user = user;
    this.password = password;
  }
  async getUnitTypes(): Promise<UnitType[]> {
    const login = new DoorwayLogin(this.user, this.password, this.url);
    this.logger.debug(`Logging into ${this.url}`);
    const tokens = await login.login();
    axios.defaults.withCredentials = true;
    this.logger.info("Getting Unit Types");
    const unitTypeResponse = await axios.get(`${this.url}/unitTypes`, {
      headers: { Cookie: `${tokens["accessToken"]};${tokens["refreshToken"]}` },
    });
    const unitTypes: UnitType[] = unitTypeResponse.data;
    return unitTypes;
  }
}
