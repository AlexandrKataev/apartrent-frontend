/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResult } from '../models/ApiResult';
import type { EstateCreateRequest } from '../models/EstateCreateRequest';
import type { EstateDto } from '../models/EstateDto';
import type { EstateGridDto } from '../models/EstateGridDto';
import type { EstateUpdateRequest } from '../models/EstateUpdateRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EstateService {

    /**
     * Добавить новую недвижимость(Estate)
     * @param requestBody Модель новой недвижки
     * @returns number Success
     * @throws ApiError
     */
    public static postEstateAddEstate(
requestBody?: EstateCreateRequest,
): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/Estate/addEstate',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Изменить недвижимость (ID должен быть от существующей сущности, и не равен 0)
     * @param requestBody Обновленная модель
     * @returns number Success
     * @throws ApiError
     */
    public static patchEstateUpdateEstate(
requestBody?: EstateUpdateRequest,
): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/Estate/updateEstate',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Получить список сущностей
     * @returns EstateGridDto Success
     * @throws ApiError
     */
    public static getEstatesList(): CancelablePromise<Array<EstateGridDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Estate/getEstatesList',
        });
    }

    /**
     * Получить Estate по id
     * @param id 
     * @returns EstateDto Success
     * @throws ApiError
     */
    public static getEstate(
id?: number,
): CancelablePromise<EstateDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Estate/getEstate',
            query: {
                'id': id,
            },
        });
    }

    /**
     * Удалить сущность по id
     * @param id 
     * @returns ApiResult Success
     * @throws ApiError
     */
    public static deleteEstateDeleteEstate(
id?: number,
): CancelablePromise<ApiResult> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/Estate/deleteEstate',
            query: {
                'id': id,
            },
        });
    }

    /**
     * Просто кидает ошибку с ру-текстом, дабы было на чем потренить хенлдить ошибки.
     * @returns EstateDto Success
     * @throws ApiError
     */
    public static getException(): CancelablePromise<EstateDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/Estate/getException',
        });
    }

}
