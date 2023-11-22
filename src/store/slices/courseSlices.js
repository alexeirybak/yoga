
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    name: null,
    benefits: [],
    description: null,
    workouts: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse(state, action) {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.benefits = action.payload.benefits;
        state.description = action.payload.description;
        state.workouts = action.payload.workouts;
    },
  },
});

export const { setCourse } = courseSlice.actions;
export default courseSlice.reducer;