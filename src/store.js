import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice"
import jobReducer from "./features/job/jobSlice"
import allJobsReducer from "./features/allJobs/allJobsSlice"
import storeReducer from "./features/store/storeSlice"

export const store =  configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer,
        allJobs: allJobsReducer,
        store: storeReducer
    }
})