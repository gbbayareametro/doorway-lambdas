import parsePhoneNumber, { E164Number, PhoneNumber } from "libphonenumber-js";
import { DoorwayLogin } from "./doorway-login";
import { instance } from "./winston.logger";
import Fuse, { FuseResult } from "fuse.js";

import axios, { AxiosResponse } from "axios";
import { Validator } from "jsonschema";
import * as fs from "fs";
import * as EmailValidator from "email-validator";
import {
  AccessibilityUpdate,
  AddressCreate,
  AlternateContactRelationship,
  AlternateContactUpdate,
  ApplicantUpdate,
  ApplicationCreate,
  ApplicationMultiselectQuestion,
  ApplicationStatusEnum,
  ApplicationSubmissionTypeEnum,
  DemographicUpdate,
  HouseholdMemberUpdate,
  IdDTO,
  UnitType,
  ListingMultiselectQuestion,
  HouseholdMemberRelationship,
  YesNoEnum,
  IncomePeriodEnum,
  LanguagesEnum,
} from "../../api/Api";
import { UnitTypeService } from "./unit-types";
import { ListingsInterface } from "./listings";
import { object } from "joi";

export class DoorwayPaperApplications {
  doorwayLogin: DoorwayLogin;
  url: string;
  passkey: string;
  maxListings: number;
  logger: typeof instance;
  user: string;
  password: string;
  unitTypeService: UnitTypeService;
  listingsService: ListingsInterface;

