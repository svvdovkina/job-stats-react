import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { logoutUser } from "../user/userSlice";

export const clearStore = createAsyncThunk('store/clearStore',
    async (_, thunkAPI)=>{

        try {
            thunkAPI.dispatch(logoutUser());

            thunkAPI.dispatch(clearAllJobsState());

            return Promise.resolve()
            
        } catch (error) {
            return Promise.reject(error)
        }

        
    }
)

export const storeSlice = createSlice({
    name: 'store',
    initialState: {},
    reducers: {

    },
    extraReducers: ()=>{
    }
})

export default storeSlice.reducer