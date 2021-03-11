import { createSlice } from "@reduxjs/toolkit";

const selectedImgSlice = createSlice({
  name: "selectedImg",
  initialState: {
    id: {},
  },
  reducers: {
    setSelectedImg: (state, action) => {
      state.id = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedImg } = selectedImgSlice.actions;

export default selectedImgSlice;