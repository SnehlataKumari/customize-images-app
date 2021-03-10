import { createSlice } from "@reduxjs/toolkit";

const selectedImgSlice = createSlice({
  name: "selectedImg",
  initialState: {
    id: "",
  },
  reducers: {
    setSelectImg: (state, action) => {
      console.log(state);
      console.log(action);
      // state.id += 1;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedImg } = selectedImgSlice.actions;

export default selectedImgSlice.reducer;