import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null,
      },
    extraReducers: 
      builder => builder
        .addCase(fetchContacts.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.items = action.payload
          state.loading = false;
        })
        .addCase(fetchContacts.rejected, (state) => {
          state.error = true;
          state.loading = false;
        })
        .addCase(addContact.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.loading = false;
          state.items.push(action.payload)
        })
        .addCase(addContact.rejected, (state) => {
          state.error = true;
          state.loading = false;
        })
        .addCase(deleteContact.pending, (state) => {
          state.error = false;
          state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.items = state.items.filter(
            (contact) => contact.id !== action.payload.id
              );
          state.loading = false;
        })
        .addCase(deleteContact.rejected, (state) => {
          state.error = true;
          state.loading = false;
        })
        .addCase(logOut.fulfilled, state => {
          state.items = [];
          state.loading = false;
          state.error = null;
        }),

})

export const contactsReducer = slice.reducer;


