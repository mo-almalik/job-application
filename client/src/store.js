import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './features/authApi'
import {jobSlice} from "./features/jobSlice.js";
import { applicationSlice } from './features/applicationSlice.js';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [jobSlice.reducerPath]: jobSlice.reducer,
    [applicationSlice.reducerPath]: applicationSlice.reducer,
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
      authApi.middleware,
      jobSlice.middleware,
      applicationSlice.middleware,
  )
})