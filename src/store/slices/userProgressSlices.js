import { createSlice } from "@reduxjs/toolkit";

const initialState = {userProgressAll: null}
const userProgressSlice = createSlice({
  name: "userProgress",
  initialState,
  reducers: {
    setProgress(state, action) {
      state.userProgressAll = action.payload;
    },
  },
  
});

export const { setProgress } = userProgressSlice.actions;
export default userProgressSlice.reducer;
