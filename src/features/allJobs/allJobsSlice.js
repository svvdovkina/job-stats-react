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
    async (queryParams, thunkAPI) => {
        const {page} = queryParams;
        const query = `/jobs?page=${page}`
        try {
            const resp = await customFetch(query, {
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

export const showStats = createAsyncThunk('allJobs/showStats', 
    async (_, thunkAPI) => {
        try {
            const resp = await customFetch('/jobs/stats', {
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
        handleChange: (state, {payload})=>{
            const {name, value} = payload;
            state[name] = value;
        },
        clearFilteres: (state)=>{
            return {
                ...state,
                ...initialFiltersState
            }
        },
        changePage: (state, {payload})=>{
            state.page = payload;
        }

    },
    extraReducers: (builder)=>{
        builder
        .addCase(getAllJobs.pending, (state)=>{
            state.isLoading = true
        } )
        .addCase(getAllJobs.fulfilled, (state, {payload})=>{
            state.jobs = payload.jobs;
            state.totalJobs = payload.totalJobs;
            state.numOfPages = payload.numOfPages;
            state.isLoading = false
        })
        .addCase(getAllJobs.rejected, (state, {payload})=>{
            state.error = payload
            state.isLoading = false
        })
        .addCase(showStats.pending, (state)=>{
            state.isLoading = true
        } )
        .addCase(showStats.fulfilled, (state, {payload})=>{
            state.stats = payload.defaultStats;
            state.monthlyApplications = payload.monthlyApplications;
            state.isLoading = false
        })
        .addCase(showStats.rejected, (state, {payload})=>{
            state.error = payload
            state.isLoading = false
        })
    }
})

export const {
    showLoading, 
    hideLoading, 
    handleChange, 
    clearFilteres,
    changePage
} = allJobsSlice.actions;

export default allJobsSlice.reducer