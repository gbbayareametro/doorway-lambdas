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

export class AddressCreate {
    'placeName'?: string;
    'city': string;
    'county'?: string;
    'state': string;
    'street': string;
    'street2'?: string;
    'zipCode': string;
    'latitude'?: number;
    'longitude'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "placeName",
            "baseName": "placeName",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "county",
            "baseName": "county",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "street",
            "baseName": "street",
            "type": "string"
        },
        {
            "name": "street2",
            "baseName": "street2",
            "type": "string"
        },
        {
            "name": "zipCode",
            "baseName": "zipCode",
            "type": "string"
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AddressCreate.attributeTypeMap;
    }
}

