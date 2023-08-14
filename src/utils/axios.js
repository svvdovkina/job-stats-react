import axios from "axios";
import { clearStore } from "../features/store/storeSlice";

const customFetch = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit'
})

export const checkAuthorization = (error, thunkAPI)=>{
    if (error.response.status === 401) {
        thunkAPI.dispatch(clearStore());
        return thunkAPI.rejectWIthValue('Unauthorized! Logging out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
}

export default customFetch