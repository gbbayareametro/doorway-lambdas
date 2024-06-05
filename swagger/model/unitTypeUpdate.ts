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
import { UnitTypeEnum } from './unitTypeEnum';

export class UnitTypeUpdate {
    'id': string;
    'name': UnitTypeEnum;
    'numBedrooms': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "UnitTypeEnum"
        },
        {
            "name": "numBedrooms",
            "baseName": "numBedrooms",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return UnitTypeUpdate.attributeTypeMap;
    }
}

export namespace UnitTypeUpdate {
}
