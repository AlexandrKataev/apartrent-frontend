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

export interface ApiResult {
  successfully: boolean;
  message: string | null;
}

export interface CurrentUserDto {
  id: string | null;
  name: string | null;
  groups: string[] | null;
  /** @format double */
  balance: number;
  permissions: string[] | null;
}

export interface EstateCreateRequest {
  name: string | null;
  /** @format int32 */
  id: number;
  description: string | null;
  /** @format double */
  buyPrice: number;
  /** @format double */
  rentPayment: number;
  status: EstateStatus;
}

export interface EstateDto {
  /** @format int32 */
  id: number;
  name: string | null;
  description: string | null;
  /** @format double */
  buyPrice: number;
  /** @format double */
  rentPayment: number;
  status: EstateStatus;
  /** @format date-time */
  lastUpdated: string;
}

export interface EstateGridDto {
  /** @format int32 */
  id: number;
  name: string | null;
  /** @format double */
  buyPrice: number;
  /** @format double */
  rentPayment: number;
  /** @format date-time */
  lastUpdated: string;
  status: EstateStatus;
}

export enum EstateStatus {
  None = 'none',
  PreparingForInvestments = 'preparingForInvestments',
  Announcement = 'announcement',
  Fundraising = 'fundraising',
  BuyingEstate = 'buyingEstate',
  PreparingForRent = 'preparingForRent',
  Rented = 'rented',
  LookingForTenants = 'lookingForTenants',
  PreparingForSell = 'preparingForSell',
  Sold = 'sold',
}

export interface EstateUpdateRequest {
  /** @format int32 */
  id: number;
  name: string | null;
  description: string | null;
  /** @format double */
  buyPrice: number;
  /** @format double */
  rentPayment: number;
  status: EstateStatus;
}

export interface LoginRequest {
  username: string | null;
  password: string | null;
}

export interface LoginResponse {
  token: string | null;
  /** @format date-time */
  validTo: string;
}

export interface RegisterRequest {
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  password: string | null;
}

export interface UserDto {
  id: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  phoneNumber: string | null;
}

export interface UserUpdateRequest {
  id: string | null;
  firstname: string | null;
  lastname: string | null;
  email: string | null;
  phoneNumber: string | null;
}
