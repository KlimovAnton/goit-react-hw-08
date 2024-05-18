import { createSelector } from "@reduxjs/toolkit";
import { selectValue } from "../filters/selectors";

export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectItems = state => state.contacts.items;

export const selectVisibleContacts = createSelector(
    [selectItems, selectValue], (items, value) => {
        const filteredContacts = items.filter(contact => 
            contact.name.toLowerCase().includes(value.toLowerCase()))
        
        return filteredContacts;
    }
)