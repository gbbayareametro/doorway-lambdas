/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface SuccessDTO {
  success: boolean;
}

export enum ListingViews {
  Fundamentals = "fundamentals",
  Base = "base",
  Full = "full",
  Details = "details",
  Csv = "csv",
}

export enum ListingOrderByKeys {
  MostRecentlyUpdated = "mostRecentlyUpdated",
  ApplicationDates = "applicationDates",
  MostRecentlyClosed = "mostRecentlyClosed",
  MostRecentlyPublished = "mostRecentlyPublished",
  Name = "name",
  WaitlistOpen = "waitlistOpen",
  Status = "status",
  UnitsAvailable = "unitsAvailable",
  MarketingType = "marketingType",
}

export enum OrderByEnum {
  Asc = "asc",
  Desc = "desc",
}

export interface ListingsQueryParams {
  /**
   * @default 1
   * @example 1
   */
  page?: number;
  /**
   * @default 10
   * @example 10
   */
  limit?: number;
  /** @example {"$comparison":"=","status":"active"} */
  filter?: string[];
  /** @example "full" */
  view?: ListingViews;
  /** @example "["updatedAt"]" */
  orderBy?: ListingOrderByKeys;
  /**
   * @default "["desc"]"
   * @example "["desc"]"
   */
  orderDir?: OrderByEnum;
  /** @example "search" */
  search?: string;
}

export enum ListingsStatusEnum {
  Active = "active",
  Pending = "pending",
  Closed = "closed",
  PendingReview = "pendingReview",
  ChangesRequested = "changesRequested",
}

export interface ListingFilterParams {
  /**
   * @default "="
   * @example "="
   */
  $comparison: "=" | "<>" | "IN" | ">=" | "<=" | "NA";
  /** @example "Coliseum" */
  name?: string;
  /** @example "active" */
  status?: ListingsStatusEnum;
  /** @example "Fox Creek" */
  neighborhood?: string;
  /** @example "3" */
  bedrooms?: number;
  /** @example "3" */
  bathrooms?: number;
  /** @example "48211" */
  zipcode?: string;
  /** @example "FAB1A3C6-965E-4054-9A48-A282E92E9426" */
  leasingAgents?: string;
  /** @example "bab6cb4f-7a5a-4ee5-b327-0c2508807780" */
  jurisdiction?: string;
  /** @example false */
  isExternal?: boolean;
  /** @example "San Jose" */
  city?: string;
  /** @example "1000" */
  monthlyRent?: number;
  /** @example ["Santa Clara"] */
  counties?: string[];
}

export interface ListingsRetrieveParams {
  /** @example "full" */
  view?: ListingViews;
}

export interface PaginationAllowsAllQueryParams {
  /**
   * @default 1
   * @example 1
   */
  page?: number;
  /**
   * @default 10
   * @example 10
   */
  limit?: number;
}

export interface IdDTO {
  id: string;
  name?: string;
  ordinal?: number;
}

export enum ApplicationAddressTypeEnum {
  LeasingAgent = "leasingAgent",
}

export enum ReviewOrderTypeEnum {
  Lottery = "lottery",
  FirstComeFirstServe = "firstComeFirstServe",
  Waitlist = "waitlist",
}

export interface MultiselectLink {
  title: string;
  url: string;
}

export enum ValidationMethodEnum {
  Radius = "radius",
  Map = "map",
  None = "none",
}

export interface MultiselectOption {
  text: string;
  untranslatedText?: string;
  ordinal: number;
  description?: string;
  links?: MultiselectLink[];
  collectAddress?: boolean;
  validationMethod?: ValidationMethodEnum;
  radiusSize?: number;
  collectName?: boolean;
  collectRelationship?: boolean;
  exclusive?: boolean;
  mapLayerId?: string;
  mapPinPosition?: string;
}

export enum MultiselectQuestionsApplicationSectionEnum {
  Programs = "programs",
  Preferences = "preferences",
}

export interface MultiselectQuestion {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  text: string;
  untranslatedText?: string;
  untranslatedOptOutText?: string;
  subText?: string;
  description?: string;
  links?: MultiselectLink[];
  jurisdictions: IdDTO[];
  options?: MultiselectOption[];
  optOutText?: string;
  hideFromListing?: boolean;
  applicationSection: MultiselectQuestionsApplicationSectionEnum;
}

export interface ListingMultiselectQuestion {
  multiselectQuestions: MultiselectQuestion;
  ordinal?: number;
}

export enum ApplicationMethodsTypeEnum {
  Internal = "Internal",
  FileDownload = "FileDownload",
  ExternalLink = "ExternalLink",
  PaperPickup = "PaperPickup",
  POBox = "POBox",
  LeasingAgent = "LeasingAgent",
  Referral = "Referral",
}

export enum LanguagesEnum {
  En = "en",
  Es = "es",
  Vi = "vi",
  Zh = "zh",
  Tl = "tl",
}

export interface Asset {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  fileId: string;
  label: string;
}

export interface PaperApplication {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  language: LanguagesEnum;
  assets: Asset;
}

export interface ApplicationMethod {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  type: ApplicationMethodsTypeEnum;
  label?: string;
  externalReference?: string;
  acceptsPostmarkedApplications?: boolean;
  phoneNumber?: string;
  paperApplications?: PaperApplication[];
}

export enum ListingEventsTypeEnum {
  OpenHouse = "openHouse",
  PublicLottery = "publicLottery",
  LotteryResults = "lotteryResults",
}

export interface ListingEvent {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  type: ListingEventsTypeEnum;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  endTime?: string;
  url?: string;
  note?: string;
  label?: string;
  assets?: Asset;
}

export interface Address {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  placeName?: string;
  city: string;
  county?: string;
  state: string;
  street: string;
  street2?: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
}

export interface ListingImage {
  assets: Asset;
  ordinal?: number;
}

export interface ListingFeatures {
  elevator?: boolean;
  wheelchairRamp?: boolean;
  serviceAnimalsAllowed?: boolean;
  accessibleParking?: boolean;
  parkingOnSite?: boolean;
  inUnitWasherDryer?: boolean;
  laundryInBuilding?: boolean;
  barrierFreeEntrance?: boolean;
  rollInShower?: boolean;
  grabBars?: boolean;
  heatingInUnit?: boolean;
  acInUnit?: boolean;
  hearing?: boolean;
  visual?: boolean;
  mobility?: boolean;
}

export interface ListingUtilities {
  water?: boolean;
  gas?: boolean;
  trash?: boolean;
  sewer?: boolean;
  electricity?: boolean;
  cable?: boolean;
  phone?: boolean;
  internet?: boolean;
}

export interface AmiChartItem {
  percentOfAmi: number;
  householdSize: number;
  income: number;
}

export interface AmiChart {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  items: AmiChartItem[];
  name: string;
  jurisdictions: IdDTO;
}

export enum UnitTypeEnum {
  Studio = "studio",
  OneBdrm = "oneBdrm",
  TwoBdrm = "twoBdrm",
  ThreeBdrm = "threeBdrm",
  FourBdrm = "fourBdrm",
  SRO = "SRO",
  FiveBdrm = "fiveBdrm",
}

export interface UnitType {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  name: UnitTypeEnum;
  numBedrooms: number;
}

export enum UnitRentTypeEnum {
  Fixed = "fixed",
  PercentageOfIncome = "percentageOfIncome",
}

export interface UnitRentType {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  name: UnitRentTypeEnum;
}

export interface UnitAccessibilityPriorityType {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  name: string;
}

export interface UnitAmiChartOverride {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  items: AmiChartItem[];
}

export interface Unit {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  amiChart?: AmiChart;
  amiPercentage?: string;
  annualIncomeMin?: string;
  monthlyIncomeMin?: string;
  floor?: number;
  annualIncomeMax?: string;
  maxOccupancy?: number;
  minOccupancy?: number;
  monthlyRent?: string;
  numBathrooms?: number;
  numBedrooms?: number;
  number?: string;
  sqFeet?: string;
  monthlyRentAsPercentOfIncome?: string;
  bmrProgramChart?: boolean;
  unitTypes?: UnitType;
  unitRentTypes?: UnitRentType;
  unitAccessibilityPriorityTypes?: UnitAccessibilityPriorityType;
  unitAmiChartOverrides?: UnitAmiChartOverride;
}

export interface MinMaxCurrency {
  min: string;
  max: string;
}

export interface MinMax {
  min: number;
  max: number;
}

