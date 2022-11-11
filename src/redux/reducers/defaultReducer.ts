import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  expenses: string[];
}

const initialState: stateType = {
  expenses: [],
};

const defaultReducer = createSlice({
  name: "defaultReducer",
  initialState: initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = [...state.expenses, action.payload];
    },
  },
});

export const { addExpense } = defaultReducer.actions;

export default defaultReducer.reducer;
