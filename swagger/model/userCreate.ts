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
import { IdDTO } from './idDTO';
import { LanguagesEnum } from './languagesEnum';

export class UserCreate {
    'firstName': string;
    'middleName'?: string;
    'lastName': string;
    'dob'?: Date;
    'phoneNumber'?: string;
    'listings': Array<IdDTO> | null;
    'language'?: LanguagesEnum;
    'agreedToTermsOfService': boolean;
    'newEmail'?: string;
    'appUrl'?: string;
    'password': string;
    'passwordConfirmation': string;
    'email': string;
    'emailConfirmation'?: string;
    'jurisdictions'?: Array<IdDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "dob",
            "baseName": "dob",
            "type": "Date"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "listings",
            "baseName": "listings",
            "type": "Array<IdDTO>"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "LanguagesEnum"
        },
        {
            "name": "agreedToTermsOfService",
            "baseName": "agreedToTermsOfService",
            "type": "boolean"
        },
        {
            "name": "newEmail",
            "baseName": "newEmail",
            "type": "string"
        },
        {
            "name": "appUrl",
            "baseName": "appUrl",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "passwordConfirmation",
            "baseName": "passwordConfirmation",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "emailConfirmation",
            "baseName": "emailConfirmation",
            "type": "string"
        },
        {
            "name": "jurisdictions",
            "baseName": "jurisdictions",
            "type": "Array<IdDTO>"
        }    ];

    static getAttributeTypeMap() {
        return UserCreate.attributeTypeMap;
    }
}

export namespace UserCreate {
}
