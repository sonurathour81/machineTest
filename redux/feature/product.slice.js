import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataList: {},
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setDataList: (state, action) => {
      state.dataList = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setDataList } = productSlice.actions;

export default productSlice.reducer;
