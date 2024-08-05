import * as joi from "joi";
import { DoorwayInterface } from "./doorway-interface";
import { Application, ApplicationCreate } from "../../api/Api";

import { instance as logger } from "./winston.logger";
export class LotteryValidator {
  doorwayInterface: DoorwayInterface;

  constructor(user: string, password: string, url: string) {
    this.doorwayInterface = new DoorwayInterface(user, password, url);
  }
  fixedFieldsAreValid(json: object, application: Application): boolean {
    logger.info(`Validating line for ${application.id}`);
    const schema = joi
      .object({
        "Application Id": joi.string().guid(),
        "Application Confirmation Code": joi
          .string()
          .valid(application.confirmationCode),
        "Raw Lottery Rank": joi.string().regex(/^\d+$/),
        "Application Type": joi
          .string()
          .valid("electronic", "paper")
          .valid(application.submissionType),
        "Application Submission Date": joi.string(),
        "Household Size": joi
          .string()
          .regex(/^\d+$/)
          .valid(application.householdSize.toString()),
        "Primary Applicant First Name": joi
          .string()
          .valid(application.applicant.firstName),
        "Primary Applicant Last Name": joi
          .string()
          .valid(application.applicant.lastName),
        "Primary Applicant Middle Name": joi
          .string()
          .valid(
            application.applicant.middleName == null
              ? ""
              : application.applicant.middleName
          ),
        "Primary Applicant Birth Day": joi
          .string()
          .valid(application.applicant.birthDay),
        "Primary Applicant Birth Month": joi
          .string()
          .valid(application.applicant.birthMonth),
        "Primary Applicant Birth Year": joi
          .string()
          .valid(application.applicant.birthYear),
        "Primary Applicant Email Address": joi
          .string()
          .valid(application.applicant.emailAddress)
          .insensitive(),
        "Primary Applicant Phone Number": joi
          .string()
          .allow("")
          .valid(application.applicant.phoneNumber),
        "Primary Applicant Phone Type": joi
          .string()
          .allow("")
          .valid(application.applicant.phoneNumberType),
        "Primary Applicant Additional Phone Number": joi
          .string()
          .valid(
            application.additionalPhoneNumber == null
              ? ""
              : application.additionalPhoneNumber
          ),
        "Primary Applicant Preferred Contact Type": joi
          .string()
          .allow("")
          .valid(application.contactPreferences.toString()),
        "Primary Applicant Street": joi
          .string()
          .valid(application.applicant.applicantAddress.street),
        "Primary Applicant Street 2": joi
          .string()
          .allow("")
          .valid(application.applicant.applicantAddress.street2),
        "Primary Applicant City": joi
          .string()
          .valid(application.applicant.applicantAddress.city),
        "Primary Applicant State": joi
          .string()
          .valid(application.applicant.applicantAddress.state),
        "Primary Applicant Zip Code": joi
          .string()
          .valid(application.applicationsMailingAddress.zipCode),
        "Primary Applicant Mailing Street": joi
          .string()
          .valid(application.applicant.applicantAddress.street),
        "Primary Applicant Mailing Street 2": joi
          .string()
          .valid(
            application.applicationsMailingAddress.street2 == null
              ? ""
              : application.applicationsMailingAddress.street2
          ),
        "Primary Applicant Mailing City": joi
          .string()
          .valid(
            application.applicationsMailingAddress.city == null
              ? ""
              : application.applicationsMailingAddress.city
          ),
        "Primary Applicant Mailing State": joi
          .string()
          .valid(
            application.applicationsMailingAddress.state == null
              ? ""
              : application.applicationsMailingAddress.state
          ),
        "Primary Applicant Mailing Zip Code": joi
          .string()
          .valid(
            application.applicationsMailingAddress.zipCode == null
              ? ""
              : application.applicationsMailingAddress.zipCode
          ),
        "Primary Applicant Work Street": joi
          .string()
          .valid(
            application.applicant.applicantWorkAddress.street == null
              ? ""
              : application.applicant.applicantWorkAddress.street
          ),
        "Primary Applicant Work Street 2": joi
          .string()
          .valid(
            application.applicant.applicantWorkAddress.street2 == null
              ? ""
              : application.applicant.applicantWorkAddress.street2
          ),
        "Primary Applicant Work City": joi
          .string()
          .valid(
            application.applicant.applicantWorkAddress.city == null
              ? ""
              : application.applicant.applicantWorkAddress.city
          ),
        "Primary Applicant Work State": joi
          .string()
          .valid(
            application.applicant.applicantWorkAddress.state == null
              ? ""
              : application.applicant.applicantWorkAddress.state
          ),
        "Primary Applicant Work Zip Code": joi
          .string()
          .valid(
            application.applicant.applicantWorkAddress.zipCode == null
              ? ""
              : application.applicant.applicantWorkAddress.zipCode
          ),
        "Alternate Contact First Name": joi
          .string()
          .valid(
            application.alternateContact.firstName == null
              ? ""
              : application.alternateContact.firstName
          ),
        "Alternate Contact Last Name": joi
          .string()
          .valid(
            application.alternateContact.lastName == null
              ? ""
              : application.alternateContact.lastName
          ),
        "Alternate Contact Type": joi
          .string()
          .valid(
            application.alternateContact.type == null
              ? ""
              : application.alternateContact.type
          ),
        "Alternate Contact Agency": joi
          .string()
          .valid(
            application.alternateContact.agency == null
              ? ""
              : application.alternateContact.agency
          ),
        "Alternate Contact Other Type": joi
          .string()
          .valid(
            application.alternateContact.otherType == null
              ? ""
              : application.alternateContact.otherType
          ),
        "Alternate Contact Email Address": joi
          .string()
          .valid(
            application.alternateContact.emailAddress == null
              ? ""
              : application.alternateContact.emailAddress
          )
          .insensitive(),
        "Alternate Contact Phone Number": joi
          .string()
          .valid(
            application.alternateContact.phoneNumber == null
              ? ""
              : application.alternateContact.phoneNumber
          )
          .insensitive(),
        "Alternate Contact Street": joi
          .string()
          .valid(
            application.alternateContact.address?.street == null
              ? ""
              : application.alternateContact.address?.street
          ),
        "Alternate Contact Street 2": joi
          .string()
          .valid(
            application.alternateContact.address?.street2 == null
              ? ""
              : application.alternateContact.address?.street2
          ),
        "Alternate Contact City": joi
          .string()
          .valid(
            application.alternateContact.address?.city == null
              ? ""
              : application.alternateContact.address?.city
          ),
        "Alternate Contact State": joi
          .string()
          .valid(
            application.alternateContact.address?.state == null
              ? ""
              : application.alternateContact.address?.state
          ),
        "Alternate Contact Zip Code": joi
          .string()
          .valid(
            application.alternateContact.address?.zipCode == null
              ? ""
              : application.alternateContact.address?.zipCode
          ),
        Income: joi
          .string()
          .valid(application.income == null ? "" : application.income),
        "Income Period": joi
          .string()
          .valid(
            application.incomePeriod == null ? "" : application.incomePeriod
          ),
        "Accessibility Mobility": joi
          .string()
          .valid(
            JSON.stringify(application.accessibility) == "null" ||
              JSON.stringify(application.accessibility?.mobility) == "null"
              ? ""
              : String(application.accessibility!.mobility)
          ),
        "Accessibility Vision": joi
          .string()
          .valid(
            JSON.stringify(application.accessibility) == "null" ||
              JSON.stringify(application.accessibility?.vision) == "null"
              ? ""
              : String(application.accessibility!.vision)
          ),
        "Accessibility Hearing": joi
          .string()
          .valid(
            JSON.stringify(application.accessibility) == "null" ||
              JSON.stringify(application.accessibility?.hearing) == "null"
              ? ""
              : String(application.accessibility!.hearing)
          ),
        "Expecting Household Changes": joi
          .string()
          .valid(
            JSON.stringify(application.householdExpectingChanges) == "null"
              ? ""
              : String(application.householdExpectingChanges)
          ),
        "Household Includes Student or Member Nearing 18": joi
          .string()
          .valid(
            JSON.stringify(application.householdStudent) == "null"
              ? ""
              : String(application.householdStudent)
          ),
        "Vouchers or Subsidies": joi
          .string()
          .valid(String(application.incomeVouchers)),
        "Requested Unit Types": joi
          .string()
          .valid(
            application.preferredUnitTypes != undefined &&
              application.preferredUnitTypes.length > 0
              ? application.preferredUnitTypes?.toString()
              : ""
          ),
        "Marked As Duplicate": joi
          .string()
          .valid(String(application.markedAsDuplicate)),
        "Flagged As Duplicate": joi.string().valid(String(application.flagged)),

        "Preference:  Live/Work in San Jose ": joi.string(),
        "Preference: San Jose Anti-Displacement Preference": joi.string(),
        "Preference: San Jose Anti-Displacement Preference I would like to be considered for this preference - Address":
          joi.string().allow(""),
      })
      .unknown(true);

    let { error, value } = schema.validate(json);

    if (error == undefined) {
      return true;
    } else {
      logger.error(`Problems validating applicant ${application.id}!!!!`);
      logger.error(error.message);
      return false;
    }
  }
  householdMembersAreValid(json: object, application: Application) {
    //      "Household Member (1) First Name": joi
    //         .string()
    //         .valid(
    //           application.householdMember != undefined
    //             ? application.householdMember[0]
    //             : ""
    //         ),
    //       "Household Member (1) Middle Name": joi.string().allow(""),
    //       "Household Member (1) Last Name": joi.string().allow(""),
    //       "Household Member (1) Birthday": joi.string().allow(""),
    //       "Household Member (1) Same Address as Primary Applicant": joi
    //         .string()
    //         .valid("Yes", "No"),
    //       "Household Member (1) Relationship": joi.string().allow(""),
    //       "Household Member (1) Work in Region": joi.string().valid("Yes", "No"),
    //       "Household Member (1) Street": joi.string().allow(""),
    //       "Household Member (1) Street 2": joi.string().allow(""),
    //       "Household Member (1) City": joi.string().allow(""),
    //       "Household Member (1) State": joi.string().allow(""),
    //       "Household Member (1) Zip Code": joi.string().allow(""),
  }
}
