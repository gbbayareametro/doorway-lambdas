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
import { ListingsStatusEnum } from './listingsStatusEnum';

export class ListingFilterParams {
    '$comparison': ListingFilterParams.ComparisonEnum = ListingFilterParams.ComparisonEnum.Equal;
    'name'?: string;
    'status'?: ListingsStatusEnum;
    'neighborhood'?: string;
    'bedrooms'?: number;
    'bathrooms'?: number;
    'zipcode'?: string;
    'leasingAgents'?: string;
    'jurisdiction'?: string;
    'isExternal'?: boolean;
    'city'?: string;
    'monthlyRent'?: number;
    'counties'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "$comparison",
            "baseName": "$comparison",
            "type": "ListingFilterParams.ComparisonEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ListingsStatusEnum"
        },
        {
            "name": "neighborhood",
            "baseName": "neighborhood",
            "type": "string"
        },
        {
            "name": "bedrooms",
            "baseName": "bedrooms",
            "type": "number"
        },
        {
            "name": "bathrooms",
            "baseName": "bathrooms",
            "type": "number"
        },
        {
            "name": "zipcode",
            "baseName": "zipcode",
            "type": "string"
        },
        {
            "name": "leasingAgents",
            "baseName": "leasingAgents",
            "type": "string"
        },
        {
            "name": "jurisdiction",
            "baseName": "jurisdiction",
            "type": "string"
        },
        {
            "name": "isExternal",
            "baseName": "isExternal",
            "type": "boolean"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "monthlyRent",
            "baseName": "monthlyRent",
            "type": "number"
        },
        {
            "name": "counties",
            "baseName": "counties",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return ListingFilterParams.attributeTypeMap;
    }
}

export namespace ListingFilterParams {
    export enum ComparisonEnum {
        Equal = <any> '=',
        NotEqual = <any> '<>',
        In = <any> 'IN',
        GreaterThanOrEqualTo = <any> '>=',
        LessThanOrEqualTo = <any> '<=',
        Na = <any> 'NA'
    }
}
