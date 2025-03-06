import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/slice";

export const selectFilter = state => state.filters;
export const selectFilterValue = state => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilterValue],
    (contacts, filter) => {
     return  contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
}
)