import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.error = null;
    });
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = (state) => state.contacts.items;
export const contactsReducer = contactsSlice.reducer;
