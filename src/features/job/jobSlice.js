import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import customFetch from "../../utils/axios";


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
            console.log('here in errror', error.response.data.msg)
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
    }
})

export default jobSlice.reducer