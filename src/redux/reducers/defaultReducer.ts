import { createSlice } from "@reduxjs/toolkit";

interface Action {

}

const initialState = {
  expenses: {}
}

const defaultReducer = createSlice({
  name: 'defaultReducer',
  initialState: initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses = action.payload;
    }
  }
});

console.log(initialState)

export const { addExpense } = defaultReducer.actions;

export default defaultReducer.reducer;
