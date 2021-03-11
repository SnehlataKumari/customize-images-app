import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectedImgSlice from "./selectedImg";

const store = configureStore({
  reducer: combineReducers({
    selectedImg: selectedImgSlice.reducer,
  }),
});
export default store;