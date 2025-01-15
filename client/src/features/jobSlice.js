import {createApi,fetchBaseQuery}  from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL

const baseQuery = fetchBaseQuery({
    baseUrl,
    credentials:"include",
})

export const jobSlice = createApi({
    reducerPath: 'jobSlice',
    baseQuery,
    tagTypes:['Jobs'],
    endpoints: (builder) => ({
        getJobs:builder.query({
            query({page=1,limit=12,search}) {
                const params = new URLSearchParams({ page ,limit })
                if(search){
                    params.append('search', search)
                }

                return `/job?${params.toString()}`
            },
            providesTags:'jobs'
        }),

        // get my job
        getMyjob:builder.query({
            query({page=1,limit=12,search}) {
                const params = new URLSearchParams({ page ,limit })
                if(search){
                    params.append('search', search)
                }

                return `/job/my-job?${params.toString()}`
            },
            providesTags:'jobs'
        }),

        // get one job
        getOneJob: builder.query({
            query: (id) => `/job/${id}`,
        }),
        // create new job
        createJob: builder.mutation({
            query: (job) => ({
                url: '/job',
                method: 'POST',
                body: job,
            }),
            invalidatesTags: ['jobs']
        }),
        // update job
        updateJob: builder.mutation({
            query: (job) => ({
                url: `/job/${job._id}`,
                method: 'PUT',
                body: job,
            }),
            invalidatesTags: ['jobs']
        }),
        // delete job
        deleteJob: builder.mutation({
            query: (id) => ({
                url: `/job/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['jobs']
        }),

    })
})

export const  {useGetJobsQuery,useGetOneJobQuery, useCreateJobMutation, useUpdateJobMutation, useDeleteJobMutation ,useGetMyjobQuery} = jobSlice
