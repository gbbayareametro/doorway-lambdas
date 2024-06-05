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
import { AddressCreate } from './addressCreate';
import { YesNoEnum } from './yesNoEnum';

export class ApplicantUpdate {
    'firstName'?: string;
    'middleName'?: string;
    'lastName'?: string;
    'birthMonth'?: string;
    'birthDay'?: string;
    'birthYear'?: string;
    'emailAddress'?: string;
    'noEmail'?: boolean;
    'phoneNumber'?: string;
    'phoneNumberType'?: string;
    'noPhone'?: boolean;
    'workInRegion'?: YesNoEnum;
    'applicantAddress': AddressCreate;
    'applicantWorkAddress': AddressCreate;

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
            "name": "birthMonth",
            "baseName": "birthMonth",
            "type": "string"
        },
        {
            "name": "birthDay",
            "baseName": "birthDay",
            "type": "string"
        },
        {
            "name": "birthYear",
            "baseName": "birthYear",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "noEmail",
            "baseName": "noEmail",
            "type": "boolean"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "phoneNumberType",
            "baseName": "phoneNumberType",
            "type": "string"
        },
        {
            "name": "noPhone",
            "baseName": "noPhone",
            "type": "boolean"
        },
        {
            "name": "workInRegion",
            "baseName": "workInRegion",
            "type": "YesNoEnum"
        },
        {
            "name": "applicantAddress",
            "baseName": "applicantAddress",
            "type": "AddressCreate"
        },
        {
            "name": "applicantWorkAddress",
            "baseName": "applicantWorkAddress",
            "type": "AddressCreate"
        }    ];

    static getAttributeTypeMap() {
        return ApplicantUpdate.attributeTypeMap;
    }
}

export namespace ApplicantUpdate {
}
