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
import { HMI } from './hMI';
import { UnitAccessibilityPriorityType } from './unitAccessibilityPriorityType';
import { UnitSummary } from './unitSummary';
import { UnitSummaryByAMI } from './unitSummaryByAMI';
import { UnitType } from './unitType';

export class UnitsSummarized {
    'unitTypes': Array<UnitType>;
    'priorityTypes': Array<UnitAccessibilityPriorityType>;
    'amiPercentages': Array<string>;
    'byUnitTypeAndRent': Array<UnitSummary>;
    'byUnitType': Array<UnitSummary>;
    'byAMI': Array<UnitSummaryByAMI>;
    'hmi': HMI;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "unitTypes",
            "baseName": "unitTypes",
            "type": "Array<UnitType>"
        },
        {
            "name": "priorityTypes",
            "baseName": "priorityTypes",
            "type": "Array<UnitAccessibilityPriorityType>"
        },
        {
            "name": "amiPercentages",
            "baseName": "amiPercentages",
            "type": "Array<string>"
        },
        {
            "name": "byUnitTypeAndRent",
            "baseName": "byUnitTypeAndRent",
            "type": "Array<UnitSummary>"
        },
        {
            "name": "byUnitType",
            "baseName": "byUnitType",
            "type": "Array<UnitSummary>"
        },
        {
            "name": "byAMI",
            "baseName": "byAMI",
            "type": "Array<UnitSummaryByAMI>"
        },
        {
            "name": "hmi",
            "baseName": "hmi",
            "type": "HMI"
        }    ];

    static getAttributeTypeMap() {
        return UnitsSummarized.attributeTypeMap;
    }
}

