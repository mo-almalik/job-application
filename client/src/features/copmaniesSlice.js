import {createApi,fetchBaseQuery}  from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL

const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials:"include",
})

export const copmaniesSlice = createApi({
    reducerPath: 'copmaniesSlice',
    baseQuery,
   tagTypes: ['Companies'],
    endpoints: (builder) => ({
        getCompany: builder.query({
            query: (id) => `/companies/${id}`,
            providesTags: (result, error, id) => [{ type: 'Companies', id }],
         
        }),
        getCompanies: builder.query({
            query: () => '/companies',
            providesTags: ['Companies'],
          

        }),
        // get my company
        getMyCompany:builder.query({
            query: () => '/companies/myCompany',
            providesTags: ['Companies'],

        }),

        // create a new company
        createCompany: builder.mutation({
            query: (company) => ({
                url: '/companies',
                method: 'POST',
                body: company,
            }),
            invalidatesTags: ['Companies'],
        }),

          // delete company
          deleteCompany: builder.mutation({
            query: (id) => ({
                url: `/companies/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Companies'],

        }),
    }),
    
})


export const {
    useGetCompanyQuery,
    useGetCompaniesQuery,
    useGetMyCompanyQuery,
    useCreateCompanyMutation,
    useDeleteCompanyMutation,
} = copmaniesSlice