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

export class RequestMfaCodeResponse {
    'phoneNumber'?: string;
    'email'?: string;
    'phoneNumberVerified'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phoneNumberVerified",
            "baseName": "phoneNumberVerified",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return RequestMfaCodeResponse.attributeTypeMap;
    }
}

