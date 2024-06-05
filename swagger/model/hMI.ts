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

export class HMI {
    'columns': object;
    'rows': Array<object>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "columns",
            "baseName": "columns",
            "type": "object"
        },
        {
            "name": "rows",
            "baseName": "rows",
            "type": "Array<object>"
        }    ];

    static getAttributeTypeMap() {
        return HMI.attributeTypeMap;
    }
}

