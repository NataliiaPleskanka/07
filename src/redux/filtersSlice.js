import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter(state, actions) {
      return actions.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const selectFilter = (state) => state.filter.name;
export default filterSlice.reducer;
