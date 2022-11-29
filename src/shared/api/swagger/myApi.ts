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
  successfully?: boolean;
  message?: string | null;
}

export interface CurrentUserDto {
  id?: string | null;
  name?: string | null;
  groups?: string[] | null;
  /** @format double */
  balance?: number;
  permissions?: string[] | null;
}

export interface EstateCreateRequest {
  name?: string | null;
  /** @format int32 */
  id?: number;
  description?: string | null;
  /** @format double */
  buyPrice?: number;
  /** @format double */
  rentPayment?: number;
  status?: EstateStatus;
}

export interface EstateDto {
  /** @format int32 */
  id?: number;
  name?: string;
  description?: string;
  /** @format double */
  buyPrice?: number;
  /** @format double */
  rentPayment?: number;
  status?: EstateStatus;
  /** @format date-time */
  lastUpdated?: string;
}

export interface EstateGridDto {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format double */
  buyPrice?: number;
  /** @format double */
  rentPayment?: number;
  /** @format date-time */
  lastUpdated?: string;
  status?: EstateStatus;
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
  id?: number;
  name?: string | null;
  description?: string | null;
  /** @format double */
  buyPrice?: number;
  /** @format double */
  rentPayment?: number;
  status?: EstateStatus;
}

export interface LoginRequest {
  username?: string | null;
  password?: string | null;
}

export interface LoginResponse {
  token?: string | null;
  /** @format date-time */
  validTo?: string;
}

export interface RegisterRequest {
  username?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  password?: string | null;
}

export interface UserDto {
  id?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
}

export interface UserUpdateRequest {
  id?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = '';
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&');
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key]);
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join('&');
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : '';
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== 'string' ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        },
        signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
        body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title ApartRent API
 * @version v1
 *
 *
 * После LoginUser тебе выдает Token, который нужно будет указать в пункте Authorize.
 * Не забудь сперва написать Bearer а после токен.
 * Пример: 'Bearer token'. Иначе методы с [Authorize] будут кидать 401
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  estate = {
    /**
     * No description
     *
     * @tags Estate
     * @name AddEstateCreate
     * @summary Добавить новую недвижимость(Estate)
     * @request POST:/Estate/addEstate
     * @secure
     */
    addEstateCreate: (data: EstateCreateRequest, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Estate/addEstate`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Estate
     * @name UpdateEstatePartialUpdate
     * @summary Изменить недвижимость (ID должен быть от существующей сущности, и не равен 0)
     * @request PATCH:/Estate/updateEstate
     * @secure
     */
    updateEstatePartialUpdate: (data: EstateUpdateRequest, params: RequestParams = {}) =>
      this.request<number, any>({
        path: `/Estate/updateEstate`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Estate
     * @name GetEstatesList
     * @summary Получить список сущностей
     * @request GET:/Estate/getEstatesList
     * @secure
     */
    getEstatesList: (params: RequestParams = {}) =>
      this.request<EstateGridDto[], any>({
        path: `/Estate/getEstatesList`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Estate
     * @name GetEstate
     * @summary Получить Estate по id
     * @request GET:/Estate/getEstate
     * @secure
     */
    getEstate: (
      query?: {
        /** @format int32 */
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<EstateDto, any>({
        path: `/Estate/getEstate`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Estate
     * @name DeleteEstateDelete
     * @summary Удалить сущность по id
     * @request DELETE:/Estate/deleteEstate
     * @secure
     */
    deleteEstateDelete: (
      query?: {
        /** @format int32 */
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiResult, any>({
        path: `/Estate/deleteEstate`,
        method: 'DELETE',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Estate
     * @name GetException
     * @summary Просто кидает ошибку с ру-текстом, дабы было на чем потренить хенлдить ошибки.
     * @request GET:/Estate/getException
     * @secure
     */
    getException: (params: RequestParams = {}) =>
      this.request<EstateDto, any>({
        path: `/Estate/getException`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  };
  identity = {
    /**
     * No description
     *
     * @tags Identity
     * @name CurrentList
     * @summary [Authorize] Получить информацию по текущему юзеру с его балансом и правами
     * @request GET:/Identity/current
     * @secure
     */
    currentList: (params: RequestParams = {}) =>
      this.request<CurrentUserDto, any>({
        path: `/Identity/current`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name GetUserList
     * @summary [Authorize] Получить фул юзера (не бэкграунд точка, а для просмотра полностью профиля)
     * @request GET:/Identity/getUser
     * @secure
     */
    getUserList: (
      query?: {
        id?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<UserDto, any>({
        path: `/Identity/getUser`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name UpdateUserUpdate
     * @summary [Authorize] Обновить информацию пользователя
     * @request PUT:/Identity/updateUser
     * @secure
     */
    updateUserUpdate: (data: UserUpdateRequest, params: RequestParams = {}) =>
      this.request<ApiResult, any>({
        path: `/Identity/updateUser`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name RegisterCreate
     * @summary Регистрация пользователя (Пароль должен быть не слишком простым, в ошибке пишет требования)
     * @request POST:/Identity/register
     * @secure
     */
    registerCreate: (data: RegisterRequest, params: RequestParams = {}) =>
      this.request<ApiResult, any>({
        path: `/Identity/register`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name LoginCreate
     * @summary Логин для получения токена
     * @request POST:/Identity/login
     * @secure
     */
    loginCreate: (data: LoginRequest, params: RequestParams = {}) =>
      this.request<LoginResponse, any>({
        path: `/Identity/login`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