export interface UnitSummary {
  unitTypes: UnitType;
  minIncomeRange: MinMaxCurrency;
  occupancyRange: MinMax;
  rentAsPercentIncomeRange: MinMax;
  rentRange: MinMaxCurrency;
  totalAvailable: number;
  areaRange: MinMax;
  floorRange?: MinMax;
}

export interface UnitSummaryByAMI {
  percent: string;
  byUnitType: UnitSummary[];
}

export interface HMI {
  columns: object;
  rows: object[];
}

export interface UnitsSummarized {
  unitTypes: UnitType[];
  priorityTypes: UnitAccessibilityPriorityType[];
  amiPercentages: string[];
  byUnitTypeAndRent: UnitSummary[];
  byUnitType: UnitSummary[];
  byAMI: UnitSummaryByAMI[];
  hmi: HMI;
}

export interface UnitsSummary {
  id: string;
  unitTypes: IdDTO;
  monthlyRentMin?: number;
  monthlyRentMax?: number;
  monthlyRentAsPercentOfIncome?: string;
  amiPercentage?: number;
  minimumIncomeMin?: string;
  minimumIncomeMax?: string;
  maxOccupancy?: number;
  minOccupancy?: number;
  floorMin?: number;
  floorMax?: number;
  sqFeetMin?: string;
  sqFeetMax?: string;
  unitAccessibilityPriorityTypes?: IdDTO;
  totalCount?: number;
  totalAvailable?: number;
}

export interface Listing {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  additionalApplicationSubmissionNotes?: string;
  digitalApplication?: boolean;
  commonDigitalApplication?: boolean;
  paperApplication?: boolean;
  referralOpportunity?: boolean;
  accessibility?: string;
  amenities?: string;
  buildingTotalUnits?: number;
  developer?: string;
  householdSizeMax?: number;
  householdSizeMin?: number;
  neighborhood?: string;
  petPolicy?: string;
  smokingPolicy?: string;
  unitsAvailable?: number;
  unitAmenities?: string;
  servicesOffered?: string;
  yearBuilt?: number;
  /** @format date-time */
  applicationDueDate?: string;
  /** @format date-time */
  applicationOpenDate?: string;
  applicationFee?: string;
  applicationOrganization?: string;
  applicationPickUpAddressOfficeHours?: string;
  applicationPickUpAddressType?: ApplicationAddressTypeEnum;
  applicationDropOffAddressOfficeHours?: string;
  applicationDropOffAddressType?: ApplicationAddressTypeEnum;
  applicationMailingAddressType?: ApplicationAddressTypeEnum;
  buildingSelectionCriteria?: string;
  costsNotIncluded?: string;
  creditHistory?: string;
  criminalBackground?: string;
  depositMin?: string;
  depositMax?: string;
  depositHelperText?: string;
  disableUnitsAccordion?: boolean;
  leasingAgentEmail?: string;
  leasingAgentName?: string;
  leasingAgentOfficeHours?: string;
  leasingAgentPhone?: string;
  leasingAgentTitle?: string;
  name: string;
  /** @format date-time */
  postmarkedApplicationsReceivedByDate?: string;
  programRules?: string;
  rentalAssistance?: string;
  rentalHistory?: string;
  requiredDocuments?: string;
  specialNotes?: string;
  waitlistCurrentSize?: number;
  waitlistMaxSize?: number;
  whatToExpect?: string;
  status: ListingsStatusEnum;
  reviewOrderType?: ReviewOrderTypeEnum;
  applicationConfig?: object;
  displayWaitlistSize: boolean;
  showWaitlist?: boolean;
  reservedCommunityDescription?: string;
  reservedCommunityMinAge?: number;
  resultLink?: string;
  isWaitlistOpen?: boolean;
  waitlistOpenSpots?: number;
  customMapPin?: boolean;
  /** @format date-time */
  contentUpdatedAt?: string;
  /** @format date-time */
  publishedAt?: string;
  /** @format date-time */
  closedAt?: string;
  /** @format date-time */
  afsLastRunAt?: string;
  /** @format date-time */
  lastApplicationUpdateAt?: string;
  listingMultiselectQuestions?: ListingMultiselectQuestion[];
  applicationMethods: ApplicationMethod[];
  referralApplication?: ApplicationMethod;
  assets: Asset[];
  listingEvents: ListingEvent[];
  listingsBuildingAddress: Address;
  listingsApplicationPickUpAddress?: Address;
  listingsApplicationDropOffAddress?: Address;
  listingsApplicationMailingAddress?: Address;
  listingsLeasingAgentAddress?: Address;
  listingsBuildingSelectionCriteriaFile?: Asset;
  jurisdictions: IdDTO;
  listingsResult?: Asset;
  reservedCommunityTypes?: IdDTO;
  listingImages?: ListingImage[];
  listingFeatures?: ListingFeatures;
  listingUtilities?: ListingUtilities;
  units: Unit[];
  unitsSummarized?: UnitsSummarized;
  unitsSummary?: UnitsSummary[];
  urlSlug?: string;
  requestedChanges?: string;
  /** @format date-time */
  requestedChangesDate?: string;
  requestedChangesUser?: IdDTO;
  isExternal?: boolean;
}

