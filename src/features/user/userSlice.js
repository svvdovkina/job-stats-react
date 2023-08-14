import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch, { checkAuthorization } from "../../utils/axios";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";


export const registerUser = createAsyncThunk('user/registerUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/register', user);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

export const loginUser = createAsyncThunk('user/loginUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/login', user);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
)

export const updateUser = createAsyncThunk('user/updateUser',
    async (user, thunkAPI) =>{
        try {
            const resp = await customFetch.patch('/auth/updateUser', user, {
                headers:{
                    authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
                },
            });
            return resp.data;
        } catch (error) {
            return checkAuthorization(error, thunkAPI);
        }
    }
)

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            isLoading: false,
            user: getUserFromLocalStorage(), 
            isSidebarOpen: false,
            error: null
        },
        reducers: {
            toggleSidebar: state => {
                state.isSidebarOpen = !state.isSidebarOpen;
            },
            logoutUser: state => {
                removeUserFromLocalStorage();
                state.isSidebarOpen = false;
                state.user = null;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(registerUser.pending,(state)=>{
                    state.isLoading = true;
                    state.error = null;
                })
                .addCase(registerUser.fulfilled, (state, {payload})=>{
                    const {user} = payload;
                    state.user = user;
                    state.isLoading = false;
                    addUserToLocalStorage(user);
                })
                .addCase(registerUser.rejected, (state, {payload})=>{
                    state.isLoading = false;
                    state.error = payload
                })
                .addCase(loginUser.pending,(state)=>{
                    state.isLoading = true
                    state.error = null
                })
                .addCase(loginUser.fulfilled, (state, {payload})=>{
                    const {user} = payload;
                    state.user = user;
                    state.isLoading = false;
                    addUserToLocalStorage(user);
                })
                .addCase(loginUser.rejected, (state, {payload})=>{
                    state.isLoading = false;
                    state.error = payload;
                })
                .addCase(updateUser.pending,(state)=>{
                    state.isLoading = true
                    state.error = null
                })
                .addCase(updateUser.fulfilled, (state, {payload})=>{
                    const {user} = payload;
                    state.user = user;
                    state.isLoading = false;
                    addUserToLocalStorage(user);
                })
                .addCase(updateUser.rejected, (state, {payload})=>{
                    state.isLoading = false;
                    state.error = payload;
                })
        }
    }
)

export const {toggleSidebar, logoutUser} = userSlice.actions;

export default userSlice.reducer