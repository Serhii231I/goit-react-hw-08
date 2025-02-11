import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://67969524bedc5d43a6c5a4f5.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
    }
})

export const addContact = createAsyncThunk('contact/addContact', async (body, thunkAPI) => {
    try {
      const {data} =  await axios.post('contacts', body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.massage);
        
    }
})

export const deleteContact = createAsyncThunk('contact/deleteContact', async (id, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
        
    }
})