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

export class ReservedCommunityTypeQueryParams {
    'jurisdictionId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "jurisdictionId",
            "baseName": "jurisdictionId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReservedCommunityTypeQueryParams.attributeTypeMap;
    }
}

