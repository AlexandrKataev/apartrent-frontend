import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'shared/api/config';
import { EstateCreateRequest, EstateDto, EstateUpdateRequest } from 'shared/api/swagger/myApi';

export const estateApi = createApi({
  reducerPath: 'estateApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Estates'],
  endpoints: (build) => ({
    getEstatesList: build.query<EstateDto[], any>({
      query: () => '/Estate/getEstatesList',
      providesTags: ['Estates'],
    }),

    getEstate: build.query<EstateDto, number>({
      query: (id) => `/Estate/getEstate?id=${id}`,
      providesTags: ['Estates'],
    }),

    createEstate: build.mutation<any, EstateCreateRequest>({
      query: (body) => ({
        url: '/Estate/addEstate',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Estates'],
    }),

    updateEstate: build.mutation<any, EstateUpdateRequest>({
      query: (body) => ({
        url: '/Estate/updateEstate',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Estates'],
    }),

    deleteEstate: build.mutation({
      query: (id) => ({ url: `/Estate/deleteEstate?id=${id}`, method: 'DELETE' }),
      invalidatesTags: ['Estates'],
    }),
  }),
});

export const {
  useGetEstatesListQuery,
  useDeleteEstateMutation,
  useCreateEstateMutation,
  useGetEstateQuery,
  useUpdateEstateMutation,
} = estateApi;
