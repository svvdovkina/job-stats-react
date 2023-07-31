import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const registerUser = createAsyncThunk('user/registerUser',
    async (user, thunkAPI) => {
        console.log('Register user: ', user)
    }
)

export const loginUser = createAsyncThunk('user/loginUser',
    async (user, thunkAPI) => {
        console.log('Login user: ', user)
    }
)

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            isLoading: false,
            user: null
        },
        reducers: {

        }
    }
)

export default userSlice.reducer