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
import { AssetCreate } from './assetCreate';
import { LanguagesEnum } from './languagesEnum';

export class PaperApplicationCreate {
    'language': LanguagesEnum;
    'assets'?: AssetCreate;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "language",
            "baseName": "language",
            "type": "LanguagesEnum"
        },
        {
            "name": "assets",
            "baseName": "assets",
            "type": "AssetCreate"
        }    ];

    static getAttributeTypeMap() {
        return PaperApplicationCreate.attributeTypeMap;
    }
}

export namespace PaperApplicationCreate {
}
