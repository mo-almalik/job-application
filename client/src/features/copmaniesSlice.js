import {createApi,fetchBaseQuery}  from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL

const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials:"include",
})

export const copmaniesSlice = createApi({
    reducerPath: 'copmaniesSlice',
    baseQuery,
    tagTypes:['Companies'],
    endpoints: (builder) => ({
        getCompany: builder.query({
            query: (id) => `/companies/${id}`,
        }),
        getCompanies: builder.query({
            query: () => '/companies',
        }),
        // get my company
        getMyCompany:builder.query({
            query: () => '/companies/myCompany',
        })
    }),
    
})


export const {
    useGetCompanyQuery,
    useGetCompaniesQuery,
    useGetMyCompanyQuery,
} = copmaniesSlice