/**
 * Bloom API
 * The API for Bloom
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Accessibility } from './accessibility';
import { Address } from './address';
import { AlternateContact } from './alternateContact';
import { Applicant } from './applicant';
import { ApplicationMultiselectQuestion } from './applicationMultiselectQuestion';
import { ApplicationReviewStatusEnum } from './applicationReviewStatusEnum';
import { ApplicationStatusEnum } from './applicationStatusEnum';
import { ApplicationSubmissionTypeEnum } from './applicationSubmissionTypeEnum';
import { Demographic } from './demographic';
import { HouseholdMember } from './householdMember';
import { IdDTO } from './idDTO';
import { IncomePeriodEnum } from './incomePeriodEnum';
import { LanguagesEnum } from './languagesEnum';
import { UnitType } from './unitType';

export class Application {
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
    'deletedAt'?: Date;
    'appUrl'?: string;
    'additionalPhone'?: boolean;
    'additionalPhoneNumber'?: string;
    'additionalPhoneNumberType'?: string;
    'contactPreferences': Array<string>;
    'householdSize': number;
    'housingStatus'?: string;
    'sendMailToMailingAddress'?: boolean;
    'householdExpectingChanges'?: boolean;
    'householdStudent'?: boolean;
    'incomeVouchers'?: Array<string>;
    'income'?: string;
    'incomePeriod'?: IncomePeriodEnum;
    'status': ApplicationStatusEnum;
    'language'?: LanguagesEnum;
    'acceptedTerms'?: boolean;
    'submissionType': ApplicationSubmissionTypeEnum;
    'submissionDate'?: Date;
    'markedAsDuplicate': boolean;
    'flagged'?: boolean;
    'confirmationCode': string;
    'reviewStatus'?: ApplicationReviewStatusEnum;
    'applicationsMailingAddress': Address;
    'applicationsAlternateAddress': Address;
    'accessibility': Accessibility;
    'demographics': Demographic;
    'preferredUnitTypes': Array<UnitType>;
    'applicant': Applicant;
    'alternateContact': AlternateContact;
    'householdMember': Array<HouseholdMember>;
    'preferences'?: Array<ApplicationMultiselectQuestion>;
    'programs'?: Array<ApplicationMultiselectQuestion>;
    'listings': IdDTO;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
            "type": "Date"
        },
        {
            "name": "appUrl",
            "baseName": "appUrl",
            "type": "string"
        },
        {
            "name": "additionalPhone",
            "baseName": "additionalPhone",
            "type": "boolean"
        },
        {
            "name": "additionalPhoneNumber",
            "baseName": "additionalPhoneNumber",
            "type": "string"
        },
        {
            "name": "additionalPhoneNumberType",
            "baseName": "additionalPhoneNumberType",
            "type": "string"
        },
        {
            "name": "contactPreferences",
            "baseName": "contactPreferences",
            "type": "Array<string>"
        },
        {
            "name": "householdSize",
            "baseName": "householdSize",
            "type": "number"
        },
        {
            "name": "housingStatus",
            "baseName": "housingStatus",
            "type": "string"
        },
        {
            "name": "sendMailToMailingAddress",
            "baseName": "sendMailToMailingAddress",
            "type": "boolean"
        },
        {
            "name": "householdExpectingChanges",
            "baseName": "householdExpectingChanges",
            "type": "boolean"
        },
        {
            "name": "householdStudent",
            "baseName": "householdStudent",
            "type": "boolean"
        },
        {
            "name": "incomeVouchers",
            "baseName": "incomeVouchers",
            "type": "Array<string>"
        },
        {
            "name": "income",
            "baseName": "income",
            "type": "string"
        },
        {
            "name": "incomePeriod",
            "baseName": "incomePeriod",
            "type": "IncomePeriodEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ApplicationStatusEnum"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "LanguagesEnum"
        },
        {
            "name": "acceptedTerms",
            "baseName": "acceptedTerms",
            "type": "boolean"
        },
        {
            "name": "submissionType",
            "baseName": "submissionType",
            "type": "ApplicationSubmissionTypeEnum"
        },
        {
            "name": "submissionDate",
            "baseName": "submissionDate",
            "type": "Date"
        },
        {
            "name": "markedAsDuplicate",
            "baseName": "markedAsDuplicate",
            "type": "boolean"
        },
        {
            "name": "flagged",
            "baseName": "flagged",
            "type": "boolean"
        },
        {
            "name": "confirmationCode",
            "baseName": "confirmationCode",
            "type": "string"
        },
        {
            "name": "reviewStatus",
            "baseName": "reviewStatus",
            "type": "ApplicationReviewStatusEnum"
        },
        {
            "name": "applicationsMailingAddress",
            "baseName": "applicationsMailingAddress",
            "type": "Address"
        },
        {
            "name": "applicationsAlternateAddress",
            "baseName": "applicationsAlternateAddress",
            "type": "Address"
        },
        {
            "name": "accessibility",
            "baseName": "accessibility",
            "type": "Accessibility"
        },
        {
            "name": "demographics",
            "baseName": "demographics",
            "type": "Demographic"
        },
        {
            "name": "preferredUnitTypes",
            "baseName": "preferredUnitTypes",
            "type": "Array<UnitType>"
        },
        {
            "name": "applicant",
            "baseName": "applicant",
            "type": "Applicant"
        },
        {
            "name": "alternateContact",
            "baseName": "alternateContact",
            "type": "AlternateContact"
        },
        {
            "name": "householdMember",
            "baseName": "householdMember",
            "type": "Array<HouseholdMember>"
        },
        {
            "name": "preferences",
            "baseName": "preferences",
            "type": "Array<ApplicationMultiselectQuestion>"
        },
        {
            "name": "programs",
            "baseName": "programs",
            "type": "Array<ApplicationMultiselectQuestion>"
        },
        {
            "name": "listings",
            "baseName": "listings",
            "type": "IdDTO"
        }    ];

    static getAttributeTypeMap() {
        return Application.attributeTypeMap;
    }
}

export namespace Application {
}
