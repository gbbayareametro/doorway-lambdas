import localVarRequest from 'request';

export * from './accessibility';
export * from './accessibilityUpdate';
export * from './address';
export * from './addressCreate';
export * from './addressInput';
export * from './afsMeta';
export * from './afsResolve';
export * from './afsView';
export * from './alternateContact';
export * from './alternateContactUpdate';
export * from './amiChart';
export * from './amiChartCreate';
export * from './amiChartItem';
export * from './amiChartQueryParams';
export * from './amiChartUpdate';
export * from './applicant';
export * from './applicantUpdate';
export * from './application';
export * from './applicationAddressTypeEnum';
export * from './applicationCreate';
export * from './applicationFlaggedSet';
export * from './applicationFlaggedSetPaginationMeta';
export * from './applicationMethod';
export * from './applicationMethodCreate';
export * from './applicationMethodsTypeEnum';
export * from './applicationMultiselectQuestion';
export * from './applicationMultiselectQuestionOption';
export * from './applicationMultiselectQuestionOptionExtraDataInner';
export * from './applicationOrderByKeys';
export * from './applicationReviewStatusEnum';
export * from './applicationStatusEnum';
export * from './applicationSubmissionTypeEnum';
export * from './applicationUpdate';
export * from './asset';
export * from './assetCreate';
export * from './booleanInput';
export * from './confirm';
export * from './confirmationRequest';
export * from './createPresignedUploadMetadata';
export * from './demographic';
export * from './demographicUpdate';
export * from './emailAndAppUrl';
export * from './flaggedSetStatusEnum';
export * from './hMI';
export * from './householdMember';
export * from './householdMemberUpdate';
export * from './idDTO';
export * from './incomePeriodEnum';
export * from './inputType';
export * from './jurisdiction';
export * from './jurisdictionCreate';
export * from './jurisdictionUpdate';
export * from './languagesEnum';
export * from './listing';
export * from './listingCreate';
export * from './listingEvent';
export * from './listingEventCreate';
export * from './listingEventsTypeEnum';
export * from './listingFeatures';
export * from './listingFilterParams';
export * from './listingImage';
export * from './listingImageCreate';
export * from './listingMultiselectQuestion';
export * from './listingOrderByKeys';
export * from './listingUpdate';
export * from './listingUtilities';
export * from './listingViews';
export * from './listingsRetrieveParams';
export * from './listingsStatusEnum';
export * from './login';
export * from './loginViaSingleUseCode';
export * from './mapLayerDto';
export * from './mfaType';
export * from './minMax';
export * from './minMaxCurrency';
export * from './multiselectLink';
export * from './multiselectOption';
export * from './multiselectQuestion';
export * from './multiselectQuestionCreate';
export * from './multiselectQuestionFilterParams';
export * from './multiselectQuestionQueryParams';
export * from './multiselectQuestionUpdate';
export * from './multiselectQuestionsApplicationSectionEnum';
export * from './orderByEnum';
export * from './paginatedAfsDto';
export * from './paginatedApplicationDto';
export * from './paginatedListingDto';
export * from './paginatedUserDto';
export * from './paginationMeta';
export * from './paperApplication';
export * from './paperApplicationCreate';
export * from './requestMfaCode';
export * from './requestMfaCodeResponse';
export * from './requestSingleUseCode';
export * from './reservedCommunityType';
export * from './reservedCommunityTypeCreate';
export * from './reservedCommunityTypeQueryParams';
export * from './reservedCommunityTypeUpdate';
export * from './reviewOrderTypeEnum';
export * from './ruleEnum';
export * from './successDTO';
export * from './textInput';
export * from './unit';
export * from './unitAccessibilityPriorityType';
export * from './unitAccessibilityPriorityTypeCreate';
export * from './unitAccessibilityPriorityTypeUpdate';
export * from './unitAmiChartOverride';
export * from './unitAmiChartOverrideCreate';
export * from './unitCreate';
export * from './unitRentType';
export * from './unitRentTypeCreate';
export * from './unitRentTypeEnum';
export * from './unitRentTypeUpdate';
export * from './unitSummary';
export * from './unitSummaryByAMI';
export * from './unitType';
export * from './unitTypeCreate';
export * from './unitTypeEnum';
export * from './unitTypeUpdate';
export * from './unitsSummarized';
export * from './unitsSummary';
export * from './unitsSummaryCreate';
export * from './updatePassword';
export * from './user';
export * from './userCreate';
export * from './userFilterParams';
export * from './userInvite';
export * from './userRole';
export * from './userUpdate';
export * from './validationMethodEnum';
export * from './yesNoEnum';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Accessibility } from './accessibility';
import { AccessibilityUpdate } from './accessibilityUpdate';
import { Address } from './address';
import { AddressCreate } from './addressCreate';
import { AddressInput } from './addressInput';
import { AfsMeta } from './afsMeta';
import { AfsResolve } from './afsResolve';
import { AfsView } from './afsView';
import { AlternateContact } from './alternateContact';
import { AlternateContactUpdate } from './alternateContactUpdate';
import { AmiChart } from './amiChart';
import { AmiChartCreate } from './amiChartCreate';
import { AmiChartItem } from './amiChartItem';
import { AmiChartQueryParams } from './amiChartQueryParams';
import { AmiChartUpdate } from './amiChartUpdate';
import { Applicant } from './applicant';
import { ApplicantUpdate } from './applicantUpdate';
import { Application } from './application';
import { ApplicationAddressTypeEnum } from './applicationAddressTypeEnum';
import { ApplicationCreate } from './applicationCreate';
import { ApplicationFlaggedSet } from './applicationFlaggedSet';
import { ApplicationFlaggedSetPaginationMeta } from './applicationFlaggedSetPaginationMeta';
import { ApplicationMethod } from './applicationMethod';
import { ApplicationMethodCreate } from './applicationMethodCreate';
import { ApplicationMethodsTypeEnum } from './applicationMethodsTypeEnum';
import { ApplicationMultiselectQuestion } from './applicationMultiselectQuestion';
import { ApplicationMultiselectQuestionOption } from './applicationMultiselectQuestionOption';
import { ApplicationMultiselectQuestionOptionExtraDataInner } from './applicationMultiselectQuestionOptionExtraDataInner';
import { ApplicationOrderByKeys } from './applicationOrderByKeys';
import { ApplicationReviewStatusEnum } from './applicationReviewStatusEnum';
import { ApplicationStatusEnum } from './applicationStatusEnum';
import { ApplicationSubmissionTypeEnum } from './applicationSubmissionTypeEnum';
import { ApplicationUpdate } from './applicationUpdate';
import { Asset } from './asset';
import { AssetCreate } from './assetCreate';
import { BooleanInput } from './booleanInput';
import { Confirm } from './confirm';
import { ConfirmationRequest } from './confirmationRequest';
import { CreatePresignedUploadMetadata } from './createPresignedUploadMetadata';
import { Demographic } from './demographic';
import { DemographicUpdate } from './demographicUpdate';
import { EmailAndAppUrl } from './emailAndAppUrl';
import { FlaggedSetStatusEnum } from './flaggedSetStatusEnum';
import { HMI } from './hMI';
import { HouseholdMember } from './householdMember';
import { HouseholdMemberUpdate } from './householdMemberUpdate';
import { IdDTO } from './idDTO';
import { IncomePeriodEnum } from './incomePeriodEnum';
import { InputType } from './inputType';
import { Jurisdiction } from './jurisdiction';
import { JurisdictionCreate } from './jurisdictionCreate';
import { JurisdictionUpdate } from './jurisdictionUpdate';
import { LanguagesEnum } from './languagesEnum';
import { Listing } from './listing';
import { ListingCreate } from './listingCreate';
import { ListingEvent } from './listingEvent';
import { ListingEventCreate } from './listingEventCreate';
import { ListingEventsTypeEnum } from './listingEventsTypeEnum';
import { ListingFeatures } from './listingFeatures';
import { ListingFilterParams } from './listingFilterParams';
import { ListingImage } from './listingImage';
import { ListingImageCreate } from './listingImageCreate';
import { ListingMultiselectQuestion } from './listingMultiselectQuestion';
import { ListingOrderByKeys } from './listingOrderByKeys';
import { ListingUpdate } from './listingUpdate';
import { ListingUtilities } from './listingUtilities';
import { ListingViews } from './listingViews';
import { ListingsRetrieveParams } from './listingsRetrieveParams';
import { ListingsStatusEnum } from './listingsStatusEnum';
import { Login } from './login';
import { LoginViaSingleUseCode } from './loginViaSingleUseCode';
import { MapLayerDto } from './mapLayerDto';
import { MfaType } from './mfaType';
import { MinMax } from './minMax';
import { MinMaxCurrency } from './minMaxCurrency';
import { MultiselectLink } from './multiselectLink';
import { MultiselectOption } from './multiselectOption';
import { MultiselectQuestion } from './multiselectQuestion';
import { MultiselectQuestionCreate } from './multiselectQuestionCreate';
import { MultiselectQuestionFilterParams } from './multiselectQuestionFilterParams';
import { MultiselectQuestionQueryParams } from './multiselectQuestionQueryParams';
import { MultiselectQuestionUpdate } from './multiselectQuestionUpdate';
import { MultiselectQuestionsApplicationSectionEnum } from './multiselectQuestionsApplicationSectionEnum';
import { OrderByEnum } from './orderByEnum';
import { PaginatedAfsDto } from './paginatedAfsDto';
import { PaginatedApplicationDto } from './paginatedApplicationDto';
import { PaginatedListingDto } from './paginatedListingDto';
import { PaginatedUserDto } from './paginatedUserDto';
import { PaginationMeta } from './paginationMeta';
import { PaperApplication } from './paperApplication';
import { PaperApplicationCreate } from './paperApplicationCreate';
import { RequestMfaCode } from './requestMfaCode';
import { RequestMfaCodeResponse } from './requestMfaCodeResponse';
import { RequestSingleUseCode } from './requestSingleUseCode';
import { ReservedCommunityType } from './reservedCommunityType';
import { ReservedCommunityTypeCreate } from './reservedCommunityTypeCreate';
import { ReservedCommunityTypeQueryParams } from './reservedCommunityTypeQueryParams';
import { ReservedCommunityTypeUpdate } from './reservedCommunityTypeUpdate';
import { ReviewOrderTypeEnum } from './reviewOrderTypeEnum';
import { RuleEnum } from './ruleEnum';
import { SuccessDTO } from './successDTO';
import { TextInput } from './textInput';
import { Unit } from './unit';
import { UnitAccessibilityPriorityType } from './unitAccessibilityPriorityType';
import { UnitAccessibilityPriorityTypeCreate } from './unitAccessibilityPriorityTypeCreate';
import { UnitAccessibilityPriorityTypeUpdate } from './unitAccessibilityPriorityTypeUpdate';
import { UnitAmiChartOverride } from './unitAmiChartOverride';
import { UnitAmiChartOverrideCreate } from './unitAmiChartOverrideCreate';
import { UnitCreate } from './unitCreate';
import { UnitRentType } from './unitRentType';
import { UnitRentTypeCreate } from './unitRentTypeCreate';
import { UnitRentTypeEnum } from './unitRentTypeEnum';
import { UnitRentTypeUpdate } from './unitRentTypeUpdate';
import { UnitSummary } from './unitSummary';
import { UnitSummaryByAMI } from './unitSummaryByAMI';
import { UnitType } from './unitType';
import { UnitTypeCreate } from './unitTypeCreate';
import { UnitTypeEnum } from './unitTypeEnum';
import { UnitTypeUpdate } from './unitTypeUpdate';
import { UnitsSummarized } from './unitsSummarized';
import { UnitsSummary } from './unitsSummary';
import { UnitsSummaryCreate } from './unitsSummaryCreate';
import { UpdatePassword } from './updatePassword';
import { User } from './user';
import { UserCreate } from './userCreate';
import { UserFilterParams } from './userFilterParams';
import { UserInvite } from './userInvite';
import { UserRole } from './userRole';
import { UserUpdate } from './userUpdate';
import { ValidationMethodEnum } from './validationMethodEnum';
import { YesNoEnum } from './yesNoEnum';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AfsView": AfsView,
        "ApplicationAddressTypeEnum": ApplicationAddressTypeEnum,
        "ApplicationMethodsTypeEnum": ApplicationMethodsTypeEnum,
        "ApplicationOrderByKeys": ApplicationOrderByKeys,
        "ApplicationReviewStatusEnum": ApplicationReviewStatusEnum,
        "ApplicationStatusEnum": ApplicationStatusEnum,
        "ApplicationSubmissionTypeEnum": ApplicationSubmissionTypeEnum,
        "FlaggedSetStatusEnum": FlaggedSetStatusEnum,
        "IncomePeriodEnum": IncomePeriodEnum,
        "InputType": InputType,
        "Jurisdiction.ListingApprovalPermissionsEnum": Jurisdiction.ListingApprovalPermissionsEnum,
        "JurisdictionCreate.ListingApprovalPermissionsEnum": JurisdictionCreate.ListingApprovalPermissionsEnum,
        "JurisdictionUpdate.ListingApprovalPermissionsEnum": JurisdictionUpdate.ListingApprovalPermissionsEnum,
        "LanguagesEnum": LanguagesEnum,
        "ListingEventsTypeEnum": ListingEventsTypeEnum,
        "ListingFilterParams.ComparisonEnum": ListingFilterParams.ComparisonEnum,
        "ListingOrderByKeys": ListingOrderByKeys,
        "ListingViews": ListingViews,
        "ListingsStatusEnum": ListingsStatusEnum,
        "MfaType": MfaType,
        "MultiselectQuestionFilterParams.ComparisonEnum": MultiselectQuestionFilterParams.ComparisonEnum,
        "MultiselectQuestionsApplicationSectionEnum": MultiselectQuestionsApplicationSectionEnum,
        "OrderByEnum": OrderByEnum,
        "ReviewOrderTypeEnum": ReviewOrderTypeEnum,
        "RuleEnum": RuleEnum,
        "UnitRentTypeEnum": UnitRentTypeEnum,
        "UnitTypeEnum": UnitTypeEnum,
        "ValidationMethodEnum": ValidationMethodEnum,
        "YesNoEnum": YesNoEnum,
}

