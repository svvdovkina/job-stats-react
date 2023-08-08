import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import customFetch from "../../utils/axios";
import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice";


export const createJob = createAsyncThunk('job/addJob', 
    async (job, thunkAPI) => {
        
        try {
            const resp = await customFetch.post('/jobs', job, {
                headers: {
                    Authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                }
            })
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

export const deleteJob = createAsyncThunk('job/deleteJob', 
    async (jobId, thunkAPI) => {
        thunkAPI.dispatch(showLoading())
        try {
            const resp = await customFetch.delete(`/jobs/${jobId}`, {
                headers: {
                    Authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                }
            })
            thunkAPI.dispatch(getAllJobs())
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        } finally {
            thunkAPI.dispatch(hideLoading())
        }
    }
)

export const editJob = createAsyncThunk('job/editJob',
    async ({jobId, job}, thunkAPI)=>{
        try {
            const resp = await customFetch.patch(`/jobs/${jobId}`,job, {
                headers: {
                    Authorization: `Bearer ${thunkAPI.getState().user.user.token}`
                }
            })
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

const initialState = {
    error: null,
    isLoading: false,
    job: {
        position: '',
        company: '',
        jobLocation: '',
        jobType: 'full-time',
        status: 'pending',
    },
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    statusOptions: ['interview', 'declined', 'pending'],
    isEditing: false,
    editJobId: ''
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        setEditJob: (state, {payload})=>{
            return {
                ...state, 
                isEditing: true,
                ...payload
            }
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(createJob.pending, state=>{
            state.error = null;
            state.isLoading = true;
        })
        .addCase(createJob.fulfilled, (state) => {
            state.isLoading = false;

        })
        .addCase(createJob.rejected, (state, {payload})=>{
            state.isLoading = false;
            state.error = payload;
        })
        .addCase(deleteJob.rejected, (state, {payload})=>{
            state.error = payload;
        })
        .addCase(editJob.pending, state=>{
            state.error = null;
            state.isLoading = true;
        })
        .addCase(editJob.fulfilled, (state) => {
            return initialState;

        })
        .addCase(editJob.rejected, (state, {payload})=>{
            state.isLoading = false;
            state.error = payload;
        })
    }
})

export const {setEditJob} = jobSlice.actions;

export default jobSlice.reducer