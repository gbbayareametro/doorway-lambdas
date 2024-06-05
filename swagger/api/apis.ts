export * from './amiChartsApi';
import { AmiChartsApi } from './amiChartsApi';
export * from './applicationFlaggedSetsApi';
import { ApplicationFlaggedSetsApi } from './applicationFlaggedSetsApi';
export * from './applicationsApi';
import { ApplicationsApi } from './applicationsApi';
export * from './assetApi';
import { AssetApi } from './assetApi';
export * from './authApi';
import { AuthApi } from './authApi';
export * from './jurisdictionsApi';
import { JurisdictionsApi } from './jurisdictionsApi';
export * from './listingsApi';
import { ListingsApi } from './listingsApi';
export * from './mapLayersApi';
import { MapLayersApi } from './mapLayersApi';
export * from './multiselectQuestionsApi';
import { MultiselectQuestionsApi } from './multiselectQuestionsApi';
export * from './reservedCommunityTypesApi';
import { ReservedCommunityTypesApi } from './reservedCommunityTypesApi';
export * from './rootApi';
import { RootApi } from './rootApi';
export * from './unitAccessibilityPriorityTypesApi';
import { UnitAccessibilityPriorityTypesApi } from './unitAccessibilityPriorityTypesApi';
export * from './unitRentTypesApi';
import { UnitRentTypesApi } from './unitRentTypesApi';
export * from './unitTypesApi';
import { UnitTypesApi } from './unitTypesApi';
export * from './userApi';
import { UserApi } from './userApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AmiChartsApi, ApplicationFlaggedSetsApi, ApplicationsApi, AssetApi, AuthApi, JurisdictionsApi, ListingsApi, MapLayersApi, MultiselectQuestionsApi, ReservedCommunityTypesApi, RootApi, UnitAccessibilityPriorityTypesApi, UnitRentTypesApi, UnitTypesApi, UserApi];
