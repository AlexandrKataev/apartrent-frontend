/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { ApiResult } from './models/ApiResult';
export type { CurrentUserDto } from './models/CurrentUserDto';
export type { EstateCreateRequest } from './models/EstateCreateRequest';
export type { EstateDto } from './models/EstateDto';
export type { EstateGridDto } from './models/EstateGridDto';
export { EstateStatus } from './models/EstateStatus';
export type { EstateUpdateRequest } from './models/EstateUpdateRequest';
export type { LoginRequest } from './models/LoginRequest';
export type { LoginResponse } from './models/LoginResponse';
export type { RegisterRequest } from './models/RegisterRequest';
export type { UserDto } from './models/UserDto';
export type { UserUpdateRequest } from './models/UserUpdateRequest';

export { EstateService } from './services/EstateService';
export { IdentityService } from './services/IdentityService';