  constructor(user: string, password: string, url: string, passkey: string) {
    this.url = `${url}/applications`;
    this.passkey = passkey;
    this.user = user;
    this.password = password;
    this.logger = instance;
    this.doorwayLogin = new DoorwayLogin(user, password, url);
    this.unitTypeService = new UnitTypeService(url, user, password);
    this.listingsService = new ListingsInterface(user, password, url, passkey);
  }
  async submit(
    application: PaperApplication
  ): Promise<AxiosResponse<any, any>> {
    this.logger.info("Submittng paper Application to Doorway API");
    this.logger.debug(application);
    axios.defaults.withCredentials = true;
    const tokens = await this.doorwayLogin.login();
    this.logger.info(
      `Submitting application for listing ${application.listings.id}`
    );
    const response = axios.post(this.url, application, {
      headers: {
        Cookie: `${tokens["accessToken"]};${tokens["refreshToken"]}`,
        //passkey: this.passkey,
      },
    });

    return response;
  }
  isValid(application: object): boolean {
    const appSchema = JSON.parse(
      fs.readFileSync("./lib/handler-functions/applicationSchema.json", "utf8")
    );

    const validator = new Validator();
    const result = validator.validate(application, appSchema);
    if (!result.valid) {
      this.logger.error("Error validating input. See messages below");
      this.logger.error(result.errors);
      throw result.errors;
    }
    return result.valid;
  }
  async transform(inputJson): Promise<PaperApplication> {
    this.logger.debug(inputJson);
    const paperApp = new PaperApplication();
    paperApp.applicationsMailingAddress = inputJson.applicationsMailingAddress;
    paperApp.applicationsAlternateAddress =
      inputJson.applicationsAlternateAddress;
    paperApp.income = inputJson.income;
    if (inputJson.incomeVouchers.Section8 == "True") {
      paperApp.incomeVouchers?.push("issuedVouchers");
    }
    if (inputJson.incomeVouchers.rentalAssistance == "True") {
      paperApp.incomeVouchers?.push("rentalAssistance");
    }
    if (paperApp.incomeVouchers?.length == 0) {
    }
    paperApp.incomePeriod = IncomePeriodEnum.PerYear;
    paperApp.submissionDate = inputJson.submissionDate;

    if (this.isValid(inputJson)) {
      if (inputJson["contactByEmail"] == "True") {
        paperApp.contactPreferences.push("email");
      }
      if (inputJson["contactByPhone"] == "True") {
        paperApp.contactPreferences.push("phone");
      }
      if (inputJson["contactByLetter"] == "True") {
        paperApp.contactPreferences.push("letter");
      }
      if (inputJson["contactByText"] == "True") {
        paperApp.contactPreferences.push("text");
      }
      const applicant = paperApp.applicant;
      applicant.firstName = inputJson.applicant.firstName;
      applicant.middleName = inputJson.applicant.middleName;
      applicant.lastName = inputJson.applicant.lastName;
      const additionalPhone: PhoneNumber | undefined = parsePhoneNumber(
        inputJson.applicant.phoneNumber,
        "US"
      );
      paperApp.additionalPhoneNumber =
        additionalPhone != undefined ? additionalPhone.formatNational() : "";
      this.logger.debug(
        `Additional Phone Number: ${paperApp.additionalPhoneNumber}`
      );

      if (paperApp.additionalPhoneNumber != "") {
        paperApp.additionalPhoneNumber = inputJson.additionalPhone;
        paperApp.additionalPhone = true;
        if (inputJson.additionalPhoneIsMobile == "True") {
          paperApp.additionalPhoneNumberType = "cell";
        } else if (inputJson.additionalPhoneIsWork == "True") {
          paperApp.additionalPhoneNumberType = "work";
        } else {
          paperApp.additionalPhoneNumberType = "home";
        }
      }
      const phone: PhoneNumber | undefined = parsePhoneNumber(
        inputJson.applicant.phoneNumber,
        "US"
      );
      paperApp.applicant.phoneNumber =
        phone != undefined ? phone.formatNational() : "";
      if (inputJson.applicant.primaryPhoneIsMobile == "True") {
        applicant.phoneNumberType = "cell";
      } else if (inputJson.applicant.primaryPhoneIsWork == "True") {
        applicant.phoneNumberType = "work";
      } else {
        applicant.phoneNumberType = "home";
      }

      applicant.applicantAddress = inputJson.applicant.applicantAddress;
      if (inputJson.applicant.workInRegion == "True") {
        applicant.workInRegion = YesNoEnum.Yes;
      } else {
        applicant.workInRegion = YesNoEnum.No;
      }

      const DOB = new Date(Date.parse(inputJson.applicant.dateOfBirth));
      this.logger.debug(DOB);
      applicant.birthMonth = (DOB.getMonth() + 1).toString();
      applicant.birthDay = DOB.getDate().toString();
      applicant.birthYear = DOB.getFullYear().toString();
      if (EmailValidator.validate(inputJson.applicant.emailAddress)) {
        applicant.emailAddress = inputJson.applicant.emailAddress;
        applicant.noEmail = false;
      } else {
        applicant.noEmail = true;
      }
      paperApp.alternateContact.firstName =
        inputJson.alternateContact.firstName;
      paperApp.alternateContact.lastName = inputJson.alternateContact.lastName;
      if (
        inputJson.alternateContact.emailAddress != "" &&
        EmailValidator.validate(inputJson.alternateContact.emailAddress)
      ) {
        paperApp.alternateContact.emailAddress =
          inputJson.alternateContact.emailAddress;
      }
      paperApp.alternateContact.address = inputJson.alternateContact.address;
      paperApp.alternateContact.agency = inputJson.alternateContact.agency;
      paperApp.alternateContact.otherType =
        inputJson.alternateContact.otherType;
      const altContactPhone: PhoneNumber | undefined = parsePhoneNumber(
        inputJson.alternateContact.phoneNumber,
        "US"
      );
      paperApp.alternateContact.phoneNumber =
        altContactPhone != undefined ? altContactPhone.formatNational() : "";
      this.logger.debug(
        `Additional Phone Number: ${paperApp.additionalPhoneNumber}`
      );

      if (inputJson.alternateContact.altContactFamily == "True") {
        paperApp.alternateContact.type =
          AlternateContactRelationship.FamilyMember;
      } else if (inputJson.alternateContact.altContactIsFriend == "True") {
        inputJson.alternateContact.type = AlternateContactRelationship.Friend;
      } else if (inputJson.alternateContact.altContactIsSW == "True") {
        inputJson.alternateContact.type =
          AlternateContactRelationship.CaseManager;
      } else if (
        inputJson.alternateContact.firstName == "" &&
        inputJson.alternateContact.lastName == ""
      ) {
        inputJson.alternateContact.type =
          AlternateContactRelationship.NoContact;
      } else {
        inputJson.alternateContact.type = AlternateContactRelationship.Other;
      }
    }
    let race: string | undefined = undefined;
    let ethnicity: string | undefined = undefined;
    if (inputJson.demographics.race.Asian == "True") {
      race = "asian";
    }
    if (inputJson.demographics.race.Black == "True") {
      race = "black";
    }
    if (inputJson.demographics.race.Indigenous == "True") {
      race = "indigenous";
    }
    if (inputJson.demographics.race.Latino == "True") {
      race = "latino";
    }
    if (inputJson.demographics.race.MiddleEastern == "True") {
      race = "middleEasternOrAfrican";
    }
    if (inputJson.demographics.race.PacIsland == "True") {
      race = "pacificIslander";
    }
    if (inputJson.demographics.ethnicity.AfricanAmerican == "True") {
      ethnicity = "africanAmerican";
    }
    if (inputJson.demographics.ethnicity.Chinese == "True") {
      ethnicity = "chinese";
    }
    if (inputJson.demographics.ethnicity.Filipino == "True") {
      ethnicity = "filipino";
    }
    if (inputJson.demographics.ethnicity.Japanese == "True") {
      ethnicity = "japanese";
    }
    if (inputJson.demographics.ethnicity.Korean == "True") {
      ethnicity = "korean";
    }
    if (inputJson.demographics.ethnicity.Mongolian == "True") {
      ethnicity = "mongolian";
    }
    if (inputJson.demographics.ethnicity.Vietnamese == "True") {
      ethnicity = "vietnamese";
    }
    if (inputJson.demographics.ethnicity.CenAsian == "True") {
      ethnicity = "centralAsian";
    }
    if (inputJson.demographics.ethnicity.SouthAsian == "True") {
      ethnicity = "South Asian";
    }
    if (inputJson.demographics.ethnicity.SouthEastAsian == "True") {
      ethnicity = "southeastAsian";
    }
    if (inputJson.demographics.ethnicity.OtherAsian == "True") {
      ethnicity = "otherAsian";
    }
    if (inputJson.demographics.ethnicity.African == "True") {
      ethnicity = "african";
    }
    if (inputJson.demographics.ethnicity.BlackCaribbean == "True") {
      ethnicity = "caribbeanCentralSouthAmericanMexican";
    }
    if (inputJson.demographics.ethnicity.OtherBlack == "True") {
      ethnicity = "otherBlack";
    }
    if (inputJson.demographics.ethnicity.LatinoCaribbean == "True") {
      ethnicity = "caribbean";
    }
    if (inputJson.demographics.ethnicity.CenAmer == "True") {
      ethnicity = "centralAmerican";
    }
    if (inputJson.demographics.ethnicity.Mexican == "True") {
      ethnicity = "mexican";
    }
    if (inputJson.demographics.ethnicity.SouthAmer == "True") {
      ethnicity = "southAmerican";
    }
    if (inputJson.demographics.ethnicity.OtherLatino == "True") {
      ethnicity = "otherLatino";
    }
    if (inputJson.demographics.ethnicity.European == "True") {
      ethnicity = "european";
    }
    if (inputJson.demographics.ethnicity.OtherWhite == "True") {
      ethnicity = "otherWhite";
    }
    if (inputJson.demographics.ethnicity.Alaskan == "True") {
      ethnicity = "alaskanNative";
    }
    if (inputJson.demographics.ethnicity.AmerInd == "True") {
      ethnicity = "nativeAmerican";
    }
    if (inputJson.demographics.ethnicity.MexicanInd == "True") {
      ethnicity = "indigenousFromMexicoCaribbeanCentralSouthAmerica";
    }
    if (inputJson.demographics.ethnicity.OtherInd == "True") {
      ethnicity = "otherIndigenous";
    }
    if (inputJson.demographics.ethnicity.NorthAfrican == "True") {
      ethnicity = "northAfrican";
    }
    if (inputJson.demographics.ethnicity.WestAfrican == "True") {
      ethnicity = "westAfrican";
    }
    if (inputJson.demographics.ethnicity.OtherME == "True") {
      ethnicity = "otherMiddleEasternNorthAfrican";
    }
    if (inputJson.demographics.ethnicity.Chamorro == "True") {
      ethnicity = "chamorro";
    }
    if (inputJson.demographics.ethnicity.NativeHawaiian == "True") {
      ethnicity = "nativeHawaiian";
    }
    if (inputJson.demographics.ethnicity.Samoan == "True") {
      ethnicity = "samoan";
    }
    if (inputJson.demographics.ethnicity.OtherPI == "True") {
      ethnicity = "otherPacificIslander";
    }
    race == undefined ? (race = "other") : (race = race);
    ethnicity == undefined ? (ethnicity = "other") : (ethnicity = ethnicity);
    paperApp.demographics.race = [];

    paperApp.demographics.race!.push(race);
    paperApp.demographics.race.push(`${race}-${ethnicity}`);
    this.logger.debug(race);
    this.logger.debug(paperApp.demographics.race);

    this.logger.debug(paperApp.demographics.ethnicity);
    //Setting Gender
    if (inputJson.demographics.gender.Male == "True") {
      paperApp.demographics.gender = "male";
    }
    if (inputJson.demographics.gender.Female == "True") {
      paperApp.demographics.gender = "female";
    }
    if (inputJson.demographics.gender.TransMan == "True") {
      paperApp.demographics.gender = "transMan";
    }
    if (inputJson.demographics.gender.TransWoman == "True") {
      paperApp.demographics.gender = "transWoman";
    }
    if (inputJson.demographics.gender.GenderQueer == "True") {
      paperApp.demographics.gender = "genderqueerGenderNon-Binary";
    }
    if (inputJson.demographics.gender.GenderOther == "True") {
      paperApp.demographics.gender = "differentTerm";
    }
    if (inputJson.demographics.gender.DidNotRespond == "True") {
      paperApp.demographics.gender = "preferNoResponse";
    }
    if (inputJson.demographics.sexualOrientation.Straight == "True") {
      paperApp.demographics.sexualOrientation = "straightHeterosexual";
    }
    if (inputJson.demographics.sexualOrientation.Asexual == "True") {
      paperApp.demographics.sexualOrientation = "asexual";
    }
    if (inputJson.demographics.sexualOrientation.Bisexual == "True") {
      paperApp.demographics.sexualOrientation = "bisexual";
    }
    if (inputJson.demographics.sexualOrientation.GayLesbian == "True") {
      paperApp.demographics.sexualOrientation = "gayLesbianSameGenderLoving";
    }
    if (inputJson.demographics.sexualOrientation.Questioning == "True") {
      paperApp.demographics.sexualOrientation = "questioningUnsure";
    }
    if (inputJson.demographics.sexualOrientation.Other == "True") {
      paperApp.demographics.sexualOrientation = "differentTerm";
    }
    if (inputJson.demographics.sexualOrientation.DontUnderstand == "True") {
      paperApp.demographics.sexualOrientation = "dontKnow";
    }
    if (inputJson.demographics.sexualOrientation.DidNotRespond == "True") {
      paperApp.demographics.sexualOrientation = "preferNoResponse";
    }
    paperApp.demographics.spokenLanguage = undefined;
    if (inputJson.demographics.spokenLanguage.Cantonese == "True") {
      paperApp.demographics.spokenLanguage = "chineseCantonese";
    }
    if (inputJson.demographics.spokenLanguage.Mandarin == "True") {
      paperApp.demographics.spokenLanguage = "chineseMandarin";
    }
    if (inputJson.demographics.spokenLanguage.English == "True") {
      paperApp.demographics.spokenLanguage = "english";
    }
    if (inputJson.demographics.spokenLanguage.Filipino == "True") {
      paperApp.demographics.spokenLanguage = "filipino";
    }
    if (inputJson.demographics.spokenLanguage.Korean == "True") {
      paperApp.demographics.spokenLanguage = "korean";
    }
    if (inputJson.demographics.spokenLanguage.Russian == "True") {
      paperApp.demographics.spokenLanguage = "russian";
    }
    if (inputJson.demographics.spokenLanguage.Spanish == "True") {
      paperApp.demographics.spokenLanguage = "spanish";
    }
    if (inputJson.demographics.spokenLanguage.Vietnamese == "True") {
      paperApp.demographics.spokenLanguage = "vietnamese";
    }
    if (paperApp.demographics.spokenLanguage == undefined) {
      paperApp.demographics.spokenLanguage = "notListed";
    }

    paperApp.accessibility.mobility =
      inputJson.accessibility.mobility == "True";
    paperApp.accessibility.vision = inputJson.accessibility.vision == "True";
    paperApp.accessibility.hearing = inputJson.accessibility.hearing == "True";
    const unitTypes: UnitType[] = await this.unitTypeService.getUnitTypes();
    this.logger.debug(unitTypes);
    const studio = unitTypes.find(
      (unitType: UnitType) => unitType.name === "studio"
    );
    this.logger.debug(studio);
    const oneBr = unitTypes.find(
      (unitType: UnitType) => unitType.name === "oneBdrm"
    );
    this.logger.debug(oneBr);
    const twoBr = unitTypes.find(
      (unitType: UnitType) => unitType.name === "twoBdrm"
    );
    this.logger.debug(twoBr);
    const threeBr = unitTypes.find(
      (unitType: UnitType) => unitType.name === "threeBdrm"
    );
    this.logger.debug(threeBr);
    const fourBr = unitTypes.find(
      (unitType: UnitType) => unitType.name == "fourBdrm"
    );
    this.logger.debug(fourBr);

    const preferredUnitTypes: IdDTO[] = [];
    this.logger.debug(inputJson.preferredUnitTypes);
    if (inputJson.preferredUnitTypes["Studio"] === "True") {
      preferredUnitTypes.push({ id: studio!.id });
      this.logger.debug(studio!.id);
      this.logger.debug(preferredUnitTypes);
    }
    if (inputJson.preferredUnitTypes["1BR"] === "True") {
      preferredUnitTypes.push({ id: oneBr!.id });
      this.logger.debug(oneBr?.id);
      this.logger.debug(preferredUnitTypes);
    }
    if (inputJson.preferredUnitTypes["2BR"] === "True") {
      preferredUnitTypes.push({ id: twoBr!.id });
      this.logger.debug(twoBr!.id);
      this.logger.debug(preferredUnitTypes);
    }
    if (inputJson.preferredUnitTypes["3BR"] === "True") {
      preferredUnitTypes.push({ id: threeBr!.id });
      this.logger.debug(threeBr!.id);
      this.logger.debug(preferredUnitTypes);
    }
    if (inputJson.preferredUnitTypes["4BR"] === "True") {
      preferredUnitTypes.push({ id: fourBr!.id });
      this.logger.debug(fourBr!.id);
      this.logger.debug(preferredUnitTypes);
    }
    paperApp.preferredUnitTypes = preferredUnitTypes;
    this.logger.debug(preferredUnitTypes);
    this.logger.debug(`Preferred units: ${paperApp.preferredUnitTypes}`);
    paperApp.householdMember = [];
    const household: HouseholdMemberUpdate[] = inputJson.householdMember;
    for (let i = 0; i < household.length; i++) {
      if (household[i].firstName != "" && household[i].lastName != "") {
        const member: HouseholdMemberUpdate = {
          householdMemberAddress: {
            street: "",
            city: "",
            state: "",
            zipCode: "",
          },
        };
        member.householdMemberWorkAddress = {
          street: "",
          street2: "",
          city: "",
          state: "",
          zipCode: "",
        };
        member.firstName = household[i].firstName;
        member.middleName = household[i].middleName;
        member.lastName = household[i].lastName;
        const memberDOB = new Date(Date.parse(household[i]["dateOfBirth"]));
        this.logger.debug(memberDOB);
        member.birthMonth = (memberDOB.getMonth() + 1).toString();
        member.birthDay = memberDOB.getDate().toString();
        member.birthYear = memberDOB.getFullYear().toString();
        member.relationship = HouseholdMemberRelationship.Other;

        paperApp.householdMember.push(member);
      }
    }

    paperApp.listings.id = inputJson.listings.id;
    const listing = await this.listingsService.getListing(paperApp.listings.id);
    this.logger.info(
      `Listing requested is ${listing.id} and is in status ${listing.status}`
    );
    if (listing.listingMultiselectQuestions != undefined) {
      const prefNames: object[] = [];
      listing.listingMultiselectQuestions.forEach(
        (question: ListingMultiselectQuestion) => {
          prefNames.push({
            name: question.multiselectQuestions.text,
            id: question.multiselectQuestions.id,
            description: question.multiselectQuestions.description,
          });
        }
      );
      const listingSearch = new Fuse(prefNames, {
        keys: ["name", "description"],
        isCaseSensitive: false,
        includeScore: true,
      });
      this.logger.debug(listingSearch);
      paperApp.preferences = [];
      inputJson.preferences.forEach(async (pref: object) => {
        this.logger.debug("Setting Preferences");
        this.logger.debug(pref);
        if (pref["value"] == "True") {
          let result = await listingSearch.search(pref["name"]);
          if (result.length > 0) {
            result.forEach((resultItem: FuseResult<object>) => {
              this.logger.debug(resultItem);
              const listingPref = resultItem.item;
              let appPref: ApplicationMultiselectQuestion = {
                multiselectQuestionId: resultItem.item["id"],
                key: resultItem.item["name"],

                claimed: true,
                options: [
                  {
                    key: "I would like to be considered for the HOPWA unit and will provide documents required to verify eligibility",
                    checked: true,
                    extraData: [],
                  },
                  {
                    key: "I don't wish to be considered for this preference",
                    checked: false,
                    extraData: [],
                  },
                ],
              };
              paperApp.preferences?.push(appPref);
              this.logger.debug(paperApp.preferences);
            });
          }
        }
      });
    }

    this.logger.debug("Generated doorway application:");
    this.logger.debug(paperApp);

    return paperApp;
  }
}
export class PaperApplication implements ApplicationCreate {
  acceptedTerms?: boolean;
  language?: LanguagesEnum;
  incomeVouchers?: string[];

