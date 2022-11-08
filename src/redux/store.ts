import { configureStore } from "@reduxjs/toolkit";
import defaultReducer from "./reducers/defaultReducer";

const store = configureStore({
  reducer: {
    default: defaultReducer
  }
});

export default store;
