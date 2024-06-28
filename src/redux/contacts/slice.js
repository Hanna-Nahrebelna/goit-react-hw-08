import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "./operations";
import { selectNameFilter } from "../filters/slice";
import { logOut } from "../auth/operations";
import { selectContacts } from "./selectors";

export const handlePeding = (state) => { state.loading = true };
const handleRejected = (state, action) => {state.loading = false; state.error = action.payload};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePeding)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.error = false;
        state.loading = true;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContacts.pending, handlePeding)
      .addCase(addContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.items = action.payload;
      })
      .addCase(addContacts.rejected, handleRejected)
      .addCase(deleteContacts.pending, handlePeding)
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, handleRejected)      
      .addCase(logOut.fulfilled, state => {
      state.items = [];
      state.loading = false;
      state.error = null;
    });
    },
});

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, contactFilter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(contactFilter.toLowerCase()) || contact.number.includes(contactFilter));
  }
);
export const contactReducer = contactsSlice.reducer;
