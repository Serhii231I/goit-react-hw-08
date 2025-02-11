import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "./contactsSlice";

export const selectFilteredContacts = createSelector(
    [selectContacts, (state) => state.filters.name],
    (contacts, filter) => {
     return  contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
}
)