let typeMap: {[index: string]: any} = {
    "Accessibility": Accessibility,
    "AccessibilityUpdate": AccessibilityUpdate,
    "Address": Address,
    "AddressCreate": AddressCreate,
    "AddressInput": AddressInput,
    "AfsMeta": AfsMeta,
    "AfsResolve": AfsResolve,
    "AlternateContact": AlternateContact,
    "AlternateContactUpdate": AlternateContactUpdate,
    "AmiChart": AmiChart,
    "AmiChartCreate": AmiChartCreate,
    "AmiChartItem": AmiChartItem,
    "AmiChartQueryParams": AmiChartQueryParams,
    "AmiChartUpdate": AmiChartUpdate,
    "Applicant": Applicant,
    "ApplicantUpdate": ApplicantUpdate,
    "Application": Application,
    "ApplicationCreate": ApplicationCreate,
    "ApplicationFlaggedSet": ApplicationFlaggedSet,
    "ApplicationFlaggedSetPaginationMeta": ApplicationFlaggedSetPaginationMeta,
    "ApplicationMethod": ApplicationMethod,
    "ApplicationMethodCreate": ApplicationMethodCreate,
    "ApplicationMultiselectQuestion": ApplicationMultiselectQuestion,
    "ApplicationMultiselectQuestionOption": ApplicationMultiselectQuestionOption,
    "ApplicationMultiselectQuestionOptionExtraDataInner": ApplicationMultiselectQuestionOptionExtraDataInner,
    "ApplicationUpdate": ApplicationUpdate,
    "Asset": Asset,
    "AssetCreate": AssetCreate,
    "BooleanInput": BooleanInput,
    "Confirm": Confirm,
    "ConfirmationRequest": ConfirmationRequest,
    "CreatePresignedUploadMetadata": CreatePresignedUploadMetadata,
    "Demographic": Demographic,
    "DemographicUpdate": DemographicUpdate,
    "EmailAndAppUrl": EmailAndAppUrl,
    "HMI": HMI,
    "HouseholdMember": HouseholdMember,
    "HouseholdMemberUpdate": HouseholdMemberUpdate,
    "IdDTO": IdDTO,
    "Jurisdiction": Jurisdiction,
    "JurisdictionCreate": JurisdictionCreate,
    "JurisdictionUpdate": JurisdictionUpdate,
    "Listing": Listing,
    "ListingCreate": ListingCreate,
    "ListingEvent": ListingEvent,
    "ListingEventCreate": ListingEventCreate,
    "ListingFeatures": ListingFeatures,
    "ListingFilterParams": ListingFilterParams,
    "ListingImage": ListingImage,
    "ListingImageCreate": ListingImageCreate,
    "ListingMultiselectQuestion": ListingMultiselectQuestion,
    "ListingUpdate": ListingUpdate,
    "ListingUtilities": ListingUtilities,
    "ListingsRetrieveParams": ListingsRetrieveParams,
    "Login": Login,
    "LoginViaSingleUseCode": LoginViaSingleUseCode,
    "MapLayerDto": MapLayerDto,
    "MinMax": MinMax,
    "MinMaxCurrency": MinMaxCurrency,
    "MultiselectLink": MultiselectLink,
    "MultiselectOption": MultiselectOption,
    "MultiselectQuestion": MultiselectQuestion,
    "MultiselectQuestionCreate": MultiselectQuestionCreate,
    "MultiselectQuestionFilterParams": MultiselectQuestionFilterParams,
    "MultiselectQuestionQueryParams": MultiselectQuestionQueryParams,
    "MultiselectQuestionUpdate": MultiselectQuestionUpdate,
    "PaginatedAfsDto": PaginatedAfsDto,
    "PaginatedApplicationDto": PaginatedApplicationDto,
    "PaginatedListingDto": PaginatedListingDto,
    "PaginatedUserDto": PaginatedUserDto,
    "PaginationMeta": PaginationMeta,
    "PaperApplication": PaperApplication,
    "PaperApplicationCreate": PaperApplicationCreate,
    "RequestMfaCode": RequestMfaCode,
    "RequestMfaCodeResponse": RequestMfaCodeResponse,
    "RequestSingleUseCode": RequestSingleUseCode,
    "ReservedCommunityType": ReservedCommunityType,
    "ReservedCommunityTypeCreate": ReservedCommunityTypeCreate,
    "ReservedCommunityTypeQueryParams": ReservedCommunityTypeQueryParams,
    "ReservedCommunityTypeUpdate": ReservedCommunityTypeUpdate,
    "SuccessDTO": SuccessDTO,
    "TextInput": TextInput,
    "Unit": Unit,
    "UnitAccessibilityPriorityType": UnitAccessibilityPriorityType,
    "UnitAccessibilityPriorityTypeCreate": UnitAccessibilityPriorityTypeCreate,
    "UnitAccessibilityPriorityTypeUpdate": UnitAccessibilityPriorityTypeUpdate,
    "UnitAmiChartOverride": UnitAmiChartOverride,
    "UnitAmiChartOverrideCreate": UnitAmiChartOverrideCreate,
    "UnitCreate": UnitCreate,
    "UnitRentType": UnitRentType,
    "UnitRentTypeCreate": UnitRentTypeCreate,
    "UnitRentTypeUpdate": UnitRentTypeUpdate,
    "UnitSummary": UnitSummary,
    "UnitSummaryByAMI": UnitSummaryByAMI,
    "UnitType": UnitType,
    "UnitTypeCreate": UnitTypeCreate,
    "UnitTypeUpdate": UnitTypeUpdate,
    "UnitsSummarized": UnitsSummarized,
    "UnitsSummary": UnitsSummary,
    "UnitsSummaryCreate": UnitsSummaryCreate,
    "UpdatePassword": UpdatePassword,
    "User": User,
    "UserCreate": UserCreate,
    "UserFilterParams": UserFilterParams,
    "UserInvite": UserInvite,
    "UserRole": UserRole,
    "UserUpdate": UserUpdate,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
