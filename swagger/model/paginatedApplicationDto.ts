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
import { Application } from './application';
import { PaginationMeta } from './paginationMeta';

export class PaginatedApplicationDto {
    'items': Array<Application>;
    'meta': PaginationMeta;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Application>"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "PaginationMeta"
        }    ];

    static getAttributeTypeMap() {
        return PaginatedApplicationDto.attributeTypeMap;
    }
}

