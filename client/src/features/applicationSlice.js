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
  }),
});

export const { useApplyJobMutation } = applicationSlice;
