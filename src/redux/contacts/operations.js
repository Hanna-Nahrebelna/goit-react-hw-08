import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import {report} from "../auth/operations"

const api = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
  try {
    const response = await api.get("/contacts");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
}
);
 
export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (newContact, thunkAPI) => {
  try {
    const response = await api.post("contacts", newContact);
    report();
    return response.data; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }  
}
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const response = await api.delete(`contacts/${id}`);
      report();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
