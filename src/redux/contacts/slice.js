import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./operations";
import { selectNameFilter } from "../filters/slice";


const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items.push(action.payload);        
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
});


export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const state = (state) => state;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase())
    );
  }
);
export const contactReducer = contactsSlice.reducer;
