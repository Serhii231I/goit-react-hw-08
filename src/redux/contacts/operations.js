import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi, setAuthHeader } from "../auth/operations";


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    console.log("Token in Redux:", state.auth.token);
    console.log(goitApi.defaults.headers.common)
    if (!token) {
        return thunkAPI.rejectWithValue(" No token found");
    }
    setAuthHeader(token); 

    try {
        const { data } = await goitApi.get('contacts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const addContact = createAsyncThunk('contact/addContact', async (body, thunkAPI) => {
    try {
        const { data } = await goitApi.post('contacts', body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        
    }
})

export const deleteContact = createAsyncThunk('contact/deleteContact', async (id, thunkAPI) => {
    try {
        await goitApi.delete(`contacts/${id}`);
        return id;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        
    }
})