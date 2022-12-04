/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResult } from '../models/ApiResult';
import type { CurrentUserDto } from '../models/CurrentUserDto';
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { RegisterRequest } from '../models/RegisterRequest';
import type { UserDto } from '../models/UserDto';
import type { UserUpdateRequest } from '../models/UserUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IdentityService {

    /**
     * [Authorize] Получить информацию по текущему юзеру с его балансом и правами
     * @returns CurrentUserDto Success
     * @throws ApiError
     */
    public static getIdentityCurrent(): CancelablePromise<CurrentUserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Identity/current',
        });
    }

    /**
     * [Authorize] Получить фул юзера (не бэкграунд точка, а для просмотра полностью профиля)
     * @param id 
     * @returns UserDto Success
     * @throws ApiError
     */
    public static getIdentityGetUser(
id?: string,
): CancelablePromise<UserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Identity/getUser',
            query: {
                'id': id,
            },
        });
    }

    /**
     * [Authorize] Обновить информацию пользователя
     * @param requestBody 
     * @returns ApiResult Success
     * @throws ApiError
     */
    public static putIdentityUpdateUser(
requestBody?: UserUpdateRequest,
): CancelablePromise<ApiResult> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/Identity/updateUser',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Регистрация пользователя (Пароль должен быть не слишком простым, в ошибке пишет требования)
     * @param requestBody 
     * @returns ApiResult Success
     * @throws ApiError
     */
    public static postIdentityRegister(
requestBody?: RegisterRequest,
): CancelablePromise<ApiResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/Identity/register',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Логин для получения токена
     * @param requestBody 
     * @returns LoginResponse Success
     * @throws ApiError
     */
    public static postIdentityLogin(
requestBody?: LoginRequest,
): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/Identity/login',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
