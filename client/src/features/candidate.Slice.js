// import {createApi,fetchBaseQuery}  from "@reduxjs/toolkit/query/react";

// const baseUrl = import.meta.env.VITE_BASE_URL

// const baseQuery = fetchBaseQuery({
//     baseUrl,
//     credentials:"include",
// })

// export const candidateSclice = createApi({
//     reducerPath: 'candidateSlice',
//     baseQuery,
//     tagTypes:['Candidates'],
//     endpoints: (builder) => ({
//         getCandidate: builder.query({
//             query: (id) => `/candidates/${id}`,
//         }),
//         getMyApplications: builder.query({
//             query: () => '/applications/my',
//         }),
//         getApplicationsByCandidate: builder.query({
//             query: (candidateId) => `/applications?candidateId=${candidateId}`,
//         }),
//         getApplicationsByJob: builder.query({
//             query: (jobId) => `/applications?jobId=${jobId}`,
//         }),
//         getApplicationsByStatus: builder.query({
//             query: (status) => `/applications?status=${status}`,
//         }),
//         getApplicationsByLocation: builder.query({
//             query: (location) => `/applications?location=${location}`,
//         }),
//         getApplicationsBySkills: builder.query({
//             query: (skills) => `/applications?skills=${skills}`,
//         }),
//     })
// })