export interface PaginationMeta {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface PaginatedListingDto {
  items: Listing[];
  meta: PaginationMeta;
}

export interface UnitAmiChartOverrideCreate {
  items: AmiChartItem[];
}

export interface UnitCreate {
  amiPercentage?: string;
  annualIncomeMin?: string;
  monthlyIncomeMin?: string;
  floor?: number;
  annualIncomeMax?: string;
  maxOccupancy?: number;
  minOccupancy?: number;
  monthlyRent?: string;
  numBathrooms?: number;
  numBedrooms?: number;
  number?: string;
  sqFeet?: string;
  monthlyRentAsPercentOfIncome?: string;
  bmrProgramChart?: boolean;
  unitTypes?: IdDTO;
  amiChart?: IdDTO;
  unitAccessibilityPriorityTypes?: IdDTO;
  unitRentTypes?: IdDTO;
  unitAmiChartOverrides?: UnitAmiChartOverrideCreate;
}

export interface AssetCreate {
  fileId: string;
  label: string;
  id?: string;
}

export interface PaperApplicationCreate {
  language: LanguagesEnum;
  assets?: AssetCreate;
}

export interface ApplicationMethodCreate {
  type: ApplicationMethodsTypeEnum;
  label?: string;
  externalReference?: string;
  acceptsPostmarkedApplications?: boolean;
  phoneNumber?: string;
  paperApplications?: PaperApplicationCreate[];
}

export interface UnitsSummaryCreate {
  unitTypes: IdDTO;
  monthlyRentMin?: number;
  monthlyRentMax?: number;
  monthlyRentAsPercentOfIncome?: string;
  amiPercentage?: number;
  minimumIncomeMin?: string;
  minimumIncomeMax?: string;
  maxOccupancy?: number;
  minOccupancy?: number;
  floorMin?: number;
  floorMax?: number;
  sqFeetMin?: string;
  sqFeetMax?: string;
  unitAccessibilityPriorityTypes?: IdDTO;
  totalCount?: number;
  totalAvailable?: number;
}

export interface ListingImageCreate {
  ordinal?: number;
  assets: AssetCreate;
}

export interface AddressCreate {
  placeName?: string;
  city: string;
  county?: string;
  state: string;
  street: string;
  street2?: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
}

export interface ListingEventCreate {
  type: ListingEventsTypeEnum;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  startTime?: string;
  /** @format date-time */
  endTime?: string;
  url?: string;
  note?: string;
  label?: string;
  assets?: AssetCreate;
}

export interface ListingCreate {
  additionalApplicationSubmissionNotes?: string;
  digitalApplication?: boolean;
  commonDigitalApplication?: boolean;
  paperApplication?: boolean;
  referralOpportunity?: boolean;
  accessibility?: string;
  amenities?: string;
  buildingTotalUnits?: number;
  developer?: string;
  householdSizeMax?: number;
  householdSizeMin?: number;
  neighborhood?: string;
  petPolicy?: string;
  smokingPolicy?: string;
  unitsAvailable?: number;
  unitAmenities?: string;
  servicesOffered?: string;
  yearBuilt?: number;
  /** @format date-time */
  applicationDueDate?: string;
  /** @format date-time */
  applicationOpenDate?: string;
  applicationFee?: string;
  applicationOrganization?: string;
  applicationPickUpAddressOfficeHours?: string;
  applicationPickUpAddressType?: ApplicationAddressTypeEnum;
  applicationDropOffAddressOfficeHours?: string;
  applicationDropOffAddressType?: ApplicationAddressTypeEnum;
  applicationMailingAddressType?: ApplicationAddressTypeEnum;
  buildingSelectionCriteria?: string;
  costsNotIncluded?: string;
  creditHistory?: string;
  criminalBackground?: string;
  depositMin?: string;
  depositMax?: string;
  depositHelperText?: string;
  disableUnitsAccordion?: boolean;
  leasingAgentEmail?: string;
  leasingAgentName?: string;
  leasingAgentOfficeHours?: string;
  leasingAgentPhone?: string;
  leasingAgentTitle?: string;
  name: string;
  /** @format date-time */
  postmarkedApplicationsReceivedByDate?: string;
  programRules?: string;
  rentalAssistance?: string;
  rentalHistory?: string;
  requiredDocuments?: string;
  specialNotes?: string;
  waitlistCurrentSize?: number;
  waitlistMaxSize?: number;
  whatToExpect?: string;
  status: ListingsStatusEnum;
  reviewOrderType?: ReviewOrderTypeEnum;
  displayWaitlistSize: boolean;
  reservedCommunityDescription?: string;
  reservedCommunityMinAge?: number;
  resultLink?: string;
  isWaitlistOpen?: boolean;
  waitlistOpenSpots?: number;
  customMapPin?: boolean;
  /** @format date-time */
  contentUpdatedAt?: string;
  /** @format date-time */
  lastApplicationUpdateAt?: string;
  jurisdictions: IdDTO;
  reservedCommunityTypes?: IdDTO;
  requestedChanges?: string;
  /** @format date-time */
  requestedChangesDate?: string;
  isExternal?: boolean;
  listingMultiselectQuestions?: IdDTO[];
  units?: UnitCreate[];
  applicationMethods?: ApplicationMethodCreate[];
  assets?: AssetCreate[];
  unitsSummary: UnitsSummaryCreate[];
  listingImages?: ListingImageCreate[];
  listingsApplicationPickUpAddress?: AddressCreate;
  listingsApplicationMailingAddress?: AddressCreate;
  listingsApplicationDropOffAddress?: AddressCreate;
  listingsLeasingAgentAddress?: AddressCreate;
  listingsBuildingAddress?: AddressCreate;
  listingsBuildingSelectionCriteriaFile?: AssetCreate;
  listingsResult?: AssetCreate;
  listingEvents: ListingEventCreate[];
  listingFeatures?: ListingFeatures;
  listingUtilities?: ListingUtilities;
  requestedChangesUser?: IdDTO;
}

export interface ListingUpdate {
  id: string;
  additionalApplicationSubmissionNotes?: string;
  digitalApplication?: boolean;
  commonDigitalApplication?: boolean;
  paperApplication?: boolean;
  referralOpportunity?: boolean;
  accessibility?: string;
  amenities?: string;
  buildingTotalUnits?: number;
  developer?: string;
  householdSizeMax?: number;
  householdSizeMin?: number;
  neighborhood?: string;
  petPolicy?: string;
  smokingPolicy?: string;
  unitsAvailable?: number;
  unitAmenities?: string;
  servicesOffered?: string;
  yearBuilt?: number;
  /** @format date-time */
  applicationDueDate?: string;
  /** @format date-time */
  applicationOpenDate?: string;
  applicationFee?: string;
  applicationOrganization?: string;
  applicationPickUpAddressOfficeHours?: string;
  applicationPickUpAddressType?: ApplicationAddressTypeEnum;
  applicationDropOffAddressOfficeHours?: string;
  applicationDropOffAddressType?: ApplicationAddressTypeEnum;
  applicationMailingAddressType?: ApplicationAddressTypeEnum;
  buildingSelectionCriteria?: string;
  costsNotIncluded?: string;
  creditHistory?: string;
  criminalBackground?: string;
  depositMin?: string;
  depositMax?: string;
  depositHelperText?: string;
  disableUnitsAccordion?: boolean;
  leasingAgentEmail?: string;
  leasingAgentName?: string;
  leasingAgentOfficeHours?: string;
  leasingAgentPhone?: string;
  leasingAgentTitle?: string;
  name: string;
  /** @format date-time */
  postmarkedApplicationsReceivedByDate?: string;
  programRules?: string;
  rentalAssistance?: string;
  rentalHistory?: string;
  requiredDocuments?: string;
  specialNotes?: string;
  waitlistCurrentSize?: number;
  waitlistMaxSize?: number;
  whatToExpect?: string;
  status: ListingsStatusEnum;
  reviewOrderType?: ReviewOrderTypeEnum;
  displayWaitlistSize: boolean;
  reservedCommunityDescription?: string;
  reservedCommunityMinAge?: number;
  resultLink?: string;
  isWaitlistOpen?: boolean;
  waitlistOpenSpots?: number;
  customMapPin?: boolean;
  /** @format date-time */
  contentUpdatedAt?: string;
  /** @format date-time */
  lastApplicationUpdateAt?: string;
  jurisdictions: IdDTO;
  reservedCommunityTypes?: IdDTO;
  requestedChanges?: string;
  /** @format date-time */
  requestedChangesDate?: string;
  isExternal?: boolean;
  listingMultiselectQuestions?: IdDTO[];
  units?: UnitCreate[];
  applicationMethods?: ApplicationMethodCreate[];
  assets?: AssetCreate[];
  unitsSummary: UnitsSummaryCreate[];
  listingImages?: ListingImageCreate[];
  listingsApplicationPickUpAddress?: AddressCreate;
  listingsApplicationMailingAddress?: AddressCreate;
  listingsApplicationDropOffAddress?: AddressCreate;
  listingsLeasingAgentAddress?: AddressCreate;
  listingsBuildingAddress?: AddressCreate;
  listingsBuildingSelectionCriteriaFile?: AssetCreate;
  listingsResult?: AssetCreate;
  listingEvents: ListingEventCreate[];
  listingFeatures?: ListingFeatures;
  listingUtilities?: ListingUtilities;
  requestedChangesUser?: IdDTO;
}

export enum AfsView {
  Pending = "pending",
  PendingNameAndDoB = "pendingNameAndDoB",
  PendingEmail = "pendingEmail",
  Resolved = "resolved",
}

export enum RuleEnum {
  NameAndDOB = "nameAndDOB",
  Email = "email",
}

export enum FlaggedSetStatusEnum {
  Flagged = "flagged",
  Pending = "pending",
  Resolved = "resolved",
}

export enum IncomePeriodEnum {
  PerMonth = "perMonth",
  PerYear = "perYear",
}

export enum ApplicationStatusEnum {
  Draft = "draft",
  Submitted = "submitted",
  Removed = "removed",
}

export enum ApplicationSubmissionTypeEnum {
  Paper = "paper",
  Electronical = "electronical",
}

export enum ApplicationReviewStatusEnum {
  Pending = "pending",
  PendingAndValid = "pendingAndValid",
  Valid = "valid",
  Duplicate = "duplicate",
}

export interface Accessibility {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  mobility?: boolean;
  vision?: boolean;
  hearing?: boolean;
}

export interface Demographic {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  ethnicity?: string;
  gender?: string;
  sexualOrientation?: string;
  howDidYouHear?: string[];
  race?: string[];
  spokenLanguage?: string;
}

export enum YesNoEnum {
  Yes = "yes",
  No = "no",
}

export interface Applicant {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  birthMonth?: string;
  birthDay?: string;
  birthYear?: string;
  emailAddress?: string;
  noEmail?: boolean;
  phoneNumber?: string;
  phoneNumberType?: string;
  noPhone?: boolean;
  workInRegion?: YesNoEnum;
  applicantWorkAddress: Address;
  applicantAddress: Address;
}

export enum AlternateContactRelationship {
  FamilyMember = "familyMember",
  Friend = "friend",
  CaseManager = "caseManager",
  Other = "other",
  NoContact = "noContact",
}

export interface AlternateContact {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  type?: AlternateContactRelationship;
  otherType?: string;
  firstName?: string;
  lastName?: string;
  agency?: string;
  phoneNumber?: string;
  emailAddress?: string;
  address: Address;
}

export enum HouseholdMemberRelationship {
  Spouse = "spouse",
  RegisteredDomesticPartner = "registeredDomesticPartner",
  Parent = "parent",
  Child = "child",
  Sibling = "sibling",
  Cousin = "cousin",
  Aunt = "aunt",
  Uncle = "uncle",
  Nephew = "nephew",
  Niece = "niece",
  Grandparent = "grandparent",
  GreatGrandparent = "greatGrandparent",
  InLaw = "inLaw",
  Friend = "friend",
  Other = "other",
}

export interface HouseholdMember {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  orderId?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  birthMonth?: string;
  birthDay?: string;
  birthYear?: string;
  sameAddress?: YesNoEnum;
  relationship?: HouseholdMemberRelationship;
  workInRegion?: YesNoEnum;
  householdMemberWorkAddress?: Address;
  householdMemberAddress: Address;
}

export interface ApplicationMultiselectQuestionOption {
  key: string;
  checked: boolean;
  mapPinPosition?: string;
  extraData?: (BooleanInput | TextInput | AddressInput)[];
}

export interface ApplicationMultiselectQuestion {
  multiselectQuestionId: string;
  key: string;
  claimed: boolean;
  options: ApplicationMultiselectQuestionOption[];
}

export interface Application {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  deletedAt?: string;
  appUrl?: string;
  additionalPhone?: boolean;
  additionalPhoneNumber?: string;
  additionalPhoneNumberType?: string;
  contactPreferences: string[];
  householdSize: number;
  housingStatus?: string;
  sendMailToMailingAddress?: boolean;
  householdExpectingChanges?: boolean;
  householdStudent?: boolean;
  incomeVouchers?: string[];
  income?: string;
  incomePeriod?: IncomePeriodEnum;
  status: ApplicationStatusEnum;
  language?: LanguagesEnum;
  acceptedTerms?: boolean;
  submissionType: ApplicationSubmissionTypeEnum;
  /** @format date-time */
  submissionDate?: string;
  markedAsDuplicate: boolean;
  flagged?: boolean;
  confirmationCode: string;
  reviewStatus?: ApplicationReviewStatusEnum;
  applicationsMailingAddress: Address;
  applicationsAlternateAddress: Address;
  accessibility: Accessibility;
  demographics: Demographic;
  preferredUnitTypes: UnitType[];
  applicant: Applicant;
  alternateContact: AlternateContact;
  householdMember: HouseholdMember[];
  preferences?: ApplicationMultiselectQuestion[];
  programs?: ApplicationMultiselectQuestion[];
  listings: IdDTO;
}

export interface ApplicationFlaggedSet {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  resolvingUser: IdDTO;
  listing: IdDTO;
  rule: RuleEnum;
  ruleKey: string;
  /** @format date-time */
  resolvedTime?: string;
  listingId: string;
  showConfirmationAlert: boolean;
  status: FlaggedSetStatusEnum;
  applications: Application[];
}

export interface ApplicationFlaggedSetPaginationMeta {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  totalFlagged: number;
}

export interface PaginatedAfsDto {
  items: ApplicationFlaggedSet[];
  meta: ApplicationFlaggedSetPaginationMeta;
}

export interface AfsMeta {
  totalCount?: number;
  totalResolvedCount?: number;
  totalPendingCount?: number;
  totalNamePendingCount?: number;
  totalEmailPendingCount?: number;
}

export interface AfsResolve {
  afsId: string;
  status: FlaggedSetStatusEnum;
  applications: IdDTO[];
}

export interface AmiChartQueryParams {
  jurisdictionId?: string;
}

export interface AmiChartCreate {
  items: AmiChartItem[];
  name: string;
  jurisdictions: IdDTO;
}

export interface AmiChartUpdate {
  id: string;
  items: AmiChartItem[];
  name: string;
}

export interface ReservedCommunityTypeQueryParams {
  jurisdictionId?: string;
}

export interface ReservedCommunityType {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  name: string;
  description?: string;
  jurisdictions: IdDTO;
}

export interface ReservedCommunityTypeCreate {
  name: string;
  description?: string;
  jurisdictions: IdDTO;
}

export interface ReservedCommunityTypeUpdate {
  id: string;
  name: string;
  description?: string;
}

export interface UnitTypeCreate {
  name: UnitTypeEnum;
  numBedrooms: number;
}

export interface UnitTypeUpdate {
  id: string;
  name: UnitTypeEnum;
  numBedrooms: number;
}

export interface UnitAccessibilityPriorityTypeCreate {
  name: string;
}

export interface UnitAccessibilityPriorityTypeUpdate {
  id: string;
  name: string;
}

export interface UnitRentTypeCreate {
  name: UnitRentTypeEnum;
}

export interface UnitRentTypeUpdate {
  id: string;
  name: UnitRentTypeEnum;
}

export interface JurisdictionCreate {
  name: string;
  notificationsSignUpUrl?: string;
  languages: LanguagesEnum[];
  partnerTerms?: string;
  publicUrl: string;
  emailFromAddress: string;
  rentalAssistanceDefault: string;
  enablePartnerSettings?: boolean;
  enablePartnerDemographics?: boolean;
  enableListingOpportunity?: boolean;
  enableGeocodingPreferences?: boolean;
  enableGeocodingRadiusMethod?: boolean;
  enableAccessibilityFeatures: boolean;
  enableUtilitiesIncluded: boolean;
  allowSingleUseCodeLogin: boolean;
  /** @example ["admin"] */
  listingApprovalPermissions: (
    | "user"
    | "partner"
    | "admin"
    | "jurisdictionAdmin"
  )[];
}

export interface JurisdictionUpdate {
  id: string;
  name: string;
  notificationsSignUpUrl?: string;
  languages: LanguagesEnum[];
  partnerTerms?: string;
  publicUrl: string;
  emailFromAddress: string;
  rentalAssistanceDefault: string;
  enablePartnerSettings?: boolean;
  enablePartnerDemographics?: boolean;
  enableListingOpportunity?: boolean;
  enableGeocodingPreferences?: boolean;
  enableGeocodingRadiusMethod?: boolean;
  enableAccessibilityFeatures: boolean;
  enableUtilitiesIncluded: boolean;
  allowSingleUseCodeLogin: boolean;
  /** @example ["admin"] */
  listingApprovalPermissions: (
    | "user"
    | "partner"
    | "admin"
    | "jurisdictionAdmin"
  )[];
}

export interface Jurisdiction {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  name: string;
  notificationsSignUpUrl?: string;
  languages: LanguagesEnum[];
  multiselectQuestions: IdDTO[];
  partnerTerms?: string;
  publicUrl: string;
  emailFromAddress: string;
  rentalAssistanceDefault: string;
  enablePartnerSettings?: boolean;
  enablePartnerDemographics?: boolean;
  enableListingOpportunity?: boolean;
  enableGeocodingPreferences?: boolean;
  enableGeocodingRadiusMethod?: boolean;
  enableAccessibilityFeatures: boolean;
  enableUtilitiesIncluded: boolean;
  allowSingleUseCodeLogin: boolean;
  /** @example ["admin"] */
  listingApprovalPermissions: (
    | "user"
    | "partner"
    | "admin"
    | "jurisdictionAdmin"
  )[];
}

export interface MultiselectQuestionCreate {
  text: string;
  untranslatedOptOutText?: string;
  subText?: string;
  description?: string;
  links?: MultiselectLink[];
  jurisdictions: IdDTO[];
  options?: MultiselectOption[];
  optOutText?: string;
  hideFromListing?: boolean;
  applicationSection: MultiselectQuestionsApplicationSectionEnum;
}

export interface MultiselectQuestionUpdate {
  id: string;
  text: string;
  untranslatedOptOutText?: string;
  subText?: string;
  description?: string;
  links?: MultiselectLink[];
  jurisdictions: IdDTO[];
  options?: MultiselectOption[];
  optOutText?: string;
  hideFromListing?: boolean;
  applicationSection: MultiselectQuestionsApplicationSectionEnum;
}

export interface MultiselectQuestionQueryParams {
  /** @example {"$comparison":"=","applicationSection":"programs"} */
  filter?: string[];
}

export interface MultiselectQuestionFilterParams {
  /**
   * @default "="
   * @example "="
   */
  $comparison: "=" | "<>" | "IN" | ">=" | "<=" | "NA";
  /** @example "uuid" */
  jurisdiction?: string;
  /** @example "preferences" */
  applicationSection?: MultiselectQuestionsApplicationSectionEnum;
}

export enum InputType {
  Boolean = "boolean",
  Text = "text",
  Address = "address",
  HhMemberSelect = "hhMemberSelect",
}

export interface AddressInput {
  type: InputType;
  key: string;
  value: AddressCreate;
}

export interface BooleanInput {
  type: InputType;
  key: string;
  value: boolean;
}

export interface TextInput {
  type: InputType;
  key: string;
  value: string;
}

export enum ApplicationOrderByKeys {
  FirstName = "firstName",
  LastName = "lastName",
  SubmissionDate = "submissionDate",
  CreatedAt = "createdAt",
}

export interface PaginatedApplicationDto {
  items: Application[];
  meta: PaginationMeta;
}

export interface ApplicantUpdate {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  birthMonth?: string;
  birthDay?: string;
  birthYear?: string;
  emailAddress?: string;
  noEmail?: boolean;
  phoneNumber?: string;
  phoneNumberType?: string;
  noPhone?: boolean;
  workInRegion?: YesNoEnum;
  applicantAddress: AddressCreate;
  applicantWorkAddress: AddressCreate;
}

export interface AlternateContactUpdate {
  type?: AlternateContactRelationship;
  otherType?: string;
  firstName?: string;
  lastName?: string;
  agency?: string;
  phoneNumber?: string;
  emailAddress?: string;
  address: AddressCreate;
}

export interface AccessibilityUpdate {
  mobility?: boolean;
  vision?: boolean;
  hearing?: boolean;
}

export interface DemographicUpdate {
  ethnicity?: string;
  gender?: string;
  sexualOrientation?: string;
  howDidYouHear?: string[];
  race?: string[];
  spokenLanguage?: string;
}

export interface HouseholdMemberUpdate {
  orderId?: number;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  birthMonth?: string;
  birthDay?: string;
  birthYear?: string;
  sameAddress?: YesNoEnum;
  relationship?: HouseholdMemberRelationship;
  workInRegion?: YesNoEnum;
  id?: string;
  householdMemberAddress: AddressCreate;
  householdMemberWorkAddress?: AddressCreate;
}

export interface ApplicationCreate {
  appUrl?: string;
  additionalPhone?: boolean;
  additionalPhoneNumber?: string;
  additionalPhoneNumberType?: string;
  contactPreferences: string[];
  householdSize: number;
  housingStatus?: string;
  sendMailToMailingAddress?: boolean;
  householdExpectingChanges?: boolean;
  householdStudent?: boolean;
  incomeVouchers?: string[];
  income?: string;
  incomePeriod?: IncomePeriodEnum;
  status: ApplicationStatusEnum;
  language?: LanguagesEnum;
  acceptedTerms?: boolean;
  submissionType: ApplicationSubmissionTypeEnum;
  /** @format date-time */
  submissionDate?: string;
  reviewStatus?: ApplicationReviewStatusEnum;
  preferences?: ApplicationMultiselectQuestion[];
  programs?: ApplicationMultiselectQuestion[];
  listings: IdDTO;
  applicant: ApplicantUpdate;
  applicationsMailingAddress: AddressCreate;
  applicationsAlternateAddress: AddressCreate;
  alternateContact: AlternateContactUpdate;
  accessibility: AccessibilityUpdate;
  demographics: DemographicUpdate;
  householdMember: HouseholdMemberUpdate[];
  preferredUnitTypes: IdDTO[];
}

export interface ApplicationUpdate {
  id: string;
  appUrl?: string;
  additionalPhone?: boolean;
  additionalPhoneNumber?: string;
  additionalPhoneNumberType?: string;
  contactPreferences: string[];
  householdSize: number;
  housingStatus?: string;
  sendMailToMailingAddress?: boolean;
  householdExpectingChanges?: boolean;
  householdStudent?: boolean;
  incomeVouchers?: string[];
  income?: string;
  incomePeriod?: IncomePeriodEnum;
  status: ApplicationStatusEnum;
  language?: LanguagesEnum;
  acceptedTerms?: boolean;
  submissionType: ApplicationSubmissionTypeEnum;
  /** @format date-time */
  submissionDate?: string;
  reviewStatus?: ApplicationReviewStatusEnum;
  preferences?: ApplicationMultiselectQuestion[];
  programs?: ApplicationMultiselectQuestion[];
  listings: IdDTO;
  applicant: ApplicantUpdate;
  applicationsMailingAddress: AddressCreate;
  applicationsAlternateAddress: AddressCreate;
  alternateContact: AlternateContactUpdate;
  accessibility: AccessibilityUpdate;
  demographics: DemographicUpdate;
  householdMember: HouseholdMemberUpdate[];
  preferredUnitTypes: IdDTO[];
}

export interface CreatePresignedUploadMetadata {
  parametersToSign: object;
}

export interface EmailAndAppUrl {
  email: string;
  appUrl?: string;
}

export interface UserRole {
  isAdmin?: boolean;
  isJurisdictionalAdmin?: boolean;
  isPartner?: boolean;
}

export interface User {
  id: string;
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  /** @format date-time */
  passwordUpdatedAt: string;
  passwordValidForDays: number;
  /** @format date-time */
  confirmedAt?: string;
  email: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  /** @format date-time */
  dob?: string;
  phoneNumber?: string;
  listings: IdDTO[] | null;
  userRoles?: UserRole;
  language?: LanguagesEnum;
  jurisdictions: Jurisdiction[];
  mfaEnabled?: boolean;
  /** @format date-time */
  lastLoginAt?: string;
  failedLoginAttemptsCount?: number;
  phoneNumberVerified?: boolean;
  agreedToTermsOfService: boolean;
  /** @format date-time */
  hitConfirmationURL?: string;
  activeAccessToken?: string;
  activeRefreshToken?: string;
}

export interface UserFilterParams {
  /** @example true */
  isPortalUser?: boolean;
}

export interface PaginatedUserDto {
  items: User[];
  meta: PaginationMeta;
}

export interface UserUpdate {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  /** @format date-time */
  dob?: string;
  phoneNumber?: string;
  listings: IdDTO[] | null;
  userRoles?: UserRole;
  language?: LanguagesEnum;
  agreedToTermsOfService: boolean;
  email?: string;
  newEmail?: string;
  password?: string;
  currentPassword?: string;
  appUrl?: string;
  jurisdictions?: IdDTO[];
}

export interface UserCreate {
  firstName: string;
  middleName?: string;
  lastName: string;
  /** @format date-time */
  dob?: string;
  phoneNumber?: string;
  listings: IdDTO[] | null;
  language?: LanguagesEnum;
  agreedToTermsOfService: boolean;
  newEmail?: string;
  appUrl?: string;
  password: string;
  passwordConfirmation: string;
  email: string;
  emailConfirmation?: string;
  jurisdictions?: IdDTO[];
}

export interface UserInvite {
  firstName: string;
  middleName?: string;
  lastName: string;
  /** @format date-time */
  dob?: string;
  phoneNumber?: string;
  listings: IdDTO[] | null;
  userRoles?: UserRole;
  language?: LanguagesEnum;
  newEmail?: string;
  appUrl?: string;
  email: string;
  jurisdictions: IdDTO[];
}

export interface RequestSingleUseCode {
  email: string;
}

export interface ConfirmationRequest {
  token: string;
}

export enum MfaType {
  Sms = "sms",
  Email = "email",
}

export interface Login {
  email: string;
  password: string;
  mfaCode?: string;
  mfaType?: MfaType;
}

export interface LoginViaSingleUseCode {
  email: string;
  singleUseCode: string;
}

export interface RequestMfaCode {
  email: string;
  password: string;
  mfaType: MfaType;
  phoneNumber?: string;
}

export interface RequestMfaCodeResponse {
  phoneNumber?: string;
  email?: string;
  phoneNumberVerified?: boolean;
}

export interface UpdatePassword {
  password: string;
  passwordConfirmation: string;
  token: string;
}

export interface Confirm {
  token: string;
  password?: string;
}

export interface MapLayerDto {
  id: string;
  name: string;
  jurisdictionId: string;
}

export interface DataTransferDTO {
  connectionString: string;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem)
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Bloom API
 * @version 2.0
 * @contact
 *
 * The API for Bloom
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags root
   * @name HealthCheck
   * @summary Health check endpoint
   * @request GET:/
   */
  healthCheck = (params: RequestParams = {}) =>
    this.request<SuccessDTO, any>({
      path: `/`,
      method: "GET",
      format: "json",
      ...params,
    });