  contactPreferences: string[];
  householdSize: number;
  status: ApplicationStatusEnum;
  submissionType: ApplicationSubmissionTypeEnum;
  submissionDate: string;
  listings: IdDTO;
  applicant: ApplicantUpdate;
  applicationsMailingAddress: AddressCreate;
  applicationsAlternateAddress: AddressCreate;
  alternateContact: AlternateContactUpdate;
  accessibility: AccessibilityUpdate;
  demographics: DemographicUpdate;
  householdMember: HouseholdMemberUpdate[];
  preferredUnitTypes: IdDTO[];
  preferences?: ApplicationMultiselectQuestion[];
  income: string;
  incomePeriod?: IncomePeriodEnum;
  additionalPhone?: boolean;
  additionalPhoneNumber?: string;
  additionalPhoneNumberType?: string;
  householdExpectingChanges?: boolean;
  householdStudent?: boolean;

  constructor() {
    this.status = ApplicationStatusEnum.Draft;
    this.submissionType = ApplicationSubmissionTypeEnum.Paper;
    this.additionalPhone = false;
    this.additionalPhoneNumber = "";
    this.contactPreferences = [];
    this.applicant = {
      applicantAddress: {
        city: "",
        street: "",
        zipCode: "",
        state: "",
      },
      applicantWorkAddress: {
        city: "",
        street: "",
        zipCode: "",
        state: "",
      },
    };
    this.alternateContact = {
      address: {
        city: "",
        street: "",
        zipCode: "",
        state: "",
      },
    };
    this.listings = { id: "" };
    this.householdSize = 0;
    this.householdMember = [];
    this.demographics = { race: [], howDidYouHear: ["NA"] };
    this.accessibility = {};
    this.preferredUnitTypes = [];
    this.acceptedTerms = true;
    this.language = LanguagesEnum.En;
    this.incomeVouchers = [];
    this.householdExpectingChanges = false;
    this.householdStudent = false;
  }
}
