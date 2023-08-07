import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialFiltersState = {
    search: '',
    searchStatus: 'all',
    searchType: 'all',
    sort: 'latest',
    sortOptions: ['latest', 'oldest', 'a-z', 'z-a']
}

const initialState = {
    isLoading: false,
    error: null,
    jobs: [],
    totalJobs: 0,
    numOfPages: 1,
    page: 1,
    stats: {},
    monthlyApplications: [],
    ...initialFiltersState
}

export const getAllJobs = createAsyncThunk('allJobs/getJobs',
    async (_, thunkAPI) => {
        try {
            const resp = await customFetch('/jobs', {
                headers: {
                    Authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                }
            });
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
)

export const allJobsSlice = createSlice({
    name: 'allJobs',
    initialState,
    reducers: {
        showLoading: (state)=> {
            state.isLoading = true;
        },
        hideLoading: (state)=> {
            state.isLoading = false;
        },
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getAllJobs.pending, (state)=>{
            state.isLoading = true
        } )
        .addCase(getAllJobs.fulfilled, (state, {payload})=>{
            state.jobs = payload.jobs;
            state.isLoading = false
        })
        .addCase(getAllJobs.rejected, (state, {payload})=>{
            state.error = payload
            state.isLoading = false
        })
    }
})

export const {showLoading, hideLoading} = allJobsSlice.actions;

export default allJobsSlice.reducer