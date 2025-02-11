import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null
  }
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state, action) => {
                state.contacts.loading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.items = action.payload;
                state.contacts.loading = false;
                state.contacts.error = null;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.contacts.loading = false;
                state.contacts.error = action.payload;
            })
        .addCase(addContact.pending, (state, action) => {
                state.contacts.loading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.loading = false;
                state.contacts.items.push(action.payload);
                state.contacts.error = null;

            })
            .addCase(addContact.rejected, (state, action) => {
                state.contacts.loading = false;
                state.contacts.error = action.payload;
            })
        .addCase(deleteContact.pending, (state, action) => {
                state.contacts.loading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts.loading = false;
                state.contacts.items = state.contacts.items.filter(contact=> contact.id !==action.payload)
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.contacts.loading = false;
                state.contacts.error = action.payload;
        })
    }
})

export default contactsSlice.reducer;
export const selectContacts = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;