  teapot = {
    /**
     * No description
     *
     * @tags root
     * @name Teapot
     * @summary Tip me over and pour me out
     * @request GET:/teapot
     */
    teapot: (params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/teapot`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  clearTempFiles = {
    /**
     * No description
     *
     * @tags root
     * @name ClearTempFiles
     * @summary Trigger the removal of CSVs job
     * @request PUT:/clearTempFiles
     */
    clearTempFiles: (params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/clearTempFiles`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  };
  listings = {
    /**
     * No description
     *
     * @tags listings
     * @name List
     * @summary Get a paginated set of listings
     * @request GET:/listings
     */
    list: (
      query?: {
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        /** @example {"$comparison":"=","status":"active"} */
        filter?: ListingFilterParams[];
        /** @example "full" */
        view?: ListingViews;
        /** @example "["updatedAt"]" */
        orderBy?: ListingOrderByKeys;
        /** @example "["desc"]" */
        orderDir?: OrderByEnum;
        /** @example "search" */
        search?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedListingDto, any>({
        path: `/listings`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags listings
     * @name Create
     * @summary Create listing
     * @request POST:/listings
     */
    create: (data: ListingCreate, params: RequestParams = {}) =>
      this.request<Listing, any>({
        path: `/listings`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags listings
     * @name Delete
     * @summary Delete listing by id
     * @request DELETE:/listings
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/listings`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags listings
     * @name ListCombined
     * @summary List all local and external listings
     * @request GET:/listings/combined
     */
    listCombined: (
      query?: {
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        /** @example {"$comparison":"=","status":"active"} */
        filter?: ListingFilterParams[];
        /** @example "full" */
        view?: ListingViews;
        /** @example "["updatedAt"]" */
        orderBy?: ListingOrderByKeys;
        /** @example "["desc"]" */
        orderDir?: OrderByEnum;
        /** @example "search" */
        search?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/listings/combined`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags listings
     * @name ListAsCsv
     * @summary Get listings and units as zip
     * @request GET:/listings/csv
     */
    listAsCsv: (
      query?: {
        /** @example "America/Los_Angeles" */
        timeZone?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/listings/csv`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags listings
     * @name ExternalRetrieve
     * @summary Get listing for external consumption by id
     * @request GET:/listings/external/{id}
     */
    externalRetrieve: (
      id: string,
      query?: {
        /** @example "full" */
        view?: ListingViews;
      },
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/listings/external/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags listings
     * @name Retrieve
     * @summary Get listing by id
     * @request GET:/listings/{id}
     */
    retrieve: (
      id: string,
      query?: {
        /** @example "full" */
        view?: ListingViews;
      },
      params: RequestParams = {}
    ) =>
      this.request<Listing, any>({
        path: `/listings/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags listings
     * @name Update
     * @summary Update listing by id
     * @request PUT:/listings/{id}
     */
    update: (id: string, data: ListingUpdate, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/listings/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags listings
     * @name Process
     * @summary Trigger the listing process job
     * @request PUT:/listings/process
     */
    process: (params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/listings/process`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags listings
     * @name RetrieveListings
     * @summary Get listings by multiselect question id
     * @request GET:/listings/byMultiselectQuestion/{multiselectQuestionId}
     */
    retrieveListings: (
      multiselectQuestionId: string,
      params: RequestParams = {}
    ) =>
      this.request<IdDTO[], any>({
        path: `/listings/byMultiselectQuestion/${multiselectQuestionId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  applicationFlaggedSets = {
    /**
     * No description
     *
     * @tags applicationFlaggedSets
     * @name List
     * @summary List application flagged sets
     * @request GET:/applicationFlaggedSets
     */
    list: (
      query: {
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        listingId: string;
        /** @example "pending" */
        view?: AfsView;
        /** @example "search" */
        search?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedAfsDto, any>({
        path: `/applicationFlaggedSets`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applicationFlaggedSets
     * @name Meta
     * @summary Meta information for application flagged sets
     * @request GET:/applicationFlaggedSets/meta
     */
    meta: (
      query: {
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        listingId: string;
        /** @example "pending" */
        view?: AfsView;
        /** @example "search" */
        search?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AfsMeta, any>({
        path: `/applicationFlaggedSets/meta`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applicationFlaggedSets
     * @name Retrieve
     * @summary Retrieve application flagged set by id
     * @request GET:/applicationFlaggedSets/{afsId}
     */
    retrieve: (afsId: string, params: RequestParams = {}) =>
      this.request<ApplicationFlaggedSet, any>({
        path: `/applicationFlaggedSets/${afsId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applicationFlaggedSets
     * @name ResetConfirmationAlert
     * @summary Reset flagged set confirmation alert
     * @request PUT:/applicationFlaggedSets/{afsId}
     */
    resetConfirmationAlert: (
      afsId: string,
      data: IdDTO,
      params: RequestParams = {}
    ) =>
      this.request<SuccessDTO, any>({
        path: `/applicationFlaggedSets/${afsId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applicationFlaggedSets
     * @name Resolve
     * @summary Resolve application flagged set
     * @request POST:/applicationFlaggedSets/resolve
     */
    resolve: (data: AfsResolve, params: RequestParams = {}) =>
      this.request<ApplicationFlaggedSet, any>({
        path: `/applicationFlaggedSets/resolve`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applicationFlaggedSets
     * @name Process
     * @summary Trigger the duplicate check process
     * @request PUT:/applicationFlaggedSets/process
     */
    process: (params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/applicationFlaggedSets/process`,
        method: "PUT",
        format: "json",
        ...params,
      }),
  };
  amiCharts = {
    /**
     * No description
     *
     * @tags amiCharts
     * @name List
     * @summary List amiCharts
     * @request GET:/amiCharts
     */
    list: (
      query?: {
        jurisdictionId?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<AmiChart[], any>({
        path: `/amiCharts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags amiCharts
     * @name Create
     * @summary Create amiChart
     * @request POST:/amiCharts
     */
    create: (data: AmiChartCreate, params: RequestParams = {}) =>
      this.request<AmiChart, any>({
        path: `/amiCharts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags amiCharts
     * @name Delete
     * @summary Delete amiChart by id
     * @request DELETE:/amiCharts
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/amiCharts`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags amiCharts
     * @name Retrieve
     * @summary Get amiChart by id
     * @request GET:/amiCharts/{amiChartId}
     */
    retrieve: (amiChartId: string, params: RequestParams = {}) =>
      this.request<AmiChart, any>({
        path: `/amiCharts/${amiChartId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags amiCharts
     * @name Update
     * @summary Update amiChart
     * @request PUT:/amiCharts/{amiChartId}
     */
    update: (
      amiChartId: string,
      data: AmiChartUpdate,
      params: RequestParams = {}
    ) =>
      this.request<AmiChart, any>({
        path: `/amiCharts/${amiChartId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  reservedCommunityTypes = {
    /**
     * No description
     *
     * @tags reservedCommunityTypes
     * @name List
     * @summary List reservedCommunityTypes
     * @request GET:/reservedCommunityTypes
     */
    list: (
      query?: {
        jurisdictionId?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ReservedCommunityType[], any>({
        path: `/reservedCommunityTypes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags reservedCommunityTypes
     * @name Create
     * @summary Create reservedCommunityType
     * @request POST:/reservedCommunityTypes
     */
    create: (data: ReservedCommunityTypeCreate, params: RequestParams = {}) =>
      this.request<ReservedCommunityType, any>({
        path: `/reservedCommunityTypes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags reservedCommunityTypes
     * @name Delete
     * @summary Delete reservedCommunityType by id
     * @request DELETE:/reservedCommunityTypes
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/reservedCommunityTypes`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags reservedCommunityTypes
     * @name Retrieve
     * @summary Get reservedCommunityType by id
     * @request GET:/reservedCommunityTypes/{reservedCommunityTypeId}
     */
    retrieve: (reservedCommunityTypeId: string, params: RequestParams = {}) =>
      this.request<ReservedCommunityType, any>({
        path: `/reservedCommunityTypes/${reservedCommunityTypeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags reservedCommunityTypes
     * @name Update
     * @summary Update reservedCommunityType
     * @request PUT:/reservedCommunityTypes/{reservedCommunityTypeId}
     */
    update: (
      reservedCommunityTypeId: string,
      data: ReservedCommunityTypeUpdate,
      params: RequestParams = {}
    ) =>
      this.request<ReservedCommunityType, any>({
        path: `/reservedCommunityTypes/${reservedCommunityTypeId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  unitTypes = {
    /**
     * No description
     *
     * @tags unitTypes
     * @name List
     * @summary List unitTypes
     * @request GET:/unitTypes
     */
    list: (params: RequestParams = {}) =>
      this.request<UnitType[], any>({
        path: `/unitTypes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitTypes
     * @name Create
     * @summary Create unitType
     * @request POST:/unitTypes
     */
    create: (data: UnitTypeCreate, params: RequestParams = {}) =>
      this.request<UnitType, any>({
        path: `/unitTypes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitTypes
     * @name Delete
     * @summary Delete unitType by id
     * @request DELETE:/unitTypes
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/unitTypes`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitTypes
     * @name Retrieve
     * @summary Get unitType by id
     * @request GET:/unitTypes/{unitTypeId}
     */
    retrieve: (unitTypeId: string, params: RequestParams = {}) =>
      this.request<UnitType, any>({
        path: `/unitTypes/${unitTypeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitTypes
     * @name Update
     * @summary Update unitType
     * @request PUT:/unitTypes/{unitTypeId}
     */
    update: (
      unitTypeId: string,
      data: UnitTypeUpdate,
      params: RequestParams = {}
    ) =>
      this.request<UnitType, any>({
        path: `/unitTypes/${unitTypeId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  unitAccessibilityPriorityTypes = {
    /**
     * No description
     *
     * @tags unitAccessibilityPriorityTypes
     * @name List
     * @summary List unitAccessibilityPriorityTypes
     * @request GET:/unitAccessibilityPriorityTypes
     */
    list: (params: RequestParams = {}) =>
      this.request<UnitAccessibilityPriorityType[], any>({
        path: `/unitAccessibilityPriorityTypes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitAccessibilityPriorityTypes
     * @name Create
     * @summary Create unitAccessibilityPriorityType
     * @request POST:/unitAccessibilityPriorityTypes
     */
    create: (
      data: UnitAccessibilityPriorityTypeCreate,
      params: RequestParams = {}
    ) =>
      this.request<UnitAccessibilityPriorityType, any>({
        path: `/unitAccessibilityPriorityTypes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitAccessibilityPriorityTypes
     * @name Delete
     * @summary Delete unitAccessibilityPriorityType by id
     * @request DELETE:/unitAccessibilityPriorityTypes
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/unitAccessibilityPriorityTypes`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitAccessibilityPriorityTypes
     * @name Retrieve
     * @summary Get unitAccessibilityPriorityType by id
     * @request GET:/unitAccessibilityPriorityTypes/{unitAccessibilityPriorityTypeId}
     */
    retrieve: (
      unitAccessibilityPriorityTypeId: string,
      params: RequestParams = {}
    ) =>
      this.request<UnitAccessibilityPriorityType, any>({
        path: `/unitAccessibilityPriorityTypes/${unitAccessibilityPriorityTypeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitAccessibilityPriorityTypes
     * @name Update
     * @summary Update unitAccessibilityPriorityType
     * @request PUT:/unitAccessibilityPriorityTypes/{unitAccessibilityPriorityTypeId}
     */
    update: (
      unitAccessibilityPriorityTypeId: string,
      data: UnitAccessibilityPriorityTypeUpdate,
      params: RequestParams = {}
    ) =>
      this.request<UnitAccessibilityPriorityType, any>({
        path: `/unitAccessibilityPriorityTypes/${unitAccessibilityPriorityTypeId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  unitRentTypes = {
    /**
     * No description
     *
     * @tags unitRentTypes
     * @name List
     * @summary List unitRentTypes
     * @request GET:/unitRentTypes
     */
    list: (params: RequestParams = {}) =>
      this.request<UnitRentType[], any>({
        path: `/unitRentTypes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitRentTypes
     * @name Create
     * @summary Create unitRentType
     * @request POST:/unitRentTypes
     */
    create: (data: UnitRentTypeCreate, params: RequestParams = {}) =>
      this.request<UnitRentType, any>({
        path: `/unitRentTypes`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitRentTypes
     * @name Delete
     * @summary Delete unitRentType by id
     * @request DELETE:/unitRentTypes
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/unitRentTypes`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitRentTypes
     * @name Retrieve
     * @summary Get unitRentType by id
     * @request GET:/unitRentTypes/{unitRentTypeId}
     */
    retrieve: (unitRentTypeId: string, params: RequestParams = {}) =>
      this.request<UnitRentType, any>({
        path: `/unitRentTypes/${unitRentTypeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags unitRentTypes
     * @name Update
     * @summary Update unitRentType
     * @request PUT:/unitRentTypes/{unitRentTypeId}
     */
    update: (
      unitRentTypeId: string,
      data: UnitRentTypeUpdate,
      params: RequestParams = {}
    ) =>
      this.request<UnitRentType, any>({
        path: `/unitRentTypes/${unitRentTypeId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  jurisdictions = {
    /**
     * No description
     *
     * @tags jurisdictions
     * @name List
     * @summary List jurisdictions
     * @request GET:/jurisdictions
     */
    list: (params: RequestParams = {}) =>
      this.request<Jurisdiction[], any>({
        path: `/jurisdictions`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jurisdictions
     * @name Create
     * @summary Create jurisdiction
     * @request POST:/jurisdictions
     */
    create: (data: JurisdictionCreate, params: RequestParams = {}) =>
      this.request<Jurisdiction, any>({
        path: `/jurisdictions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jurisdictions
     * @name Delete
     * @summary Delete jurisdiction by id
     * @request DELETE:/jurisdictions
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/jurisdictions`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jurisdictions
     * @name Retrieve
     * @summary Get jurisdiction by id
     * @request GET:/jurisdictions/{jurisdictionId}
     */
    retrieve: (jurisdictionId: string, params: RequestParams = {}) =>
      this.request<Jurisdiction, any>({
        path: `/jurisdictions/${jurisdictionId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jurisdictions
     * @name Update
     * @summary Update jurisdiction
     * @request PUT:/jurisdictions/{jurisdictionId}
     */
    update: (
      jurisdictionId: string,
      data: JurisdictionUpdate,
      params: RequestParams = {}
    ) =>
      this.request<Jurisdiction, any>({
        path: `/jurisdictions/${jurisdictionId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags jurisdictions
     * @name RetrieveByName
     * @summary Get jurisdiction by name
     * @request GET:/jurisdictions/byName/{jurisdictionName}
     */
    retrieveByName: (jurisdictionName: string, params: RequestParams = {}) =>
      this.request<Jurisdiction, any>({
        path: `/jurisdictions/byName/${jurisdictionName}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  multiselectQuestions = {
    /**
     * No description
     *
     * @tags multiselectQuestions
     * @name List
     * @summary List multiselect questions
     * @request GET:/multiselectQuestions
     */
    list: (
      query?: {
        /** @example {"$comparison":"=","applicationSection":"programs"} */
        filter?: MultiselectQuestionFilterParams[];
      },
      params: RequestParams = {}
    ) =>
      this.request<MultiselectQuestion[], any>({
        path: `/multiselectQuestions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags multiselectQuestions
     * @name Create
     * @summary Create multiselect question
     * @request POST:/multiselectQuestions
     */
    create: (data: MultiselectQuestionCreate, params: RequestParams = {}) =>
      this.request<MultiselectQuestion, any>({
        path: `/multiselectQuestions`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags multiselectQuestions
     * @name Delete
     * @summary Delete multiselect question by id
     * @request DELETE:/multiselectQuestions
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/multiselectQuestions`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags multiselectQuestions
     * @name Retrieve
     * @summary Get multiselect question by id
     * @request GET:/multiselectQuestions/{multiselectQuestionId}
     */
    retrieve: (multiselectQuestionId: string, params: RequestParams = {}) =>
      this.request<MultiselectQuestion, any>({
        path: `/multiselectQuestions/${multiselectQuestionId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags multiselectQuestions
     * @name Update
     * @summary Update multiselect question
     * @request PUT:/multiselectQuestions/{multiselectQuestionId}
     */
    update: (
      multiselectQuestionId: string,
      data: MultiselectQuestionUpdate,
      params: RequestParams = {}
    ) =>
      this.request<MultiselectQuestion, any>({
        path: `/multiselectQuestions/${multiselectQuestionId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  applications = {
    /**
     * No description
     *
     * @tags applications
     * @name List
     * @summary Get a paginated set of applications
     * @request GET:/applications
     */
    list: (
      query?: {
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        /** @example "listingId" */
        listingId?: string;
        /** @example "search" */
        search?: string;
        /** @example "userId" */
        userId?: string;
        /** @example "createdAt" */
        orderBy?: ApplicationOrderByKeys;
        /** @example "DESC" */
        order?: OrderByEnum;
        /** @example true */
        markedAsDuplicate?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedApplicationDto, any>({
        path: `/applications`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applications
     * @name Create
     * @summary Create application (used by partners to hand create an application)
     * @request POST:/applications
     */
    create: (data: ApplicationCreate, params: RequestParams = {}) =>
      this.request<Application, any>({
        path: `/applications`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applications
     * @name Delete
     * @summary Delete application by id
     * @request DELETE:/applications
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/applications`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applications
     * @name MostRecentlyCreated
     * @summary Get the most recent application submitted by the user
     * @request GET:/applications/mostRecentlyCreated
     */
    mostRecentlyCreated: (
      query: {
        /** @example "userId" */
        userId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Application, any>({
        path: `/applications/mostRecentlyCreated`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applications
     * @name ListAsCsv
     * @summary Get applications as csv
     * @request GET:/applications/csv
     */
    listAsCsv: (
      query: {
        listingId: string;
        /** @example true */
        includeDemographics?: boolean;
        /** @example "America/Los_Angeles" */
        timeZone?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/applications/csv`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags applications
     * @name Retrieve
     * @summary Get application by id
     * @request GET:/applications/{applicationId}
     */
    retrieve: (applicationId: string, params: RequestParams = {}) =>
      this.request<Application, any>({
        path: `/applications/${applicationId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applications
     * @name Update
     * @summary Update application by id
     * @request PUT:/applications/{applicationId}
     */
    update: (
      id: string,
      applicationId: string,
      data: ApplicationUpdate,
      params: RequestParams = {}
    ) =>
      this.request<Application, any>({
        path: `/applications/${applicationId}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applications
     * @name Submit
     * @summary Submit application (used by applicants applying to a listing)
     * @request POST:/applications/submit
     */
    submit: (data: ApplicationCreate, params: RequestParams = {}) =>
      this.request<Application, any>({
        path: `/applications/submit`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags applications
     * @name SubmissionValidation
     * @summary Verify application can be saved
     * @request POST:/applications/verify
     */
    submissionValidation: (
      data: ApplicationCreate,
      params: RequestParams = {}
    ) =>
      this.request<SuccessDTO, any>({
        path: `/applications/verify`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  asset = {
    /**
     * No description
     *
     * @tags asset
     * @name Create
     * @summary Create asset
     * @request POST:/asset
     * @secure
     */
    create: (data: AssetCreate, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/asset`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags asset
     * @name List
     * @summary List assets
     * @request GET:/asset
     * @secure
     */
    list: (
      query?: {
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/asset`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags asset
     * @name Upload
     * @summary Upload asset
     * @request POST:/asset/upload
     * @secure
     */
    upload: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/asset/upload`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags asset
     * @name CreatePresignedUploadMetadata
     * @summary Create presigned upload metadata
     * @request POST:/asset/presigned-upload-metadata
     * @secure
     */
    createPresignedUploadMetadata: (
      data: CreatePresignedUploadMetadata,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/asset/presigned-upload-metadata`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags asset
     * @name Retrieve
     * @summary Get asset by id
     * @request GET:/asset/{assetId}
     * @secure
     */
    retrieve: (assetId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/asset/${assetId}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags user
     * @name Profile
     * @summary Get a user from cookies
     * @request GET:/user
     */
    profile: (params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/user`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name Delete
     * @summary Delete user by id
     * @request DELETE:/user
     */
    delete: (data: IdDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/user`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name Create
     * @summary Creates a public only user
     * @request POST:/user
     */
    create: (
      data: UserCreate,
      query?: {
        /** @example true */
        noWelcomeEmail?: boolean;
      },
      params: RequestParams = {}
    ) =>
      this.request<User, any>({
        path: `/user`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name List
     * @summary Get a paginated set of users
     * @request GET:/user/list
     */
    list: (
      query?: {
        /**
         * @default 1
         * @example 1
         */
        page?: number;
        /**
         * @default 10
         * @example 10
         */
        limit?: number;
        /** @example {"isPartner":true} */
        filter?: UserFilterParams[];
        /** @example "search" */
        search?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedUserDto, any>({
        path: `/user/list`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name ListAsCsv
     * @summary List users in CSV
     * @request GET:/user/csv
     */
    listAsCsv: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/csv`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name Retrieve
     * @summary Get user by id
     * @request GET:/user/{id}
     */
    retrieve: (id: string, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/user/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name Update
     * @summary Update user
     * @request PUT:/user/{id}
     */
    update: (id: string, data: UserUpdate, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/user/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name ForgotPassword
     * @summary Forgot Password
     * @request PUT:/user/forgot-password
     */
    forgotPassword: (data: EmailAndAppUrl, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/user/forgot-password`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name Invite
     * @summary Invite partner user
     * @request POST:/user/invite
     */
    invite: (data: UserInvite, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/user/invite`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name RequestSingleUseCode
     * @summary Request single use code
     * @request POST:/user/request-single-use-code
     */
    requestSingleUseCode: (
      data: RequestSingleUseCode,
      params: RequestParams = {}
    ) =>
      this.request<SuccessDTO, any>({
        path: `/user/request-single-use-code`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name ResendConfirmation
     * @summary Resend public confirmation
     * @request POST:/user/resend-confirmation
     */
    resendConfirmation: (data: EmailAndAppUrl, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/user/resend-confirmation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name ResendPartnerConfirmation
     * @summary Resend partner confirmation
     * @request POST:/user/resend-partner-confirmation
     */
    resendPartnerConfirmation: (
      data: EmailAndAppUrl,
      params: RequestParams = {}
    ) =>
      this.request<SuccessDTO, any>({
        path: `/user/resend-partner-confirmation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags user
     * @name IsUserConfirmationTokenValid
     * @summary Verifies token is valid
     * @request POST:/user/is-confirmation-token-valid
     */
    isUserConfirmationTokenValid: (
      data: ConfirmationRequest,
      params: RequestParams = {}
    ) =>
      this.request<SuccessDTO, any>({
        path: `/user/is-confirmation-token-valid`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name Login
     * @summary Login
     * @request POST:/auth/login
     */
    login: (data: Login, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name LoginViaASingleUseCode
     * @summary LoginViaSingleUseCode
     * @request POST:/auth/loginViaSingleUseCode
     */
    loginViaASingleUseCode: (
      data: LoginViaSingleUseCode,
      params: RequestParams = {}
    ) =>
      this.request<SuccessDTO, any>({
        path: `/auth/loginViaSingleUseCode`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name Logout
     * @summary Logout
     * @request GET:/auth/logout
     */
    logout: (params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/auth/logout`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name RequestMfaCode
     * @summary Request mfa code
     * @request POST:/auth/request-mfa-code
     */
    requestMfaCode: (data: RequestMfaCode, params: RequestParams = {}) =>
      this.request<RequestMfaCodeResponse, any>({
        path: `/auth/request-mfa-code`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name RequestNewToken
     * @summary Requests a new token given a refresh token
     * @request GET:/auth/requestNewToken
     */
    requestNewToken: (params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/auth/requestNewToken`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name UpdatePassword
     * @summary Update Password
     * @request PUT:/auth/update-password
     */
    updatePassword: (data: UpdatePassword, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/auth/update-password`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name Confirm
     * @summary Confirm email
     * @request PUT:/auth/confirm
     */
    confirm: (data: Confirm, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/auth/confirm`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  mapLayers = {
    /**
     * No description
     *
     * @tags mapLayers
     * @name List
     * @summary List map layers
     * @request GET:/mapLayers
     */
    list: (
      query?: {
        jurisdictionId?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<MapLayerDto[], any>({
        path: `/mapLayers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  scriptRunner = {
    /**
     * No description
     *
     * @tags scriptRunner
     * @name ExampleScript
     * @summary An example of how the script runner can work
     * @request PUT:/scriptRunner/exampleScript
     */
    exampleScript: (params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/scriptRunner/exampleScript`,
        method: "PUT",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags scriptRunner
     * @name DataTransfer
     * @summary A script that pulls data from one source into the current db
     * @request PUT:/scriptRunner/dataTransfer
     */
    dataTransfer: (data: DataTransferDTO, params: RequestParams = {}) =>
      this.request<SuccessDTO, any>({
        path: `/scriptRunner/dataTransfer`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
