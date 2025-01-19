import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_BASE_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
});
export const applicationSlice = createApi({
  reducerPath: "applicationSlice",
  baseQuery,
  endpoints: (builder) => ({
    applyJob: builder.mutation({
      query: ({jobId,formData}) => ({
        url: `application/apply/${jobId}`,
        method: "POST",
        body: formData,
      }),
    }),

    // get application by jobId
    getApplicationByJobId: builder.query({
      query: (jobId) => `/application/${jobId}`,
    }),


    // get applications by user logged employee
    getApplicationsToEmp: builder.query({
      query: ({page=1,limit=12,search}) =>{
        const params = new URLSearchParams({ page, limit })
        if(search){
          params.append('search', search)
        }
        return  `/application/all-app?${params.toString()}`
      },
    }),
  }),
});

export const { useApplyJobMutation ,useGetApplicationByJobIdQuery,useGetApplicationsToEmpQuery } = applicationSlice;
